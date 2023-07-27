// Declaretion
let Imgs = document.querySelector(".product .imgs");
let boyBtn = document.querySelector(".boyBtn");
let girlBtn = document.querySelector(".girlBtn");
let menBtn = document.querySelector(".menBtn");
let womenBtn = document.querySelector(".womenBtn");
let gelBtn = document.querySelector(".gelBtn");
let nav = document.querySelector("nav");
let home = document.querySelector(".home");
let matrial = document.querySelector(".matrial");
let aboutus = document.querySelector(".about-us");
let counter = document.querySelector(".counter");
let product = document.querySelector(".product");
let Branches = document.querySelector(".Branches");
let comingSoon = document.querySelector(".comingSoon");
let commerceBtn = document.querySelector(".commerceBtn");
let logoPic = document.querySelector(".logo");
let imgGelArr = [
    "pic/jil products/17-18.jpg",
    "pic/jil products/1307.jpg",
    "pic/jil products/511070.jpg",
    "pic/jil products/511140.jpg",
    "pic/jil products/511160.jpg",
    "pic/jil products/511220.jpg",
    "pic/jil products/511230.jpg",
    "pic/jil products/511340.jpg",
    "pic/jil products/511130.jpg",
    "pic/jil products/511140.jpg",
    "pic/jil products/612804.jpg",
    "pic/jil products/611627.jpg",
    "pic/jil products/601019.jpg",
];
let imgBoysArr = [
    "pic/jil products/13309.jpg",
    "pic/jil products/913113.jpg",
    "pic/jil products/913114.jpg",
];
let imgMenArr = [
    "pic/jil products/11111.jpg",
    "pic/jil products/11129.jpg",
    "pic/jil products/321102.jpg",
    "pic/jil products/321103.jpg",
    "pic/jil products/321106.jpg",
    "pic/jil products/321110.jpg",
    "pic/jil products/321113.jpg",
    "pic/jil products/321119.jpg",
];
let imgWomenArr = [
    "pic/jil products/12113.jpg",
    "pic/jil products/12140.jpg",
    "pic/jil products/12142.jpg",
    "pic/jil products/322103.jpg",
    "pic/jil products/322112.jpg",
    "pic/jil products/322211.jpg",
    "pic/jil products/322216.jpg",
];
let imgGirlsArr = [
    "pic/jil products/914113.jpg",
    "pic/jil products/914108.jpg",
    "pic/jil products/914114.jpg",
];

// Scroll Events
addEventListener("scroll", function () {
    if ($(window).scrollTop() > 550) {
        nav.classList.add("navEvent");
    }
    if ($(window).scrollTop() < 550) {
        nav.classList.remove("navEvent");
    }
});
Branches.addEventListener("click", () => {
    location = "https://linktr.ee/jil.egypt";
});

///effects during scroll 
ScrollReveal({ reset: true,
    distance:'60px' ,
    duration : 2000,
    delay:100
});
ScrollReveal().reveal('.home-title , .about-title', { delay: 100 });
ScrollReveal().reveal('.aboutImg , .mission , .product , .serv', { delay: 300 , origin:'bottom'});

//thems
logoPic.addEventListener("click", function () {
    $(".home-content").css({ backgroundImage: "url(../pic/logo1.jpg)" , backgroundPosition:' center' , backgroundSize: 'cover'});
    $('.matrial .col-md-4').css({backgroundColor:'white' , color:'black' , border: '4px solid red' , boxShadow:' 20px 20px 20px rgba(195, 3, 3, 0.312)' })

});

//Animation
let animateTxt = document.querySelector(".animateTxt");
let myTxt =
    "The Kabo (Jil) Company is classified as the best company for manufacturing comfortable cotton textiles and clothing for all ages...";
animateTxt.innerHTML = "";
let i = 0;
var animate = setInterval(function () {
    animateTxt.innerHTML += myTxt[i];
    i = i + 1;
    if (i > myTxt.length - 1) {
        clearInterval(animate);
    }
}, 50);

// Products imgs

// boys imgs
boyBtn.addEventListener("click", () => {
    boysImg();
});

function boysImg() {
    let box = "";
    for (let i = 0; i < imgBoysArr.length; i++) {
        box += `
        <div class="col-md-3 p-3"><img class="w-75"  src="${imgBoysArr[i]}" alt=""></div>
        `;
    }
    Imgs.innerHTML = box;
}

// girls imgs

girlBtn.addEventListener("click", () => {
    girlsImg();
});

function girlsImg() {
    let box = "";
    for (let i = 0; i < imgGirlsArr.length; i++) {
        box += `
        <div class="col-md-3 p-3"><img class="w-75"  src="${imgGirlsArr[i]}" alt=""></div>
        `;
    }
    Imgs.innerHTML = box;
}
// men imgs

menBtn.addEventListener("click", () => {
    menImg();
});

function menImg() {
    let box = "";
    for (let i = 0; i < imgMenArr.length; i++) {
        box += `
        <div class="col-md-3 p-3"><img class="w-75"  src="${imgMenArr[i]}" alt=""></div>
        `;
    }
    Imgs.innerHTML = box;
}
// women imgs

womenBtn.addEventListener("click", () => {
    womenImg();
});

function womenImg() {
    let box = "";
    for (let i = 0; i < imgWomenArr.length; i++) {
        box += `
        <div class="col-md-3 p-3"><img class="w-75"  src="${imgWomenArr[i]}" alt=""></div>
        `;
    }
    Imgs.innerHTML = box;
}

// women imgs

gelBtn.addEventListener("click", () => {
    gelImg();
});

function gelImg() {
    let box = "";
    for (let i = 0; i < imgGelArr.length; i++) {
        box += `
        <div class="col-md-3 p-3"><img class="w-75"  src="${imgGelArr[i]}" alt=""></div>
        `;
    }
    Imgs.innerHTML = box;
}

//Our E-commerce page
commerceBtn.addEventListener("click", () => {
    bodyNone();
});
function bodyNone() {
    nav.classList.add("d-none");
    home.classList.add("d-none");
    aboutus.classList.add("d-none");
    matrial.classList.add("d-none");
    counter.classList.add("d-none");
    product.classList.add("d-none");
    comingSoon.classList.replace("d-none", "d-block");
}
