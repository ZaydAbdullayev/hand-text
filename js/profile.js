const subscribe_options = document.querySelectorAll('._payment-option');

subscribe_options.forEach(option => {
    option.addEventListener('click', () => {
        subscribe_options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});

const sigin = document.querySelector('.signin');
sigin.addEventListener('click', () => {
    window.location.href = 'auth.html';
});