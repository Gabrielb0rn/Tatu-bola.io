document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Carrossel
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    document.querySelector('.carousel').insertAdjacentHTML('beforeend', `
        <button class="carousel-control prev">&lt;</button>
        <button class="carousel-control next">&gt;</button>
    `);

    const updateCarousel = () => {
        carouselImages.forEach((img, index) => {
            img.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    };

    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-control.next').addEventListener('click', () => {
        currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    updateCarousel();
});
