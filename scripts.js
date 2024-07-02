document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const background = document.querySelector('.background');
    const members = document.querySelectorAll('.member');

    background.addEventListener('touchstart', () => {
        body.classList.toggle('active');
    });

    members.forEach(member => {
        member.addEventListener('touchstart', () => {
            background.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
