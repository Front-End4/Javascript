class Slider {
    constructor (container, args) {
        this.container = document.querySelectorAll(container);
        this.autoplay = args.autoplay ? args.autoplay : false;
        this.autoplaySpeed = args.autoplaySpeed ? args.autoplaySpeed : 1000;
        this.images = this.container[0].children;
        this.animation;
        this.currentSlide = 1;
        this.containerWidth = this.container[0].offsetWidth;
        this.wrapper;
        this.nav;
        this.Init();
    }
    Init(){
        if (this.images === undefined) {
            console.error('no images found');
            return false;
        }
        this.CreateSlider();
        this.CreateNavigation();
        this.Autoplay();
        this.nav.addEventListener('click', () => {
            let newSlide = parseInt(event.target.getAttribute('data-target'));
            this.currentSlide = newSlide - 1;
            this.SlideSwitch();
        })
    }
    SlideSwitch(){
        this.wrapper.style.cssText = `transform: translateX(-${this.containerWidth * this.currentSlide}px)`;
    }
    Autoplay(){
        if (this.autoplay) {
            setInterval(() => {
                this.SlideSwitch();
                this.currentSlide++;
                this.currentSlide + 1 > this.images.length ? this.currentSlide = 0 : '';
            }, this.autoplaySpeed);
        }
    }
    CreateNavigation(){
        this.nav = document.createElement('ul');
        this.nav.classList.add('slider__nav');
        for (let index = 0; index < this.images.length; index++) {
            let element = document.createElement('li');
            element.classList.add('slider__nav-item');
            element.innerText = index + 1;
            element.setAttribute('data-target', index + 1);
            this.nav.appendChild(element);
        }
        this.container[0].appendChild(this.nav);
    }
    CreateSlider(){
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('slider__wrapper');
        for (const image in this.images) {
            if (this.images.hasOwnProperty(image)) {
                const slideItem = this.images[image].cloneNode(true);
                let element = document.createElement('div');
                element.classList.add('slider__item');
                element.style.width = this.containerWidth + 'px';
                element.appendChild(slideItem);
                this.wrapper.appendChild(element);
            }
        }
        this.RemoveOldElements();
        this.container[0].appendChild(this.wrapper);
        this.images = document.querySelectorAll('.slider__item');
    }
    RemoveOldElements(){
        for (let index = -2; index < this.images.length; index++) {
            this.images[0].remove();
        }
        this.images[0].remove();
    }

}

const slider = new Slider('.slider', {
    autoplay: true,
    autoplaySpeed: 500
})