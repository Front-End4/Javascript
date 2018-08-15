class CRUD {
    constructor (args){
        this._data = args.dataBase ? args.dataBase : [];
        this._dataName = args.dataName ? args.dataName : 'data';
        this.DEBUG = args.debug ? args.debug : false;
        this._dataType = args.dataType ? args.dataType : 'localstorage';
        this.Init();
    }
    /**
     * main function
     */
    Init(){
        switch (this._dataType) {
            case 'localstorage':
                this.LocalStorageGet();
                break;
            case 'file':
                this.FileRead();
                break;
            default:
            this.LocalStorageGet();
                break;
        }
        if (this._data != [] && this.DEBUG) {
            console.message(`Array is empty`);
            this.Create();
        }
        else {
            console.log(`Array is not empty`);
        }
    }
    // ShowProps(){
    //     console.log(this._dataName);
    // }

    /**
     * get an array from localstorage if exist
     */
    LocalStorageGet(){
        this._data = localStorage.getItem(this._dataName) ? localStorage.getItem(this._dataName).split(',') : [];
    }
    /** 
     * set data to localstorage
     */
    LocalStorageSet(){
        localStorage.setItem(this._dataName, this._data);
    }
    FileRead(){
        var xhr = new XMLHttpRequest();
        let self = this;
        xhr.open('GET', '../data/data.txt', false);
        xhr.onreadystatechange = function () {
            if (xhr.status != 200) {
                // обработать ошибку
                alert( xhr.status + ': error ' + xhr.statusText ); // пример вывода: 404: Not Found
            } else {
                // вывести результат
                self._data = xhr.responseText ? xhr.responseText.split(',') : [];
            }
        }
        xhr.send();
    }
    FileUpdate(_string) {
        // localStorage.setItem(this._dataName, this._data);
        var txtFile = new XMLHttpRequest();
        txtFile.open('post', '../action/save.php');
        txtFile.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        txtFile.onloadend = function () {
            var newData = txtFile.responseText;
            if (txtFile.readyState == 4 && txtFile.status == "200") {
                console.log('success ' + newData);
            } else {
                console.log('error ' + newData);
            }
        }
        txtFile.send("data=" + this._data);
    }
    /** 
     * update data in localstorage
     */
    Update(_string){
        this._data.push(_string);
        switch (this._dataType) {
            case 'localstorage':
                this.LocalStorageSet();
                break;
            case 'file':
                this.FileUpdate(_string);
                break;
            default:
            this.LocalStorageSet();
                break;
        }
    }
    Delete(){

    }
}
class Layout {
    constructor (args) {
        this._container = args.container ? this.GetElement(args.container) : this.GetElement('content');
        this._submit = args.submit ? this.GetElement(args.submit) : this.GetElement('submit');
        this._message = args.message ? this.GetElement(args.message) : this.GetElement('message');
        this._masonry = args.masonry;
    }
    GetElement(_elemName){
        return document.getElementById(_elemName);
    }
    Init(){
        console.log('Create layout object');
    }
    OnSubmit(_funcName){
        this._submit.addEventListener("click", _funcName);
    }
    Show(_data){
        for (let i = 0; i < _data.length; i++) {
            this._container.innerHTML += (`
            <div class="col exlarge-w-1-4 large-w-1-3 medium-w-1-2 small-w-1-1">
                <div class="notes__wrapper">
                    <p class="notes__data">${_data[i]}</p>
                </div>
            </div>
            `);
        }
    }
    Clear(){
        this._container.innerHTML = '';
    }
}
