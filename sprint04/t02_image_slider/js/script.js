let currentSlide = 0;
let slides = document.querySelectorAll('.element');
let totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 3000);

slides.forEach((slide, index) => {
    if (index === 0) {
        slide.style.display = 'block';
    } else {
        slide.style.display = 'none';
    }
});

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

document.querySelector('.right').addEventListener('click', function() {
    nextSlide();
    resetInterval();
});

document.querySelector('.left').addEventListener('click', function() {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}