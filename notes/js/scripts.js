let data = [];

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
    let _data = localStorage.getItem("data").split(',');
    return _data;
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
    let data = _data.split(',');
    for (let i = 0; i < data.length; i++) {
        document.write(`<div>${data[i]}</div>`);
    }
}

show(data);

function add(_data, _string) {
    _data.push(_string);
}
