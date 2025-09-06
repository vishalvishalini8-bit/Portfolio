
// Smooth Scroll Animation on Scroll
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

// Certificate Popup
document.querySelectorAll(".certificate-img").forEach(img => {
  img.addEventListener("click", function() {
    let popup = document.createElement("div");
    popup.classList.add("certificate-popup");
    popup.innerHTML = `
      <span class="close-btn">&times;</span>
      <img src="${this.src}" alt="Certificate">
    `;
    document.body.appendChild(popup);
    popup.style.display = "flex";

    // Close on click
    popup.querySelector(".close-btn").addEventListener("click", () => {
      popup.remove();
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.remove();
    });
  });
});
