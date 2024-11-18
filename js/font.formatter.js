const fonts = [
    { font: "Vasek", font_class: "font-family1" },
    { font: "Caveat", font_class: "font-family2" },
    { font: "StreetbrushW01-Regular", font_class: "font-family3" },
    { font: "VoronovFont", font_class: "font-family4" },
    { font: "Yahfie", font_class: "font-family5" },
    { font: "Myriad Pro", font_class: "font-family6" },
    { font: "Vasek", font_class: "font-family1" },
    { font: "Caveat", font_class: "font-family2" },
    { font: "StreetbrushW01-Regular", font_class: "font-family3" },
    { font: "VoronovFont", font_class: "font-family4" },
    { font: "Yahfie", font_class: "font-family5" },
    { font: "Myriad Pro", font_class: "font-family6" }
];
let font_option = {
    'dynamic-letter-size': true,
    'dynamic-letter-space': true,
    'dynamic-letter-italic': true,
};

const text_input = document.querySelector('#text');
const font_contents = document.querySelector('.font_contents');
const result_body = document.querySelector('._result-body');
const text_body = document.querySelector('.text-body');

fonts.forEach(({ font_class, font }, index) => {
    font_contents.innerHTML += `
    <label class="w100 pd2 rd5 cp ${font_class} ${index === 0 && "active"}">
      <p>Шрифт ${index + 1}</p>
      <input type="radio" name="font" value="${font_class}">
    </label>`;
});

font_contents.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
        const selectedFontClass = e.target.value;
        result_body.className = 'f1 fs10 rd10 _result-body'; // Önceki font sınıfını temizle
        result_body.classList.add(selectedFontClass); // Yeni font sınıfını ekle
        document.querySelectorAll('.font_contents label').forEach(label => {
            label.classList.remove('active');
        });
        e.target.closest('label').classList.add('active');
    }
});

const modifiedText = (text) => {
    let modifiedText = '';
    for (let i = 0; i < text.length; i++) {
        let dynamic_styles = '';
        const char = text[i];
        if (font_option['dynamic-letter-size']) {
            const dynamic_letter_size = Math.floor(Math.random() * 5) + 30;
            dynamic_styles += `font-size: ${dynamic_letter_size}px; `;
        } else {
            dynamic_styles += `font-size: 30px; `;
        }
        if (font_option['dynamic-letter-space']) {
            const dynamic_letter_space = Math.random() * 3;
            dynamic_styles += `letter-spacing: ${dynamic_letter_space}px; `;
        }
        if (font_option['dynamic-letter-italic']) {
            const dynamic_italic = Math.random() > 0.8 ? 'italic' : 'normal';
            dynamic_styles += `font-style: ${dynamic_italic}; `;
        }
        modifiedText += `<span style="${dynamic_styles}">${char}</span>`;
    }
    return modifiedText;
};

// Kullanıcı metin kutusunu kaybettiğinde (blur eventi)
text_input.addEventListener("blur", (e) => {
    let text = e.target.value;
    text_body.innerHTML = modifiedText(text);
    updateStyles();
});

// Font parametreleri ve slider'ların dinamik olarak render edilmesi
const font_parametrs = [
    { title: 'Размер шрифта', min: 1, max: 40, unit: "px", value: 24, full_width: true, name: 'font-size' },
    { title: 'Разнообразие букв', min: 0, max: 100, unit: "px", value: 1, full_width: true, name: 'letter-spacing' },
    { title: 'Отступ сверху', min: 0, max: 50, unit: "px", value: 25, name: 'padding-top' },
    { title: 'Отступ снизу', min: 0, max: 50, unit: "px", value: 25, name: 'padding-bottom' },
    { title: 'Отступ слева', min: 0, max: 50, unit: "px", value: 25, name: 'padding-left' },
    { title: 'Отступ на чёт.стр.', min: 0, max: 50, unit: "px", value: 0, name: 'padding-even' },
    { title: 'Высота линий', min: 0, max: 30, unit: "px", value: 0, name: 'line-height' },
    { title: 'Ширина контента', min: 0, max: 100, unit: "%", value: 100, name: 'width' }
];

const font_parametrs_content = document.querySelector('.range-items');

font_parametrs.forEach(({ title, min, max, value, full_width, name, unit }) => {
    font_parametrs_content.innerHTML += `
    <div class="${full_width ? "w100" : "f50"} df aic gap3 range-slider">
        <span class="${!full_width ? "f1" : ""} fs2 fw3 o05 range-slider__title">${title}</span>
        <input class="range-slider__range" type="range" name="${name}" data-unit="${unit}" max="${max}" min="${min}" value="${value}" />
        <span class="fs2 range-slider__value">${value}</span>
        <div class="df fdc aic gap fs1 counter">
            <i class="fa-solid fa-angle-up cp"></i>
            <i class="fa-solid fa-angle-down cp"></i>
        </div>
    </div>`;
});

const updateStyles = () => {
    const sliders = document.querySelectorAll('.range-slider__range');
    sliders.forEach(slider => {
        slider.addEventListener('input', (event) => {
            const { name, value } = event.target;
            const unit = event.target.getAttribute('data-unit');
            text_body.style.setProperty(name, value + unit); 
            let valueDisplay = slider.nextElementSibling;

            if (font_option['dynamic-letter-size'] && name === 'font-size') {
                const dynamic_letter_size = value + Math.floor(Math.random() * 1);
                for (let i = 0; i < text_body.children.length; i++) {
                    text_body.children[i].style.fontSize = dynamic_letter_size + unit;
                }
            }

            if (font_option['dynamic-letter-space'] && name === 'letter-spacing') {
                const dynamic_letter_space = value + (Math.random() * 6);
                for (let i = 0; i < text_body.children.length; i++) {
                    text_body.children[i].style.letterSpacing = dynamic_letter_space + unit;
                }
            }

            if (font_option['dynamic-letter-italic']) {
                const dynamic_italic = Math.random() > 0.8 ? 'italic' : 'normal';
                for (let i = 0; i < text_body.children.length; i++) {
                    text_body.children[i].style.letterSpacing = dynamic_italic
                }
            }

            if (valueDisplay) {
                valueDisplay.textContent = value;
            }
        });
    });
};

updateStyles();

const font_options = document.querySelectorAll('.font-option');
font_options.forEach(option => {
    option.addEventListener('click', () => {
        const optionName = option.getAttribute('data-font-option');
        font_option[optionName] = !font_option[optionName];
        option.classList.toggle('active');
        text_body.innerHTML = modifiedText(text_input.value);
    });
});


const backgrounds = [
    { url: "../imgs/page__one__right.png" },
    { url: "../imgs/page__two__right.png" },
    { url: "../imgs/page__three__right.png" },
    { url: "../imgs/kubic-bg-1.png" }
]

const background_contents = document.querySelector('._type-contents');
backgrounds.forEach(({ url }, index) => {
    background_contents.innerHTML = `
    <label class="cp bg-type rd10 shadow08 ${index === 3 ? "active" : ""}">
      <input type="radio" name="background" value="${url}">
      <img class="w100" src="${url}" alt="background">
    </label>` + background_contents.innerHTML;
});

background_contents.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
        const selectedBgUrl = e.target.value;
        result_body.style.backgroundImage = `url(${selectedBgUrl})`;
        document.querySelectorAll('.bg-type').forEach(label => {
            label.classList.remove('active');
        });
        e.target.closest('label').classList.add('active');
    }
});

const new_background = document.querySelector('#upload-bg-img');
new_background.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        result_body.style.backgroundImage = `url(${reader.result})`;
    }
    reader.readAsDataURL(file);
});


