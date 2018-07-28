class CRUD {
    constructor (args){
        this._data = args.dataBase ? args.dataBase : [];
        this._dataName = args.dataName ? args.dataName : 'data';
        this.DEBUG = args.debug ? args.debug : false;
        this.Init();
    }
    /**
     * main function
     */
    Init(){
        this.Read();
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
     * return an array from localstorage if exist
     */
    Read(){
        this._data = localStorage.getItem(this._dataName) ? localStorage.getItem(this._dataName).split(',') : [];
    }
    /** 
     * create data in localstorage
     */
    Create(){
        localStorage.setItem(this._dataName, this._data);
    }
    /** 
     * update data in localstorage
     */
    Update(_string){
        this._data.push(_string);
        localStorage.setItem(this._dataName, this._data);
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

let crud = new CRUD({});
let layout = new Layout({});
var msnry = new Masonry(layout._container, {
  itemSelector: '.col'
});

layout.OnSubmit(function () {
    let messageText = layout._message.value;
    msnry.destroy();
    crud.Update(messageText);
    layout.Clear();
    layout.Show(crud._data);
    msnry = new Masonry( layout._container, {
        itemSelector: '.col'
    });
})

layout.Show(crud._data);