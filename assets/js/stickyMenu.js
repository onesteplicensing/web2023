// sticky menu 
const navbarEl = document.getElementById('topMenu');
document.addEventListener('scroll', () => {
    const _scrollAmount = window.scrollY;
    const _showCaseOffset = 10;
    if (_scrollAmount > _showCaseOffset) {
        navbarEl.classList.add('sticky')
    } else {
        navbarEl.classList.remove('sticky')
    }
})