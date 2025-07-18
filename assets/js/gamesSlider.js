const carousel = document.getElementById('carousel-video');
const images = Array.from(carousel.querySelectorAll('div'));

let currentVideoIndex = 0;

function updateCarousel() {
    images.forEach((img, i) => {
        img.classList.remove('left', 'center', 'right', 'hidden');

        const diff = (i - currentVideoIndex + images.length) % images.length;

        if (diff === 0) {
            img.classList.add('center');
        } else if (diff === 1) {
            img.classList.add('right');
        } else if (diff === images.length - 1) {
            img.classList.add('left');
        } else {
            img.classList.add('hidden');
        }
    });
}

function rotateRight() {
    currentVideoIndex = (currentVideoIndex + 1) % images.length;
    updateCarousel();
}

function rotateLeft() {
    currentVideoIndex = (currentVideoIndex - 1 + images.length) % images.length;
    updateCarousel();
}

carousel.addEventListener('click', (e) => {
    // if (e.target.tagName.toLowerCase() !== 'img') return;
    const parentDiv = e.target.parentElement;
    if (parentDiv.classList.contains('left')) {
        rotateLeft();
    } else if (parentDiv.classList.contains('right')) {
        rotateRight();
    }
});

let autoplayInterval;

function startAutoplay() {
    autoplayInterval = setInterval(rotateRight, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

updateCarousel();
startAutoplay();