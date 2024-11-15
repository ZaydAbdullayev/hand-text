const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('#next-slide');
const prevBtn = document.querySelector('#prev-slide');

let currentSlide = 0; // Aktif slide'ın başlangıç pozisyonu
const maxSlide = slider.children.length - 3; // Aynı anda 3 öğe gösterildiği için

// "Next" butonuna tıklanınca
nextBtn.addEventListener('click', () => {
    if (currentSlide < maxSlide) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
});

// "Prev" butonuna tıklanınca
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }
});
