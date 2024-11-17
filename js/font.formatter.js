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

// Font seçeneklerini oluştur
fonts.forEach(({ font_class, font }, index) => {
    font_contents.innerHTML += `
    <label class="w100 pd2 rd5 cp ${font_class} ${index === 0 && "active"}">
      <p>Шрифт ${index + 1}</p>
      <input type="radio" name="font" value="${font_class}" onchange="getFont('${font_class}')">
    </label>`;
});

// Font seçildiğinde, metne fontu uygula ve aktif sınıfı ekle
font_contents.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
        const selectedFontClass = e.target.value;
        console.log(selectedFontClass);
        console.log(result_body);

        // Result body içindeki fontu değiştir
        result_body.className = 'f1 fs10 rd10 _result-body'; // Önceki font sınıfını temizle
        result_body.classList.add(selectedFontClass); // Yeni font sınıfını ekle

        // Tüm font seçeneklerinden aktif olanı kaldır
        document.querySelectorAll('.font_contents label').forEach(label => {
            label.classList.remove('active');
        });

        // Seçilen fonta active sınıfını ekle
        e.target.closest('label').classList.add('active');
    }
});

function getFont(params) {
    console.log(params);
}

text_input.addEventListener("blur", (e) => {
    text_body.innerText = e.target.value;
});

const font_parametrs = [
    { title: 'Размер шрифта', min: 10, max: 40, unit: "px", value: 24, full_width: true, name: 'font-size' },
    { title: 'Разнообразие букв', min: 0, max: 100, unit: "px", value: 1, full_width: true, name: 'letter-spacing' },
    { title: 'Отступ сверху', min: 0, max: 50, unit: "px", value: 25, name: 'padding-top' },
    { title: 'Отступ снизу', min: 0, max: 50, unit: "px", value: 25, name: 'padding-bottom' },
    { title: 'Отступ слева', min: 0, max: 50, unit: "px", value: 25, name: 'padding-left' },
    { title: 'Отступ справа', min: 0, max: 50, unit: "px", value: 25, name: 'padding-right' },
    { title: 'Отступ на чёт.стр.', min: 0, max: 50, unit: "", value: 0, name: 'padding-even' },
    { title: 'Ширина контента', min: 0, max: 100, unit: "%", value: 100, name: 'width' }
];

const font_parametrs_content = document.querySelector('.range-items');

font_parametrs.forEach(({ title, min, max, value, full_width, name, unit }) => {
    // HTML oluşturma
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

// Slider değişikliklerini işleyen fonksiyon
const updateStyles = () => {
    const sliders = document.querySelectorAll('.range-slider__range');
    sliders.forEach(slider => {
        slider.addEventListener('input', (event) => {
            const { name, value } = event.target;
            const unit = event.target.getAttribute('data-unit');

            // .text-body stilini güncelle
            text_body.style.setProperty(name, value + unit);

            // İlgili span'ı güncelle
            const valueDisplay = slider.nextElementSibling; // Slider'dan sonraki span
            if (valueDisplay) {
                valueDisplay.textContent = value;
            }
        });
    });
};

// Sayfa yüklendiğinde başlat
updateStyles();
