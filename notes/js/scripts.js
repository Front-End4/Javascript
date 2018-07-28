let data = [];
const content = document.getElementById('content');
const submit = document.getElementById("submit");
let message = document.getElementById("message");

if (read()) {
    data = read();
}
else {
    create();
}

/**
 * @returns array of data
 */
function read() {
    return localStorage.getItem("data") ? localStorage.getItem("data").split(',') : [];
}
/**
 * @param {array of data} _data 
 */
function create(_data){
    localStorage.setItem("data", _data);
}
/**
 * 
 * @param {array of data} _data 
 */
function update(_data) {
    localStorage.setItem("data", _data);
}

function show(_data) {
    for (let i = 0; i < data.length; i++) {
        content.innerHTML += (`
        <div class="col exlarge-w-1-4 large-w-1-3 medium-w-1-2 small-w-1-1">
            <div class="notes__wrapper">
                <p class="notes__data">${data[i]}</p>
            </div>
        </div>
        `);
    }
}

function clear() {
    content.innerHTML = '';
}

show(data);

function add(_data, _string) {
    _data.push(_string);
}

submit.addEventListener("click", function() {
    let messageText = message.value;
    msnry.destroy();
    add(data, messageText);
    update(data);
    clear();
    show(data);
    msnry = new Masonry( content, {
        itemSelector: '.col'
    });
    console.log(this);
    this.value = "Отправлено";
    setTimeout(() => {
        console.log(this);
        this.value = "Отправить";
    }, 3000);
});

var msnry = new Masonry( content, {
  itemSelector: '.col'
});
