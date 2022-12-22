const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;

function bodyBg() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
bodyBg()

function currentSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    slides[activeSlide].classList.add('active');
}

leftBtn.addEventListener('click', () => {
    if (activeSlide == 0) {
        activeSlide = 0;
    } else {
        activeSlide--;
        bodyBg()
        currentSlide()
    }
})
rightBtn.addEventListener('click', () => {
    if (activeSlide == slides.length - 1) {
        activeSlide = slides.length - 1;
    } else {
        activeSlide++;
        bodyBg()
        currentSlide()
    }
})

