const sliders = document.querySelectorAll("#slider");

sliders.forEach((slider) => {
  const slideshow = slider.querySelector("#slideshow");
  const slidedots = slider.querySelector("#slidedots");
  const slides = slideshow.querySelectorAll(".mySlides");

  slides.forEach(() => {
    const dot = document.createElement("span");
    dot.className = "dot";
    slidedots.appendChild(dot);
  });

  const dots = slidedots.querySelectorAll(".dot");

  let slideIndex = 0;

  function showSlide() {
    slides.forEach((slide, pos) => {
      if (pos !== slideIndex) {
        return (slide.style.display = "none");
      }
      slide.style.display = "flex";
    });
    dots.forEach((dot, pos) => {
      if (pos !== slideIndex) {
        return dot.classList.remove("active");
      }
      dot.classList.add("active");
    });
  }
  showSlide();

  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  prev.addEventListener("click", () => {
    if (slideIndex <= 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    showSlide();
  });

  next.addEventListener("click", () => {
    if (slideIndex >= slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    showSlide();
  });
});
