document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;
    const logoImage = document.getElementById('logo-image');
    const members = document.querySelectorAll('.member');
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalClose = modal.querySelector('.close');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = lightboxModal.querySelector('.close');
    const contactForm = document.getElementById('contact-form');
    const loading = document.querySelector('.loading');

    // Toggle dark mode
    toggleTheme.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Fade in and out animation for the logo
    logoImage.classList.add('fade-in');

    setInterval(() => {
        if (logoImage.classList.contains('fade-in')) {
            logoImage.classList.remove('fade-in');
            logoImage.classList.add('fade-out');
        } else {
            logoImage.classList.remove('fade-out');
            logoImage.classList.add('fade-in');
        }
    }, 5000); // Change logo visibility every 5 seconds

    // Modal functionality
    members.forEach(member => {
        member.addEventListener('click', () => {
            const memberId = member.getAttribute('data-member');
            const memberInfo = document.querySelector(`.member-info[data-member="${memberId}"]`);
            modalContent.querySelector('#modal-info').innerHTML = memberInfo.innerHTML;
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Lightbox functionality
    members.forEach(member => {
        member.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                lightboxImage.src = event.target.src;
                lightboxModal.style.display = 'block';
            }
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === lightboxModal) {
            lightboxModal.style.display = 'none';
        }
    });

    // Form submission with loading spinner
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loading.classList.remove('hide');

        // Simulate form submission process
        setTimeout(() => {
            loading.classList.add('hide');
            alert('Form submitted successfully!');
            contactForm.reset();
        }, 2000);
    });

    // Hide loading spinner after page load
    window.addEventListener('load', () => {
        loading.classList.add('hide');
    });
});
