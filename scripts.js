document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const background = document.querySelector('.background');
    const members = document.querySelectorAll('.member');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-info');
    const closeModal = document.querySelector('.close');
    const contactForm = document.getElementById('contact-form');

    background.addEventListener('touchstart', () => {
        body.classList.toggle('active');
    });

    members.forEach(member => {
        member.addEventListener('touchstart', () => {
            background.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        });

        member.addEventListener('click', () => {
            const memberId = member.getAttribute('data-member');
            showModal(memberId);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
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

function showModal(memberId) {
    const memberDetails = {
        "1": "Detail lengkap anggota 1.",
        "2": "Detail lengkap anggota 2.",
        "3": "Detail lengkap anggota 3.",
        "4": "Detail lengkap anggota 4."
    };
    
    const modalContent = document.getElementById('modal-info');
    modalContent.innerHTML = memberDetails[memberId];
    document.getElementById('modal').style.display = "block";
}
