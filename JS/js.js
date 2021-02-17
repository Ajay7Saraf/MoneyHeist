var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});



var blur=document.getElementById('blur');
var tokyo=document.getElementById('tokyo');
var nairobi=document.getElementById('nairobi');
var berlin=document.getElementById('berlin');
var bodyblur=document.getElementById('bodyblur')


function t(){
  blur.classList.toggle('active');
  tokyo.classList.toggle('active');
  bodyblur.classList.toggle('active');
}

function n(){
  blur.classList.toggle('active')
  nairobi.classList.toggle('active')
}

function b(){
  blur.classList.toggle('active')
  berlin.classList.toggle('active')
}

function tc(){
  blur.classList.toggle('active')
  tokyo.classList.toggle('active')
  bodyblur.classList.toggle('active')

}

function nc(){
  blur.classList.toggle('active')
  nairobi.classList.toggle('active')
  
}

function bec(){
  blur.classList.toggle('active')
  berlin.classList.toggle('active')
  
}
