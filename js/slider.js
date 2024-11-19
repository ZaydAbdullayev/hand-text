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


const r_slider = document.querySelector('.text-result_body');

if (r_slider) {
    const slider_fullscreen = document.querySelector('#fullscreen-slider');
    const nextBtn_fullscreen = document.querySelector('#next-slide-fullscreen');
    const prevBtn_fullscreen = document.querySelector('#prev-slide-fullscreen');
    const close = document.querySelector('.close');
    const open_fullscreen = document.querySelector("#open-fullscreen-mode");

    let currentSlide_fullscreen = 0;
    let maxSlide_fullscreen = slider_fullscreen.children.length - 1;
    let percentage = 0;

    nextBtn_fullscreen.addEventListener('click', () => {
        console.log("nextBtn_fullscreen");
        if (currentSlide_fullscreen < maxSlide_fullscreen) {
            currentSlide_fullscreen++;
            slider_fullscreen.style.transform = `translateX(-${currentSlide_fullscreen * percentage}%)`;
        }
    });

    prevBtn_fullscreen.addEventListener('click', () => {
        console.log("prevBtn_fullscreen");
        if (currentSlide_fullscreen > 0) {
            currentSlide_fullscreen--;
            slider_fullscreen.style.transform = `translateX(-${currentSlide_fullscreen * percentage}%)`;
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        open_fullscreen.addEventListener('click', () => {
            const parent_style = `padding-top: ${font_option['padding-top']}px; padding-bottom: ${font_option['padding-bottom']}px;`;
            maxSlide_fullscreen = all_pages.length - 1;
            percentage = 100 / all_pages.length;
            all_pages.forEach((page, index) => {
                const evenIndex = index % 2 === 0;
                const padding_left = `padding-left: ${evenIndex && font_option['padding-even'] > 0
                    ? font_option['padding-even']
                    : font_option['padding-left']
                    }px;`;
                const text = modifiedText(page);
                slider_fullscreen.innerHTML += `
                    <div class="rd10 _result-body ${font_option['font-family']}" 
                         style="background-image: ${font_option['url']};">
                        <p class="fs10 text-body" style="${parent_style} ${padding_left}">${text}</p>
                    </div>
                `;
            });
            r_slider.classList.add('fullscreen');
        });
    });

    close.addEventListener('click', () => {
        slider_fullscreen.innerHTML = "";
        r_slider.classList.remove('fullscreen');
    });
}


