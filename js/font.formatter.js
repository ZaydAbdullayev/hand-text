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
      <input type="radio" name="font" value="${font_class}" onchange="getFont('${font_class}')">
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

function getFont(params) {
    console.log(params);
}

text_input.addEventListener("blur", (e) => {
    console.log(e.target.value?.split('\n'));
    text_body.innerText = e.target.value;
});

const font_parametrs = [
    { title: 'Размер шрифта', min: 1, max: 40, unit: "px", value: 24, full_width: true, name: 'font-size' },
    { title: 'Разнообразие букв', min: 0, max: 100, unit: "px", value: 1, full_width: true, name: 'letter-spacing' },
    { title: 'Отступ сверху', min: 0, max: 50, unit: "px", value: 25, name: 'padding-top' },
    { title: 'Отступ снизу', min: 0, max: 50, unit: "px", value: 25, name: 'padding-bottom' },
    { title: 'Отступ слева', min: 0, max: 50, unit: "px", value: 25, name: 'padding-left' },
    { title: 'Отступ справа', min: 0, max: 50, unit: "px", value: 25, name: 'padding-right' },
    { title: 'Отступ на чёт.стр.', min: 0, max: 50, unit: "px", value: 0, name: 'padding-even' },
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

            // .text-body stilini güncelle
            text_body.style.setProperty(name, value + unit);

            // if (name === 'padding-even') {
            //     // Satırlara yalnızca padding-left değeri ekle ya da güncelle
            //     const lines = text_body.innerHTML.split('\n');
            //     const updatedLines = lines.map((line, index) => {
            //         // Çift satırlara padding-left uygula
            //         if (index % 2 === 1) {
            //             // Eğer daha önce padding-left uygulanmışsa, sadece güncelle
            //             const existingPadding = line.match(/padding-left:\s*(\d+)(px|%)?/);
            //             if (existingPadding) {
            //                 // Daha önce var olan padding'i güncelle
            //                 return line.replace(existingPadding[0], `padding-left: ${value}${unit}`);
            //             } else {
            //                 // Yeni padding-left ekle
            //                 return `<span style="display:block; padding-left: ${value}${unit};">${line}</span>`;
            //             }
            //         }
            //         return line;
            //     });

            //     // Güncellenmiş içeriği yeniden düzenle
            //     text_body.innerHTML = updatedLines.join('\n');
            // }

            // Slider değeri metnini güncelle
            const valueDisplay = slider.nextElementSibling;
            if (valueDisplay) {
                valueDisplay.textContent = value;
            }
        });
    });
};

updateStyles();



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

const font_options = document.querySelectorAll('.font-option');

font_options.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('active');
    });
});
