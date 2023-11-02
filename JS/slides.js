// slideshow

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__item");
  //   console.log(slides.length);
  let dots = document.getElementsByClassName("carousel__svg");
  let prev = document.getElementsByClassName("prev");
  let next = document.getElementsByClassName("next");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("carousel__svg--active");
  }

  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].classList.add("carousel__svg--active");

  if (n == slides.length) {
      next[0].style.display = "none";
  }
  else{
      next[0].style.display = "initial";
  }

  if (n == 1) {
      prev[0].style.display = "none";
  }
  else{
      prev[0].style.display = "initial";
  }
}