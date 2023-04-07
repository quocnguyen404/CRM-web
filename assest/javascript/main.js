let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide_img");

    if (slideIndex < 0){
        slideIndex = 2
    }
    if (slideIndex > slides.length - 1)
    {
        slideIndex = 0;
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}