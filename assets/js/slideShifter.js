// about tap
const _slider = document.getElementById("slide-shifter");
setInterval(() => {
    const activeSlide = _slider.querySelector('.slide.active');

    if (activeSlide) {
        activeSlide.classList.remove('active');
        _slider.appendChild(activeSlide);
    }
    const newActive = _slider.querySelector('.slide');
    if (newActive) {
        newActive.classList.add('active');
    }
}, 3000);