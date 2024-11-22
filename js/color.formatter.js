let default_colors = {
    text_color: "#0035E2",
    background_color: "#0035E2",
    brightness: 50,
}
let active_format = null;
let startIndex = null;
let endIndex = null;

const colors = ["#0035E2", "#000", "#DA0000", "#1A9E00"];

const formats = [
    {
        icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg" >
<g mask="url(#mask0_230_4741)">
<path id="color-path" d="M2.5835 20V17.5H18.4168V20H2.5835ZM5.38808 14.1666L9.77912 2.91663H11.2212L15.6122 14.1666H14.1091L12.9875 11.1506H8.00662L6.85912 14.1666H5.38808ZM8.44558 9.91663H12.5227L10.5418 4.66663H10.4425L8.44558 9.91663Z" fill="${default_colors.text_color}"/>
</g>
</svg>`,
        name: "color",
        tooltip: true,
    },
    {
        icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg">
<g mask="url(#mask0_230_4744)">
<path id="bg-path" d="M5.82192 1.65533L6.70505 0.769287L13.6665 7.73075C13.9593 8.02352 14.1057 8.38193 14.1057 8.80595C14.1057 9.23012 13.9593 9.58859 13.6665 9.88137L10.0607 13.503C9.77331 13.7905 9.41755 13.9343 8.99338 13.9343C8.56921 13.9343 8.21345 13.7905 7.92609 13.503L4.32046 9.88137C4.02768 9.58859 3.8813 9.23012 3.8813 8.80595C3.8813 8.38193 4.02768 8.02352 4.32046 7.73075L8.11046 3.94387L5.82192 1.65533ZM9.0015 4.83491L5.18255 8.63783C5.15588 8.6645 5.13852 8.69255 5.13046 8.722C5.12241 8.7513 5.11838 8.782 5.11838 8.81408H12.8684C12.8684 8.782 12.8644 8.7513 12.8565 8.722C12.8484 8.69255 12.8311 8.6645 12.8044 8.63783L9.0015 4.83491ZM16.1569 14.4551C15.7519 14.4551 15.4076 14.3132 15.124 14.0295C14.8404 13.7459 14.6986 13.4016 14.6986 12.9968C14.6986 12.7265 14.7747 12.4474 14.9269 12.1595C15.0791 11.8716 15.2434 11.6005 15.4196 11.3462C15.5339 11.1902 15.6525 11.0326 15.7755 10.8735C15.8984 10.7141 16.0255 10.5565 16.1569 10.4005C16.2883 10.5565 16.4155 10.7141 16.5384 10.8735C16.6612 11.0326 16.7797 11.1902 16.894 11.3462C17.0703 11.6005 17.2346 11.8716 17.3869 12.1595C17.5391 12.4474 17.6153 12.7265 17.6153 12.9968C17.6153 13.4016 17.4734 13.7459 17.1896 14.0295C16.906 14.3132 16.5618 14.4551 16.1569 14.4551ZM2.1665 19.9999V17.4999H18.8332V19.9999H2.1665Z" fill="${default_colors.background_color}"/>
</g>
</svg>`,
        tooltip: true,
        name: "text-background"
    },
    {
        icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg">
<g mask="url(#mask0_230_4747)">
<path d="M16.7502 10.9327C16.7502 11.3685 16.7039 11.7956 16.6114 12.2139C16.5191 12.6321 16.3837 13.0416 16.2052 13.4423L15.2341 12.4969C15.3282 12.2608 15.396 12.0144 15.4377 11.7579C15.4793 11.5015 15.5002 11.2264 15.5002 10.9327C15.5002 10.2799 15.3787 9.65916 15.1356 9.07041C14.8925 8.48179 14.528 7.95832 14.0418 7.49999L10.5002 3.99999L8.60268 5.85582L7.72456 4.97749L10.5002 2.24353L14.92 6.5802C15.483 7.11547 15.9288 7.76902 16.2573 8.54082C16.5859 9.31277 16.7502 10.1101 16.7502 10.9327ZM17.0323 18.2883L14.4329 15.6889C13.9062 16.1292 13.3045 16.4717 12.6277 16.7162C11.9507 16.961 11.2416 17.0833 10.5002 17.0833C8.76518 17.0833 7.28977 16.4837 6.07393 15.2844C4.8581 14.0852 4.25018 12.6346 4.25018 10.9327C4.25018 10.1923 4.38136 9.48902 4.64372 8.82291C4.90595 8.15679 5.26734 7.54381 5.72789 6.98395L2.25977 3.51603L3.1381 2.63791L17.9104 17.4102L17.0323 18.2883ZM10.5002 15.8333C11.107 15.8333 11.6695 15.7332 12.1877 15.5329C12.7059 15.3325 13.153 15.0833 13.5291 14.7852L6.60602 7.8877C6.27157 8.31617 6.00365 8.78603 5.80227 9.29728C5.60088 9.80853 5.50018 10.3537 5.50018 10.9327C5.50018 12.2938 5.98629 13.4508 6.95852 14.4037C7.93074 15.3568 9.11129 15.8333 10.5002 15.8333Z" fill="black"/>
</g>
</svg>
`,
        name: "color-reset",
    },
    {
        icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg">
<g mask="url(#mask0_230_4750)">
<path d="M2.5835 11.4502V10.2004H18.4168V11.4502H2.5835ZM9.6187 8.54979V5.52083H5.09162V3.75H15.9168V5.52083H11.3895V8.54979H9.6187ZM9.6187 16.25V13.101H11.3895V16.25H9.6187Z" fill="black"/>
</g>
</svg>`,
        name: "format-strike",
    },
    {
        icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg">
<g mask="url(#mask0_230_4753)">
<path d="M4.95508 16.7707V15.5207H16.0447V16.7707H4.95508ZM10.4999 13.7739C9.2039 13.7739 8.19244 13.3805 7.46549 12.5936C6.73841 11.8068 6.37487 10.7526 6.37487 9.43094V2.84448H7.91966V9.50782C7.91966 10.3498 8.14348 11.0245 8.59112 11.532C9.03876 12.0395 9.67501 12.2932 10.4999 12.2932C11.3247 12.2932 11.961 12.0395 12.4086 11.532C12.8563 11.0245 13.0801 10.3498 13.0801 9.50782V2.84448H14.6249V9.43094C14.6249 10.7526 14.2613 11.8068 13.5342 12.5936C12.8073 13.3805 11.7958 13.7739 10.4999 13.7739Z" fill="black"/>
</g>
</svg>
`,
        name: "format-underlined",
    },
    {
        icon: `<svg width="21" height="20" viewBox="0 0 21 20" fill="#d9d9d9" xmlns="http://www.w3.org/2000/svg">
<g mask="url(#mask0_230_4756)">
<path d="M11.2276 8.46484L9.86721 7.10422L10.1957 6.31088H9.05783L7.28221 4.53526H16.7982V6.29818H12.1491L11.2276 8.46484ZM16.8078 18.064L10.0274 11.2757L8.23242 15.4967H6.30471L8.67971 9.92797L2.35596 3.61234L3.23408 2.73401L17.686 17.1859L16.8078 18.064Z" fill="black"/>
</g>
</svg>
`,
        name: "format-clear",
    }
];

const adjustColorBrightness = (hexColor, brightness) => {
    const bigint = parseInt(hexColor.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const alpha = brightness / 100;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


const _parametrs_header = document.querySelector("._left-params");

formats.forEach((format) => {
    _parametrs_header.innerHTML += `
    <div class="rd5 tooltip" data-name="${format.name}">
        <span class='w100 h100 df aic jc  cp tooltip-header'>${format.icon}</span>
        ${format.tooltip ? `${renderTooltipBody(format.name)}` : ""}
    </div>
    `;
});

const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
    const close = tooltip.querySelector(".close-tooltip");
    const open = tooltip.querySelector('.tooltip-header')
    open.addEventListener("click", (e) => {
        e.stopPropagation();
        const name = tooltip.getAttribute("data-name");
        active_format = name;
        if (name === "color" || name === "text-background") {
            const c_path_element = document.getElementById("color-path");
            const bg_path_element = document.getElementById("bg-path");
            tooltips.forEach((t) => {
                if (t !== tooltip) {
                    t.classList.remove("active");
                }
            })
            if (name === "color") {
                tooltip.classList.add("active");
            } else if (name === "text-background" && startIndex === null && endIndex === null) {
                tooltip.classList.add("active");
            }
            const color_options = tooltip.querySelectorAll(".color-option");
            color_options.forEach((option) => {
                option.addEventListener("click", () => {
                    const color = option.getAttribute("data-color");
                    default_colors[name === "color" ? "text_color" : "background_color"] = color;

                    if (name === "color") {
                        text_body.style.setProperty("color", color);
                        c_path_element.style.fill = color;
                    } else if (name === "text-background") {
                        bg_path_element.style.fill = color;
                    }

                    color_options.forEach((option) => {
                        option.classList.remove("active");
                    });
                    option.classList.add("active");
                });
            });


            const other = tooltip.querySelector("#other");
            other.addEventListener("input", () => {
                const color = other.value;
                default_colors[name === "color" ? "text_color" : "background_color"] = color;
                if (name === "color") {
                    text_body.style.setProperty("color", color);
                    c_path_element.style.fill = color;
                } else if (name === "text-background") {
                    bg_path_element.style.fill = color;
                }
                color_options.forEach((option) => {
                    option.classList.remove("active");
                });
            });
        } else if (name === "color-reset") {
            const children = [...text_body.children];
            children.forEach((element) => {
                element.style.backgroundColor = "transparent";
                element.style.color = "#0035E2";
            });
            startIndex = null;
            endIndex = null;
        } else if (name === "format-clear") {
            const children = [...text_body.children];
            children.forEach((element) => {
                element.style.textDecoration = "initial";
            });
        }

        if (startIndex !== null && endIndex !== null) {
            if (name === "text-background") {
                const children = [...text_body.children];
                const selectedElements = children.slice(startIndex, endIndex + 1);
                const backgroundColor = adjustColorBrightness(
                    default_colors.background_color,
                    default_colors.brightness
                );
                selectedElements.forEach((element) => {
                    element.style.backgroundColor = backgroundColor;
                });
                startIndex = null;
                endIndex = null;
            } else if (name === "format-strike") {
                const children = [...text_body.children];
                const selectedElements = children.slice(startIndex, endIndex + 1);
                selectedElements.forEach((element) => {
                    element.style.textDecoration = "line-through";
                });
                startIndex = null;
                endIndex = null;
            } else if (name === "format-underlined") {
                const children = [...text_body.children];
                const selectedElements = children.slice(startIndex, endIndex + 1);
                selectedElements.forEach((element) => {
                    element.style.textDecoration = "underline";
                });
                startIndex = null;
                endIndex = null;
            }
        }
    });
    if (close) {
        close.addEventListener("click", () => {
            tooltip.classList.remove("active");
        });
    }
});

function renderTooltipBody(name) {
    switch (name) {
        case "color":
            return `
                <div class="df fdc aic gap3 tooltip-body">
                    <p class="w100 fs2 o08">Цвет текста</p>
                    <div class="w100 df aic jc gap2">
                    ${colors.map((color) => `<label class="cp color-option ${color === default_colors.text_color && "active"}" style="border-color: ${color};background: ${color};" data-color="${color}"></label>`).join("")}
                      <label class="cp">
                        <i class="fa-solid fa-eye-dropper"></i>
                        <input type="color" name="color" id="other">
                      </label>
                    </div>
                    <b class="close-tooltip o06 fs2 fw3">×</b>
                </div>
            `;
        case "text-background":
            return `
                <div class="df fdc aic gap3 tooltip-body">
                    <p class="w100 fs2 o08">Выделение текста</p>
                    <div class="w100 df aic jc gap2">
                      ${colors.map((color) => `<label class="cp color-option ${color === default_colors.background_color && "active"}" style="border-color: ${color};background: ${color};" data-color="${color}"></label>`).join("")}
                      <label class="cp">
                        <i class="fa-solid fa-eye-dropper"></i>
                        <input type="color" name="color" id="other">
                      </label>
                    </div>
                    <div class="w100 df fdc gap1 range-slider-small">
                        <span class="fs1 o08">Непрозрачность</span>
                        <div class="f1 df aic gap1">
                            <input class="range-slider__range-small" type="range" name="brightness" max="100" min="0" value="50" />
                            <span class="fs2 range-slider__value-small">${default_colors.brightness}</span>
                            <div class="df fdc aic gap fs1 counter">
                                <i class="fa-solid fa-angle-up cp counter-plus"></i>
                                <i class="fa-solid fa-angle-down cp counter-minus"></i>
                            </div>
                        </div>
                    </div>
                    <b class="close-tooltip o06 fs2 fw3">×</b>
                </div>
            `;
        default:
            return "";
    }
}

text_body.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const startElement = range.startContainer.parentElement;
        const endElement = range.endContainer.parentElement;
        startIndex = Array.from(startElement.parentElement.children).indexOf(startElement);
        endIndex = Array.from(endElement.parentElement.children).indexOf(endElement);
    }
});

text_body.addEventListener("touchend", () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const startElement = range.startContainer.parentElement;
        const endElement = range.endContainer.parentElement;
        startIndex = Array.from(startElement.parentElement.children).indexOf(startElement);
        endIndex = Array.from(endElement.parentElement.children).indexOf(endElement);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.range-slider-small');
    const range = slider.querySelector('.range-slider__range-small');
    const value = slider.querySelector('.range-slider__value-small');
    const plus = slider.querySelector('.counter-plus');
    const minus = slider.querySelector('.counter-minus');
    if (range && value) {
        value.textContent = range.value;
        range.addEventListener('input', () => {
            value.textContent = range.value;
            default_colors.brightness = range.value;
        });

        plus.addEventListener('click', () => {
            range.value = +range.value + 1;
            value.textContent = range.value;
            default_colors.brightness = range.value;
        });

        minus.addEventListener('click', () => {
            range.value = +range.value - 1;
            value.textContent = range.value;
            default_colors.brightness = range.value;
        });
    }
});