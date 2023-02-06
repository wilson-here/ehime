// slick
$(".c-designs__slickimgscontainer").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".c-designs__slickleftbtn"),
  nextArrow: $(".c-designs__slickrightbtn"),
});

// menu sp
// 1. click to show menu sp
let menubtnsp = document.querySelector(".c-header__navbtnsp");
let menusp = document.querySelector(".c-header__navbarnormal");
menubtnsp.addEventListener("click", function () {
  // if (menusp.classList.contains("is-active--showmenusp")) {
  //   menusp.classList.remove("is-active--showmenusp");
  //   menusp.classList.add("is-active--hidemenusp");
  // } else {
  //   menusp.classList.remove("is-active--hidemenusp");
  //   menusp.classList.add("is-active--showmenusp");
  // }
  menusp.classList.toggle("is-active--showmenusp");
});

// 2. 3 bars to x mark
menubtnsp.addEventListener("click", function () {
  menubtnsp.classList.toggle("is-active--changemenubtn");
});
