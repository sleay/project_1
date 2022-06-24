
if(matchMedia("(min-width:320px) and (max-width:767px)").matches){
    var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  speed:1000,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}
else if(matchMedia("(min-width:768px) and (max-width:1024px)").matches){
    var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  speed:1000,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}
else{
    var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  speed:1000,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}


