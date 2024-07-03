document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('toggle-theme');
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    
    const handleScroll = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('show');
            }
        });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load

    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    setInterval(() => {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        currentIndex = (currentIndex + 1) % items.length;
    }, 3000);

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Form submitted!');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Modal and Lightbox functionality
    const modal = document.getElementById('modal');
    const lightboxModal = document.getElementById('lightbox-modal');
    const modalClose = document.querySelector('.modal .close');
    const lightboxClose = document.querySelector('#lightbox-modal .close');
    
    const members = document.querySelectorAll('.member');
    members.forEach(member => {
        member.addEventListener('click', () => {
            const memberId = member.getAttribute('data-member');
            document.getElementById('modal-info').textContent = `Details of Member ${memberId}`;
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

    // Lightbox for images
    const lightboxImages = document.querySelectorAll('.member img');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImages.forEach(img => {
        img.addEventListener('click', (event) => {
            event.stopPropagation();
            lightboxImage.src = img.src;
            lightboxModal.style.display = 'block';
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
});
