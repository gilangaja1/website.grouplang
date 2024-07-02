document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const background = document.querySelector('.background');

    background.addEventListener('touchstart', () => {
        body.classList.toggle('active');
    });
});
