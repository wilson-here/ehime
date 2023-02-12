var body = document.querySelector("body");
var main = document.querySelector("main");

//open-close menu sp

var menuSpFull = document.querySelector(".c-header__menuspfull");
var openMenuBtn = document.querySelector(".c-header__menuspbtn");
var closeMenuBtn = document.querySelector(".c-header__closebtn");
var btmMenuClose = document.querySelector(".c-header__btmmenuclose");
var navBtns = document.querySelectorAll(".c-header__navlinksp");

function openMenu() {
  menuSpFull.classList.add("is-active");
  body.classList.add("u-noscroll");
}
function closeMenu() {
  menuSpFull.classList.remove("is-active");
  body.classList.remove("u-noscroll");
}
function topFunction() {
  menuSpFull.scrollTop = 0;
}

openMenuBtn.addEventListener("click", function () {
  openMenu();
  topFunction();
});

closeMenuBtn.addEventListener("click", function () {
  closeMenu();
});

btmMenuClose.addEventListener("click", function () {
  closeMenu();
});

navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", function () {
    closeMenu();
  });
});

//mainvisual, breadcrumb content base on page url

var mainvisualContents = document.querySelectorAll(".c-mainvisual__content");
var mainvisualcontentHome = document.querySelector("#home");
var mainvisualcontentAbout = document.querySelector("#about");
var mainvisualcontentContact = document.querySelector("#contact");

var lastBreadcrumbs = document.querySelectorAll(".c-breadcrumb__currentpage");
var breadcrumbAbout = document.querySelector(".c-breadcrumb__about");
var breadcrumbContact = document.querySelector(".c-breadcrumb__contact");

function toggleActive(items, itemspecific) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    itemspecific.classList.add("is-active");
  });
}

if (main.classList.contains("p-top")) {
  toggleActive(mainvisualContents, mainvisualcontentHome);
}

if (main.classList.contains("p-about")) {
  toggleActive(mainvisualContents, mainvisualcontentAbout);
  toggleActive(lastBreadcrumbs, breadcrumbAbout);
}

if (main.classList.contains("p-contact")) {
  toggleActive(mainvisualContents, mainvisualcontentContact);
  toggleActive(lastBreadcrumbs, breadcrumbContact);
}

// slick

$(document).ready(function () {
  // slick slider header
  $(".c-mainvisual__slick").slick({
    dots: false,
    infinite: true,

    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // slick slider pickup
  $(".c-pickup__slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    centerMode: true,
    prevArrow:
      '<div class="c-btn__prev"><img src="./assets/img/prev.png" alt="Icon prev"></div>',
    nextArrow:
      '<div class="c-btn__next"><img src="./assets/img/next.png" alt="Icon next"></div>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});

//validate form
$(document).ready(function () {
  $("#contactForm").validate({
    onfocusout: function (element) {
      this.element(element);
      if (!this.element(element)) {
        $(".c-feedback__pleasecheck").addClass("is-active");
      } else {
        $(".c-feedback__pleasecheck").removeClass("is-active");
      }
    },
    errorClass: "c-feedback__error",
    rules: {
      name: {
        required: true,
      },
      mail: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
      },
      inquiry: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "『氏名』を入力してください。",
      },
      mail: {
        required: "『メールアドレス』を入力してください。",
        email: "『メールアドレス』を入力してください。",
      },
      phone: {
        required: "『電話番号』を入力してください。",
        number: "『電話番号』を入力してください。",
      },
      inquiry: {
        required: "『お問い合わせ内容』を入力してください。",
      },
    },
  });
});

$(".c-secbtn--feedback").on("click", function () {
  $("#contactForm").valid();
  if (!$("#contactForm").valid()) {
    $(".c-feedback__pleasecheck").addClass("is-active");
  } else {
    $(".c-feedback__pleasecheck").removeClass("is-active");
  }
});
