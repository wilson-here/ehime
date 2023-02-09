cd C:\Users\QuangAnh\Desktop\training\workspace\ehime\src
echo "# exam-Ha_Quang_Anh" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/allgrow-labo-training/exam-Ha_Quang_Anh.git
git push -u origin master

//
http://aglstaff.allgrow-labo.jp/letuananh/task17/index.html#
http://aglstaff.allgrow-labo.jp/luongnguyenhaianh/exam/#
https://ehime-shigotozukan.com/

https://fontawesome.com/v5/cheatsheet#use

//ALL
check tester: perfect pixel va dong bo code cho cac component?
!!! Letter spacing cua h1 contact, about page
sua css cua customed class chung -> class rieng
loi hien trong linter ve ten class
DONE nhung thuoc tinh nao can phai hoi moi duoc xai?
toi da 4 class cho 1 elem
check lai source cua img xem tablet an img cua pc hay sp?
code with a wordpress theme template in mind?
kiem tra co thuoc tinh nao la khong support dc khong? (check cross browser)
responsive tu 321 -> 767 bang l container cua 320px co ok ko?

!!! check lai tat ca layer bi an trong file pts!!!

hoi tester design - cua nhung component trong design

link goi, mail chi can tren sp hay sao?

chinh lai hieu ung hover cua btn

!!! check toan bo img: chỉ xuất 2x trên SP thôi, Tablet vs Pc dùng hình bình thường

check alt all img

check semantic meaning all the

check color all

dung after cho icon arrow cua btn (fix loi arrow bi nhay khi)
check gan link all
link ko co duong dan thi de # hay ./, given the requirement in the readme folder
thu tu de cac the trong file layout (js, css...)
folder layout cua ejs co bao gom footer header ko?
check rule + check cac loi trong report cu
!!!check cac note trong so tay

2nd check requirement trong folder khach gui
chinh lai autoplay trong main js
check tester: nhung img co layer on top thi combine thanh smart object roi export??

neu co time:
delete class du thua
hieu ung cho cac nut / thao tac
main visual home cua tab full hinh, k bi cat phan tren
button bi dinh ko nay len tren responsive
KHONG PHAI LOI menu sp full height khi mh < 320px

// chua lam:
DONE menusp
DONE mainvisual thay doi theo link page
DONE breadcrumb
DONE backtotop
validate form

//HEADER
header nam trong container
gan link navi chinh xac
vung phu link cua item duoi tel trong menu sp full??
vung phu link cua close btn top trong menu sp full

//MAINVISUAL ref
sua CSS sang SCSS
mainvisual cua trang khac thi thay doi
main visual cham nam duoi bi header de len
DONE overlay hinh o mainvisual

//PICKUP ref
back ground img co gioi han kich thuoc size ko?
sua CSS sang SCSS
DONE dot slick border color????

DONE chinh lai dot slick tren SP
DONE PP tai SP

//COMPANY LIST
DONE check border radius, BOX SHADOW, SPREAD? in PTS?
DONE bao loi des PP o company list PC
DONE xin breakpoint 1200px r fix man hinh 1025 px PC company list
check tester: vung phu link cua tung bai post company
.extra {

background-color: rgba(0, 0, 0, 0.122);
opacity: 0.478;
position: absolute;
left: 0px;
top: 0px;
width: 1920px;
height: 1000px;
z-index: 16;
}

//HEADER
alt header arrow
dat class c ntn? de sau convert thanh temp wp? vd nhu nav bar co can c-nav?

//OVERVIEW

// INFO
link web example co phai la link ngoai khong?

// FEEDBACK
font kozuka gothic pr6n co san trong may thi include vo src code hay van phai hoi khach?

// FORM
chinh lai js form
check tester: chữ bị rớt dong?

//FOOTER
opacity cua border right left-block

// js
let scrollPosition = 0;
const $body = document.querySelector("body");
function init() {
  $(".c-mainvisual__slides").slick({
    speed: 1000,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
    slidesToShow: 1,
  });
}
setTimeout(init(), 2000)
​
$(document).ready(function () {
$(".c-pickup__slider").slick({
    speed: 600,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    arrows: true,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
    variableWidth: true,
    prevArrow: $(".c-pickup__prev"),
    nextArrow: $(".c-pickup__next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
​
  $(".c-footer__totop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header**overlay").data("ycoord"));
}
function navClose() {
if ($(".c-header**overlay").hasClass("c-header**overlay--active")) {
$(".c-header**overlay").removeClass("c-header**overlay--active");
}
}
$(".c-header**menu").click(function () {
if (!$(".c-header__overlay").hasClass("c-header__overlay--active")) {
      $(".c-header__overlay").addClass("c-header__overlay--active");
      disableScroll();
    }
  });
  $(".c-header__close").click(function () {
    navClose();
    enableScroll();
  });
  $(".c-header__navclose").click(function () {
    enableScroll();
    navClose();
  });
  var $form = $("form");
  $.validator.addMethod(
    "noSpacing",
    function (value, element) {
      if ($.trim(value).length == 0) {
return false;
} else {
return true;
}
},
"『お問い合わせ内容』を入力してください。"
);
$form.validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        digits: true,
      },
      content: {
        required: true,
        noSpacing: true,
      },
    },
    messages: {
      name: "『氏名』を入力してください。",
      email: "『メールアドレス』を入力してください。",
      phone: "『電話番号』を入力してください。",
      content: "『お問い合わせ内容』を入力してください。",
    },
  });
  $form.on("submit", function (e) {
    if (!$form.valid()) {
$(".c-contact\_\_error").removeClass("is-hidden");
}
});
});
