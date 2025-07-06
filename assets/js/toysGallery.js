const cards = document.querySelectorAll(".toy-card");
const isMobile = window.innerWidth < 500;
cards.forEach(card => {
  const mainImg = card.querySelector(".main-img");
  const thumbs = card.querySelectorAll(".thumbs-wrapper button img");
  const wrapper = card.querySelector(".thumbs-wrapper");
  const prevBtn = card.querySelector(".prev-carousel");
  const nextBtn = card.querySelector(".next-carousel");
  const scrollAmount = 130; // Adjust scroll distance per click

  // Change main image on thumbnail click
  thumbs.forEach(img => {
    img.addEventListener("click", () => {
      mainImg.setAttribute("src", img.getAttribute("src"));
      thumbs.forEach(i => i.classList.remove("active"));
      img.classList.add("active");
    });
  });

  // If scrolling is unnecessary, hide arrows
  const isScrollNeeded = wrapper.scrollWidth > wrapper.clientWidth;
  if (!isScrollNeeded) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }

  // Update arrows visibility based on scroll position
  const updateArrows = () => {
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
    prevBtn.style.visibility = wrapper.scrollLeft <= 0 ? "hidden" : "visible";
    nextBtn.style.visibility = wrapper.scrollLeft >= maxScrollLeft ? "hidden" : "visible";
  };

  // Scroll left/right on arrow click
  prevBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Update arrow visibility on scroll and at start
  wrapper.addEventListener("scroll", updateArrows);
  updateArrows();
});

