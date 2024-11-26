document.querySelectorAll('.slide-img-box').forEach((box) => {
    const more_imgs = box.querySelector('.more-imgs');
    const open = box.querySelector(".open-main-screen")

    const container = more_imgs.querySelector('#fullscreen-slider');
    const nextBtn = more_imgs.querySelector('#next-slide-fullscreen');
    const prevBtn = more_imgs.querySelector('#prev-slide-fullscreen');
    const open_fullscreen = more_imgs.querySelectorAll(".open-fullscreen")
    const close = more_imgs.querySelector('.close');
    const fullscreen_dots = more_imgs.querySelectorAll(".dot");

    let currentIndex = 0;

    function updatePagination2() {
        fullscreen_dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }
    function scrollToIndex(index) {
        const containerWidth = container.offsetWidth;
        container.scrollTo({
            left: index * containerWidth,
            behavior: "smooth",
        });
        currentIndex = index;
        updatePagination2();
    }
    nextBtn.addEventListener("click", () => {
        if (currentIndex < fullscreen_dots.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    });
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    });
    container.addEventListener("scroll", () => {
        const containerWidth = container.offsetWidth;
        currentIndex = Math.round(container.scrollLeft / containerWidth);
        updatePagination2();
    });
    updatePagination2();
    open_fullscreen.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.classList.add('fullscreen');
        });
    });
    close.addEventListener('click', () => {
        more_imgs.classList.remove('fullscreen');
    });

    open.addEventListener('click', () => {
        more_imgs.classList.add('fullscreen');
    });
});


const r_slider = document.querySelector('.text-result_body');

if (r_slider) {
    const open_fullscreen = document.querySelector("#open-fullscreen-mode");
    const slider_fullscreen = document.querySelector('.result-fullscreen-body');
    const nextBtn_fullscreen = document.querySelector('#result-slide-next');
    const prevBtn_fullscreen = document.querySelector('#result-slide-prev');
    const close = r_slider.querySelector('.close');
    const fullscreen_pagination = document.querySelector('.pagination-fullscreen');
    let currentIndex = 0;

    function updatePagination3() {
        const fullscreen_dots = document.querySelectorAll(".dot-fullscreen");
        fullscreen_dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function scrollToIndex(index) {
        const containerWidth = slider_fullscreen.offsetWidth;
        slider_fullscreen.scrollTo({
            left: index * containerWidth,
            behavior: "smooth",
        });
        currentIndex = index;
        updatePagination3();
    }

    nextBtn_fullscreen.addEventListener("click", () => {
        if (currentIndex < all_pages.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    });

    prevBtn_fullscreen.addEventListener("click", () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    });

    slider_fullscreen.addEventListener("scroll", () => {
        const containerWidth = slider_fullscreen.offsetWidth;
        currentIndex = Math.round(slider_fullscreen.scrollLeft / containerWidth);
        updatePagination3();
    });

    open_fullscreen.addEventListener('click', () => {
        const parent_style = `padding-top: ${font_option['padding-top']}px; padding-bottom: ${font_option['padding-bottom']}px;`;
        const pageQuantity = all_pages.length;
        slider_fullscreen.innerHTML = "";
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
                    <p class="h100 fs10 text-body" style="${parent_style} ${padding_left}">${text}</p>
                </div>
            `;
        });

        fullscreen_pagination.innerHTML = Array.from({ length: pageQuantity }, (_, i) => {
            return `<span class="dot-fullscreen ${i === 0 ? 'active' : ''}"></span>`;
        }).join("");
        r_slider.classList.add('fullscreen');
        updatePagination3(); // Başlangıçta pagination güncelle
    });

    close.addEventListener('click', () => {
        slider_fullscreen.innerHTML = "";
        r_slider.classList.remove('fullscreen');
    });
}


const text_wrapper = document.querySelector('.text-generator-wrapper');
const close_mobile_wrapper = document.querySelector('.close-mobile-wrapper');
const open_text_generator = document.querySelector('.open-text-generator');

if (text_wrapper) {
    open_text_generator.addEventListener('click', (e) => {
        e.stopPropagation();
        text_wrapper.classList.add('mobile');
    });

    open_text_generator.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        text_wrapper.classList.add('mobile');
    });

    close_mobile_wrapper.addEventListener('click', () => {
        text_wrapper.classList.remove('mobile');
    });
}