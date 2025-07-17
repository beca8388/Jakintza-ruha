// Jakintza Ruha Scroll Spell: Activate Smooth Entry

document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.querySelector(".enter-btn");
  const infoSection = document.getElementById("info");

  if (enterButton && infoSection) {
    enterButton.addEventListener("click", () => {
      infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});