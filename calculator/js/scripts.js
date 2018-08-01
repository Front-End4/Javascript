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
            console.log(character);
            // switch (character){
            //     case '+':

            // }
            // // let character = characterNum ;
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
                case '~':
                    self.firstValue = self.firstValue.substring(0, self.firstValue.length-1);
                    self.SetValue(self.firstValue);
                    break
                case '=':
                    switch (self.action) {
                        case '+':
                            self.firstValue = parseFloat(self.tempValue) + parseFloat(self.firstValue);
                            break;
                        case '-':
                            self.firstValue = parseFloat(self.tempValue) - parseFloat(self.firstValue);
                            break;
                    }
                    break;
                default:
                        self.firstValue += character;
                    break;
            }
            switch (isNaN(self.firstValue)){
                case true:
                    self.firstValue = 'ВВОДИТЕ ТОЛЬКО ЦИФРЫ! ОбНОВИТЕ СТРАНИЦУ!';
                    break
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
