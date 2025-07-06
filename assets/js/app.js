// Showcase Slider
const track = document.querySelector('.showcase-track');
const items = Array.from(track.children);
if (track.children.length < 10) {
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

// Tabs
const _timeline = document.getElementById("timeline");
const tabsContainer = _timeline.querySelector('.nav-pills');
const tabs = tabsContainer.querySelectorAll('button');
let currentTabIndex = 0;
let _tabsInterval;

function scrollTabIntoView(tab) {
    const tabLeft = tab.offsetLeft;
    const tabWidth = tab.offsetWidth;
    const containerWidth = tabsContainer.offsetWidth;

    const targetScrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);

    tabsContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
    });
}

function startInterval() {
    _tabsInterval = setInterval(() => {

        tabs[currentTabIndex].classList.remove('active');
        const currentPaneId = tabs[currentTabIndex].getAttribute('data-bs-target');
        document.querySelector(currentPaneId).classList.remove('show', 'active');

        currentTabIndex = (currentTabIndex + 1) % tabs.length;

        const nextTab = new bootstrap.Tab(tabs[currentTabIndex]);
        nextTab.show();

        scrollTabIntoView(tabs[currentTabIndex]);
    }, 3000);
}

startInterval();

_timeline.addEventListener('mouseover', () => {
    clearInterval(_tabsInterval);
});

_timeline.addEventListener('mouseleave', () => {
    startInterval();
});

