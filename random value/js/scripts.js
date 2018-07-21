function getRandom(_from, _to){
    let min = _from > _to ? _from : _to,
        max = _to < _from ? _to : _from;

    var _randomNumber = (min - .5 + Math.random() * (max - min + 1));
    return Math.round(_randomNumber);
}

let num1 = getRandom(-50, 200);

console.log(num1);