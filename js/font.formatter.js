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
        font_option['font-family'] = selectedFontClass;
        document.querySelectorAll('.font_contents label').forEach(label => {
            label.classList.remove('active');
        });
        e.target.closest('label').classList.add('active');
    }
});

const default_text_result_height = 500;
let all_pages = [];
let font_option = {
    'dynamic-letter-size': true,
    'dynamic-letter-space': true,
    'dynamic-letter-italic': true,
    'font-size': 24,
    'letter-spacing': 1,
    'padding-top': 25,
    'padding-bottom': 25,
    'padding-left': 25,
    'padding-even': 0,
    'line-height': 28,
    'width': 100,
    'font-family': 'font-family1',
    url: "../imgs/page__one__right.png"
};

const calculateLinesPerPage = () => {
    const availableHeight = default_text_result_height - font_option['padding-top'] - font_option['padding-bottom'];
    return Math.floor(availableHeight / font_option['line-height']);
};

const splitTextIntoPages = (text) => {
    const linesPerPage = calculateLinesPerPage();
    const lines = text.split('\n');
    const pages = [];
    let currentPage = [];
    lines.forEach(line => {
        currentPage.push(line);
        if (currentPage.length >= linesPerPage) {
            pages.push(currentPage.join('\n'));
            currentPage = [];
        }
    });
    if (currentPage.length > 0) {
        pages.push(currentPage.join('\n'));
    }
    all_pages = pages;
    return pages;
};

const modifiedText = (text) => {
    let modifiedHTML = '';
    const baseFontSize = font_option['font-size'];
    const baseLetterSpacing = font_option['letter-spacing'];
    const highlightChance = 0.4; // Harflerin %40'ının farklı stil alması
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === ' ') {
            modifiedHTML += `<span>&nbsp;</span>`;
            continue;
        }
        if (char === '\n') {
            modifiedHTML += `<br />`;
            continue;
        }
        let dynamicStyles = `font-size: ${baseFontSize}px; letter-spacing: ${baseLetterSpacing}px; font-style: normal; line-height: ${font_option['line-height']}px;`;
        if (Math.random() < highlightChance) {
            const largerFontSize = font_option['dynamic-letter-size'] ? baseFontSize + 5 : baseFontSize;
            const randomLetterSpacing = font_option['dynamic-letter-space'] ? baseLetterSpacing + 0.5 : baseLetterSpacing;
            const isItalic = Math.random() > 0.8 && font_option['dynamic-letter-space'] ? 'italic' : 'normal';
            dynamicStyles = `font-size: ${largerFontSize}px; letter-spacing: ${randomLetterSpacing}px; font-style: ${isItalic}; line-height: ${font_option['line-height']}px;`;
        }
        modifiedHTML += `<span style="${dynamicStyles}" letter-index="${i}">${char}</span>`;
    }
    return modifiedHTML;
};

text_input.addEventListener('blur', (e) => {
    const text = e.target.value;
    const pages = splitTextIntoPages(text);
    const resultHTML = modifiedText(pages[0]);
    text_body.innerHTML = resultHTML;
});

const font_parametrs = [
    { title: 'Размер шрифта', min: 1, max: 40, unit: "px", value: 24, full_width: true, name: 'font-size' },
    { title: 'Разнообразие букв', min: 0, max: 100, unit: "px", value: 1, full_width: true, name: 'letter-spacing' },
    { title: 'Отступ сверху', min: 0, max: 250, unit: "px", value: 25, name: 'padding-top' },
    { title: 'Отступ снизу', min: 0, max: 250, unit: "px", value: 25, name: 'padding-bottom' },
    { title: 'Отступ слева', min: 0, max: 250, unit: "px", value: 25, name: 'padding-left' },
    { title: 'Отступ на чёт.стр.', min: 0, max: 250, unit: "px", value: 0, name: 'padding-even' },
    { title: 'Высота линий', min: 0, max: 100, unit: "px", value: 28, name: 'line-height' },
    { title: 'Ширина контента', min: 0, max: 100, unit: "%", value: 100, name: 'width' }
];

const font_parametrs_content = document.querySelector('.range-items');

// HTML yapısını oluşturma
font_parametrs.forEach(({ title, min, max, value, full_width, name, unit }) => {
    font_parametrs_content.innerHTML += `
    <div class="${full_width ? "w100" : "f50"} df aic gap3 range-slider">
        <span class="${!full_width ? "f1" : ""} fs2 fw3 o05 range-slider__title">${title}</span>
        <input class="range-slider__range" type="range" name="${name}" data-unit="${unit}" max="${max}" min="${min}" value="${value}" />
        <span class="fs2 range-slider__value">${value}</span>
        <div class="df fdc aic gap fs1 counter">
            <i class="fa-solid fa-angle-up cp counter-plus"></i>
            <i class="fa-solid fa-angle-down cp counter-minus"></i>
        </div>
    </div>`;
});

const updateStyles = () => {
    const sliders = document.querySelectorAll('.range-slider__range');
    sliders.forEach(slider => {
        slider.addEventListener('input', (event) => {
            const { name, value } = event.target;
            const unit = event.target.getAttribute('data-unit');
            font_option[name] = parseFloat(value);

            // Değerin doğru şekilde uygulanmasını sağla
            text_body.style.setProperty(name, value + unit);
            const valueDisplay = slider.nextElementSibling;
            if (valueDisplay) {
                valueDisplay.textContent = value;
            }

            // Dinamik stil güncelleme
            const children = [...text_body.children];
            const highlightChance = 0.4; // %40 oranında rastgele stil uygulanacak
            children.forEach((child) => {
                const isHighlighted = Math.random() < highlightChance;
                if (font_option['dynamic-letter-size'] && name === 'font-size') {
                    child.style.fontSize = isHighlighted
                        ? font_option['font-size'] + 5 + unit
                        : font_option['font-size'] + unit;
                }
                if (font_option['dynamic-letter-space'] && name === 'letter-spacing') {
                    child.style.letterSpacing = isHighlighted
                        ? font_option['letter-spacing'] + 2 + unit
                        : font_option['letter-spacing'] + unit;
                }
                if (name === 'line-height') {
                    child.style.lineHeight = font_option['line-height'] + unit;
                }
            });
        });
    });

    // Artırma ve azaltma butonları için işlevsellik
    const plusButtons = document.querySelectorAll('.counter-plus');
    const minusButtons = document.querySelectorAll('.counter-minus');

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const slider = sliders[index];
            const max = parseFloat(slider.max);
            const step = 1; // İsteğe bağlı: adım miktarı
            let value = parseFloat(slider.value) + step;
            if (value > max) value = max;
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
        });
    });

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const slider = sliders[index];
            const min = parseFloat(slider.min);
            const step = 1; // İsteğe bağlı: adım miktarı
            let value = parseFloat(slider.value) - step;
            if (value < min) value = min;
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
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
        font_option.url = `url(${selectedBgUrl})`;
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
        font_option.url = `url(${reader.result})`;
        result_body.style.backgroundImage = `url(${reader.result})`;
    }
    reader.readAsDataURL(file);
});


