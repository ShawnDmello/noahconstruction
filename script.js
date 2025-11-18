/* Typing Effect */
document.addEventListener("DOMContentLoaded", () => {
  const text = "Noah Construction London";
  const typingEl = document.querySelector(".typing");

  let i = 0;
  function type() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
});

/* FADE-IN on Scroll */
const fadeEls = document.querySelectorAll(".fade-in");

function showOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

/* IMAGE POPUP SLIDESHOW */
let currentGroup = [];
let currentIndex = 0;

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", (e) => {
    const groupName = e.target.parentElement.getAttribute("data-group");
    currentGroup = Array.from(
      document.querySelectorAll(`[data-group='${groupName}'] img`)
    ).map(i => i.src);

    currentIndex = currentGroup.indexOf(e.target.src);

    openPopup();
  });
});

function openPopup() {
  document.getElementById("popup-img").src = currentGroup[currentIndex];
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function nextImg() {
  currentIndex = (currentIndex + 1) % currentGroup.length;
  openPopup();
}

function prevImg() {
  currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
  openPopup();
}
