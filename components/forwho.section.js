const forwhoContents = [
    {
        title: "Студенты и школьники",
        description:
            "Надоело переписывать учебные материалы от руки? Понимаем!Теперь у тебя есть простой выход из ситуации 😎",
        image: "../imgs/Img.png",
    },
    {
        title: "Учителя и преподаватели",
        description:
            "Используй рукописные элементы для наглядных схем, конспектов или заметок — так ученики лучше запомнят информацию",
        image: "../imgs/Img-1.png",
    },
    {
        title: "Дизайнеры",
        description:
            "Ищешь что-то особенное для проекта? Переводи текст в рукописный формат, добавь уникальности постерам и макетам",
        image: "../imgs/Img-2.png",
    },
    {
        title: "Писатели и поэты",
        description:
            "Хочешь увидеть свои стихи или рассказы в новом стиле? Преврати их в рукописный текст - почувствуй, как оживают слова на бумаге!",
        image: "../imgs/Img-3.png",
    },
    {
        title: "Каллиграфы",
        description:
            "Тренируй почерк или просто наслаждайся эстетикой каллиграфии, переводя любой текст в рукописный стиль",
        image: "../imgs/Img-4.png",
    },
    {
        title: "Оживи свои слова!",
        description:
            "Результат за секунду. Переводи текст в рукописный и наслаждайся результатом",
        image: "../imgs/Img-4.png",
        button: true
    },
];

const container = document.querySelector(".info-body");
const dots = document.querySelectorAll(".dot-info");

container.addEventListener("scroll", () => {
    const containerWidth = container.offsetWidth;
    const activeIndex = Math.round(container.scrollLeft / containerWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
    });
});

container.innerHTML = forwhoContents.map((content, index) => {
    return `
        <figure class="df fdc aic gap2 info-item">
          <img class="rd10" src="${content.image}" alt="info" />
          <figcaption class="w100 df fdc gap2 rd10">
            <p class="fs2">${content.title}</p>
            <div class="df aic">
              <span class="fs1">${content.description}</span>
              ${content.button ? `<button class="black-button small fs05">Зарегистрироваться</button>` : ''}
            </div>
          </figcaption>
        </figure>
    `
}).join("");