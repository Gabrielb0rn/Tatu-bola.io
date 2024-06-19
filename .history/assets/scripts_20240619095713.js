document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
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

    // Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    document.querySelector('.carousel').insertAdjacentHTML('beforeend', `
        <button class="carousel-control prev">&lt;</button>
        <button class="carousel-control next">&gt;</button>
    `);

    const updateCarousel = () => {
        carouselItems.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    };

    // const nextSlide = () => {
    //     currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    //     updateCarousel();
    // };

    // const prevSlide = () => {
    //     currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    //     updateCarousel();
    // };

    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);

    // Auto slide function
    const autoSlide = () => {
        nextSlide();
    };

    // Set interval for auto slide (change image every 3 seconds)
    let autoSlideInterval = setInterval(autoSlide, 3000);

    // Reset interval when user interacts with the carousel
    const resetInterval = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    };

    document.querySelector('.carousel').addEventListener('click', resetInterval);

    
    // Handle video end event to go to next slide
    // document.querySelectorAll('.carousel-item video').forEach(video => {
    //     video.addEventListener('ended', nextSlide);
    //     video.addEventListener('play', () => clearInterval(autoSlideInterval));
    //     video.addEventListener('pause', resetInterval);
    // });

    updateCarousel();
});
