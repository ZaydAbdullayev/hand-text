const slider = document.querySelector(".slider");
const nextBtn = document.querySelector("#next-slide");
const prevBtn = document.querySelector("#prev-slide");
const slide_dots = document.querySelectorAll(".dot-slider");
const mobile = window.matchMedia("(max-width: 430px)").matches;

let currentIndex = 0;
const slide_action = mobile ? 1 : 3;

function updatePagination1() {
    slide_dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function s_scrollToIndex(index) {
    const totalItems = slider.children.length;
    const itemWidth = slider.offsetWidth / slide_action;
    const last_index = mobile ? 6 : 5;
    if (index < 0) {
        index = totalItems - 1;
    }
    if (index === last_index) {
        index = 0;
    }
    slider.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
    });

    updatePagination1(); // Pagination güncelle
}

nextBtn.addEventListener("click", () => {
    s_scrollToIndex(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
    s_scrollToIndex(currentIndex - 1);
});

slider.addEventListener("scroll", () => {
    const itemWidth = slider.offsetWidth / slide_action;
    currentIndex =
        Math.round(slider.scrollLeft / itemWidth) % slider.children.length;
    updatePagination1();
});

updatePagination1();

const slides = [
    {
        author: "Ольга",
        topic: "Функции белков в организме",
        description:
            "Получился очень понятный и аккуратный конспект. Преобразованный текст выглядит как написанный вручную, что делает его удобным для чтения и запоминания.",
        img: "../imgs/file-0.png",
    },
    {
        author: "Дмитрий",
        topic: "Бактериальная клетка",
        description:
            "Радует, что можно быстро преобразовать текст в рукописный, выглядит как настоящие лекции. Понравился выбор стилей листов, можно сделать уникальный конспект",
        img: "../imgs/file-1.png",
    },
    {
        author: "Ирина",
        topic: "Строение и функции клеточной мембраны",
        description:
            "Понравилось, что информация изложена структурировано. Конспект получился очень наглядным и удобным для изучения. Замечательно, что были описаны все основные функции",
        img: "../imgs/file-2.png",
    },
    {
        author: "Мария",
        topic: "Витамины и их роль в организме",
        description:
            "Замечательный конспект, который охватывает все витамины и функции. Очень удобно, что каждая группа витаминов описана отдельно. Приятно учить с таким понятным материалом",
        img: "../imgs/file-4.png",
    },
    {
        author: "Екатерина",
        topic: "Основы фотосинтеза",
        description:
            "Информация сжато изложена, без лишних деталей. Конспект легко запоминается, особенно благодаря разделению на этапы. Прекрасный материал для подготовки к экзаменам!",
        img: "../imgs/file-5.png",
    },
    {
        author: "Анна",
        topic: "Закон всемирного тяготения",
        description: "Прекрасный способ сделать конспекты для физики. Очень довольна результатом, текст выглядит аккуратно и понятно. Буду использовать для всех учебных тем!",
        img: "../imgs/file-6.png",
    },
    {
        author: "Анна",
        topic: "Закон всемирного тяготения",
        description: "Прекрасный способ сделать конспекты для физики. Очень довольна результатом, текст выглядит аккуратно и понятно. Буду использовать для всех учебных тем!",
        img: "../imgs/Image - 4.png",
    },
];

slider.innerHTML = slides.map((slide, index) => {
    return `
         <figure class="df fdc gap3 slider-item">
            <div class="w100 rd10 slide-img-box">
              <img src="${slide.img}" class="rd10 open-main-screen" alt="example" />
              <div class="w100 h100 df aic jc gap4 more-imgs">
                <i class="close"></i>
                <img src="${slide.img}" class="rd10 open-fullscreen" alt="example" />
                <img src="${slide.img}" class="rd10 open-fullscreen" alt="example" />
                <div class="df aic jc slide-btn" id="fullscreen-slide-prev">
                  <span class="df aic jc fs2 cp" id="prev-slide-fullscreen">
                    <i class="fa-solid fa-angle-left"></i>
                  </span>
                </div>
                <div class="df aic gap6 slider-container-fullscreen">
                  <div class="f1 df slider-fullscreen" id="fullscreen-slider">
                    <img src="${slide.img}" class="rd10 slider-item-fullscreen" alt="example" />
                    <img src="${slide.img}" class="rd10 slider-item-fullscreen" alt="example" />
                  </div>
                </div>
                <div class="shadow08 rd20 pd2 pagination">
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
                <div class="df aic jc slide-btn" id="fullscreen-slide-next">
                  <span class="df aic jc fs2 cp" id="next-slide-fullscreen">
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <figcaption class="w100 df fdc fs1 rd10 gap1">
              <p class="df aic gap2 fs2">
                <b>${slide.author}</b> <span>${slide.topic}</span>
              </p>
              <span>${slide.description}</span>
            </figcaption>
          </figure>
    `
}).join("");
