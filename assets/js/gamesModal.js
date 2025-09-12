document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".video-games").forEach(function (gameBlock) {
    // Find the modal element inside this game block
    const modal = gameBlock.querySelector(".video-modal");
    if (!modal) return;

    const bootstrapModal = new bootstrap.Modal(modal);
    const iframe = modal.querySelector("iframe");
    const src = iframe ? iframe.getAttribute("src") : null;
    if (iframe) iframe.src = "";

    modal.addEventListener("hidden.bs.modal", () => {
      if (iframe) {
        iframe.src = "";
      }
    });

    // Only select overlays inside this game block
    gameBlock.querySelectorAll(".video-overlay").forEach((button) => {
      button.addEventListener("click", () => {
        const parentSlide = button.closest("div");
        if (parentSlide && parentSlide.classList.contains("center")) {
          bootstrapModal.show();
          if (iframe) iframe.src = src;
        }
      });
    });
  });
});
