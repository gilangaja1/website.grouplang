document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'b6cdc1298aa9f0f5efd1d76cd2b3b351';
    const city = 'Bali';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Tambahkan ini untuk melihat data yang diterima di konsol
            const weatherInfo = document.getElementById('weather-info');
            if (data.main && data.weather) {
                weatherInfo.innerHTML = `
                    <p>Lokasi: ${data.name}</p>
                    <p>Suhu: ${data.main.temp} °C</p>
                    <p>Cuaca: ${data.weather[0].description}</p>
                `;
            } else {
                weatherInfo.innerHTML = '<p>Data cuaca tidak tersedia</p>';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));

    const loader = document.querySelector(".loading");
    loader.classList.remove("hide");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 2000);

    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextTestimonial() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

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

    carouselItems[currentIndex].classList.add('active');
    setInterval(showNextTestimonial, 5000);
    setInterval(toggleLogo, 2000);

    const toggleTheme = document.getElementById('toggle-theme');
    const body = document.body;

    toggleTheme.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    const chatElement = document.querySelector('.chat');
    function showChat() {
        chatElement.classList.add('fade-in');
        chatElement.classList.remove('fade-out');
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

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    backToTopButton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

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

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loader.classList.remove('hide');

        setTimeout(() => {
            loader.classList.add('hide');
            alert('Form submitted successfully!');
            contactForm.reset();
        }, 2000);
    });

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

    window.addEventListener('load', () => {
        loader.classList.add('hide');
    });

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
