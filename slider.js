const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('#next-slide');
const prevBtn = document.querySelector('#prev-slide');

let currentSlide = 0;
const maxSlide = slider.children.length - 3;

nextBtn.addEventListener('click', () => {
    if (currentSlide < maxSlide) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
});


const more_imgs = document.querySelectorAll('.more-imgs');
more_imgs.forEach(item => {
    console.log(item);
    const slider_fullscreen = item.querySelector('#fullscreen-slider');
    const nextBtn_fullscreen = item.querySelector('#next-slide-fullscreen');
    const prevBtn_fullscreen = item.querySelector('#prev-slide-fullscreen');
    const close = item.querySelector('.close');
    const open_fullscreen = item.querySelectorAll(".open-fullscreen")

    let currentSlide_fullscreen = 0;
    const maxSlide_fullscreen = slider_fullscreen.children.length - 1;

    nextBtn_fullscreen.addEventListener('click', () => {
        if (currentSlide_fullscreen < maxSlide_fullscreen) {
            currentSlide_fullscreen++;
            slider_fullscreen.style.transform = `translateX(-${currentSlide_fullscreen * 50}%)`;
        }
    });

    prevBtn_fullscreen.addEventListener('click', () => {
        if (currentSlide_fullscreen > 0) {
            currentSlide_fullscreen--;
            slider_fullscreen.style.transform = `translateX(-${currentSlide_fullscreen * 50}%)`;
        }
    });

    open_fullscreen.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.classList.add('fullscreen');
        });
    });

    close.addEventListener('click', () => {
        item.classList.remove('fullscreen');
    });
});
