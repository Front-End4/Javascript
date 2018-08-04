class SimpleSlider {
    constructor (imagesArray){
        this.timer;
        this.images = imagesArray;
        this.image = document.querySelector('.img');
        this.Init();
    }
    Init(){
        let maxLength = this.images.length,
            current = 0;
        const path = './img/';
        this.timer = setInterval(() => {
            this.image.setAttribute('src', path + this.images[current++]);
            current + 1 > maxLength ? current = 0 : '';
        }, 1000);
        document.addEventListener('click', () => {
            clearInterval(this.timer);
            console.log('interval is off');
        });
    }
}

const simpleSlider = new SimpleSlider(['01.jpg','02.jpg','03.jpg','04.jpg']);