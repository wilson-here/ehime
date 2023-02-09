var body = document.querySelector("body");
var main = document.querySelector("main");

//open-close header

var menuspfull = document.querySelector(".c-header__menuspfull");
var openmenubtn = document.querySelector(".c-header__menuspbtn");
var closemenubtn = document.querySelector(".c-header__closebtn");
var btmmenuclose = document.querySelector(".c-header__btmmenuclose");

function openMenu() {
  menuspfull.classList.add("is-active");
  body.classList.add("u-noscroll");
}
function closeMenu() {
  menuspfull.classList.remove("is-active");
  body.classList.remove("u-noscroll");
}
function topFunction() {
  menuspfull.scrollTop = 0;
}

openmenubtn.addEventListener("click", function () {
  openMenu();
  topFunction();
});

closemenubtn.addEventListener("click", function () {
  closeMenu();
});

btmmenuclose.addEventListener("click", function () {
  closeMenu();
});

//mainvisual content base on page url
//breadcrumb content base on page url

var mainvisualcontents = document.querySelectorAll(".c-mainvisual__content");
var mainvisualcontenthome = document.querySelector(
  ".c-mainvisual__content--home"
);
var mainvisualcontentabout = document.querySelector(
  ".c-mainvisual__content--about"
);
var mainvisualcontentcontact = document.querySelector(
  ".c-mainvisual__content--contact"
);

var lastbreadcrumbs = document.querySelectorAll(".c-breadcrumb__currentpage");
var breadcrumbabout = document.querySelector(".c-breadcrumb__about");
var breadcrumbcontact = document.querySelector(".c-breadcrumb__contact");

function toggleActive(items, itemspecific) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    itemspecific.classList.add("is-active");
  });
}

if (main.classList.contains("p-top")) {
  toggleActive(mainvisualcontents, mainvisualcontenthome);
}

if (main.classList.contains("p-about")) {
  toggleActive(mainvisualcontents, mainvisualcontentabout);
  toggleActive(lastbreadcrumbs, breadcrumbabout);
}

if (main.classList.contains("p-contact")) {
  toggleActive(mainvisualcontents, mainvisualcontentcontact);
  toggleActive(lastbreadcrumbs, breadcrumbcontact);
}

// link on news table row
// var tablerows = document.querySelectorAll(".c-news .c-table__row");
// if (tablerows.length !== 0) {
//   tablerows.forEach((tablerow) => {
//     tablerow.addEventListener("click", () => {
//       window.location.href = "#";
//     });
//   });
// }

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
    //remind/note: nho chinh autoplay lai ve true
    autoplay: true,
    // autoplay: false,
    autoplaySpeed: 2000,
  });
  // slick slider pickup
  $(".c-pickup__slider").slick({
    dots: true,
    infinite: true,
    //remind/note: nho chinh autoplay lai ve true
    autoplay: true,
    // autoplay: false,
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
  // slick slider post company
  $(".c-corporate__slider").slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: false,
    cssEase: "linear",
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
});

//validate form
//validate
$(document).ready(function () {
  $("#contactForm").validate({
    onfocusout: function (element) {
      this.element(element);
      if (!this.element(element)) {
        $(".c-feedback__errorall").addClass("is-active");
      } else {
        $(".c-feedback__errorall").removeClass("is-active");
      }
    },
    errorClass: "c-feedback__error",
    rules: {
      fullname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
      },
      contents: {
        required: true,
      },
    },
    messages: {
      fullname: {
        required: "縲取ｰ丞錐縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�",
      },
      email: {
        required: "縲弱Γ繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�",
        email: "繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縺檎┌蜉ｹ縺ｧ縺�",
      },
      phone: {
        required: "縲朱崕隧ｱ逡ｪ蜿ｷ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�",
        number: "縲朱崕隧ｱ逡ｪ蜿ｷ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�",
      },
      contents: {
        required: "縲弱♀蝠上＞蜷医ｏ縺帛�螳ｹ縲上ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�",
      },
    },
  });
});

//check all field
$(document).ready(function () {
  var fullname = $("#fullname").val();
  var phone = $("#phone").val();
  var email = $("#email").val();
  var contents = $("#contents").val();
  $(".c-secbtn--feedback").click(function () {
    if (!fullname && !phone && !email && !contents) {
      $(".c-feedback__errorall").toggleClass("is-active");
    }
  });
});

$(document).ready(function () {
  $(".c-secbtn--feedback").click(function () {
    if ($("input.c-feedback__error")) {
      $(".c-footer").addClass("is-error");
    } else {
      $(".c-footer").removeClass("is-error");
    }
  });
});
