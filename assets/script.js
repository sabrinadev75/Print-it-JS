// récupération des elements
const banner = document.getElementById("banner");
const dots = banner.querySelector(".dots");
const p = banner.querySelector("p");

// C'est l'indice de la slide sélectionné
let slideSelectedIndex = 0;

// C'est le tableau contenant toutes les slides
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Initialisation
window.addEventListener("DOMContentLoaded", () => {
  // généreration des dots
  slides.forEach((_slide) => {
    // ajout d'un dot
    dots.innerHTML += `<div class="dot"></div>`;
  });

  // récupération du tableau des dots
  const dotList = dots.querySelectorAll(".dot");

  // ajout de la classe dot_selected au premier dot
  dotList[0].classList.add("dot_selected");

  // récupération des elements
  const arrow_left = banner.querySelector(".arrow_left");
  const arrow_right = banner.querySelector(".arrow_right");
  const banner_img = banner.querySelector(".banner-img");

  // Gestion des evenements click sur les fleches
  arrow_left.addEventListener("click", () => {
    // Une ternaire
    slideSelectedIndex =
      slideSelectedIndex === 0 ? slides.length - 1 : slideSelectedIndex - 1;
    updateBanner();
  });

  arrow_right.addEventListener("click", () => {
    slideSelectedIndex =
      slideSelectedIndex === slides.length - 1 ? 0 : slideSelectedIndex + 1;
    updateBanner();
  });

  // Gestion des evenements click sur les dots
  dotList.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideSelectedIndex = index;
      updateBanner();
    });
  });

  // déclaration de lma fonction updateBanner
  function updateBanner() {
    // Mise à jour de l'image et du tagline
    banner_img.src = `./assets/images/slideshow/${slides[slideSelectedIndex].image}`;

    // Mise à jour du paragraphe
    p.innerHTML = `<p>${slides[slideSelectedIndex].tagLine}</p>`;

    // Mise à jour des dots
    dotList.forEach((dot) => dot.classList.remove("dot_selected"));
    dotList[slideSelectedIndex].classList.add("dot_selected");
  }
});
