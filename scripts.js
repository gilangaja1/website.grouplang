document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector(".loading");

    // Show the preloader
    loader.classList.remove("hide");

    // Simulate loading delay
    setTimeout(function() {
        // Hide the preloader
        loader.classList.add("hide");
    }, 2000);
    
    // Testimonials carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextTestimonial() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    // Logo fade-in and fade-out
    const logoImage = document.getElementById('logo-image');
    function toggleLogo() {
        if (logoImage.classList.contains('fade-in')) {
            logoImage.classList.remove('fade-in');
            logoImage.classList.add('fade-out');
        } else {
            logoImage.classList.remove('fade-out');
            logoImage.classList.add('fade-in');
        }
    }
    
    // Show the first testimonial
    carouselItems[currentIndex].classList.add('active');
    
    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000);
    
    setInterval(toggleLogo, 2000); // Toggle logo visibility every 2 seconds

    // Toggle dark mode
    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;

    toggleTheme.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Add fade-in and fade-out functionality
    const chatElement = document.querySelector('.chat'); // Adjust the selector to match your chat element

    function showChat() {
        chatElement.classList.add('fade-in');
        chatElement.classList.remove('fade-out');
    }

    function hideChat() {
        chatElement.classList.add('fade-out');
        chatElement.classList.remove('fade-in');
    }

    setTimeout(showChat, 2000);

    const members = document.querySelectorAll('.member');
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalClose = modal.querySelector('.close');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = lightboxModal.querySelector('.close');
    const contactForm = document.getElementById('contact-form');
    const links = document.querySelectorAll('a[href^="#"]');

    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.classList.add('scroll-to-top');
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);

    // Google Maps initialization
    initMap();

    // Show or hide the button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    // Scroll to top when the button is clicked
    backToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

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
        loader.classList.remove('hide');

        // Simulate form submission process
        setTimeout(() => {
            loader.classList.add('hide');
            alert('Form submitted successfully!');
            contactForm.reset();
        }, 2000);
    });

    // Smooth scroll functionality
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hide loading spinner after page load
    window.addEventListener('load', () => {
        loader.classList.add('hide');
    });

    // Intersection Observer API for animation on elements entering viewport
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Menambahkan kelas animasi fade-in-text pada elemen teks
    const textElements = document.querySelectorAll('h1, h2, p');
    textElements.forEach(element => {
        element.classList.add('fade-in-text');
    });
});

function initMap() {
    const lokasi = { lat: -8.3405, lng: 115.0920 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: lokasi
    });
    const marker = new google.maps.Marker({
        position: lokasi,
        map: map
    });
}
