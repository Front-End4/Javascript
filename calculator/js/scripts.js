class Calculator {
    constructor (args) {
        this.lcd = document.getElementById("lcd");
        this.firstValue = '';
        this.tempValue = '';
        this.action = '';
        this.Init();
    }
    Init(){
        const self = this;
        document.addEventListener('keypress', function (e) {
            let character = String.fromCharCode(e.keyCode || e.charCode);
            switch (character) {
                case '+':
                    self.action = character;
                    self.tempValue = self.firstValue;
                    self.firstValue = '';
                    break;
                case '-':
                    self.action = character;
                    self.tempValue = self.firstValue;
                    self.firstValue = '';
                    break;
                case '=':
                    switch (self.action) {
                        case '+':
                            self.firstValue = parseInt(self.tempValue) + parseInt(self.firstValue);
                            break;
                        case '-':
                            self.firstValue = parseInt(self.tempValue) - parseInt(self.firstValue);
                            break;
                    }
                    break;
                default:
                    self.firstValue += character;
                    break;
            }
            self.SetValue(self.firstValue);
        })
    }
    SetValue (_value){
        this.lcd.value = _value;
    }
    GetValue(){
        return this.lcd.value;
    }
}

const calc = new Calculator({});
