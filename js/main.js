// // sticky header
// window.addEventListener('scroll', function(){
//   var header = document.querySelector('.siteheader')
//   header.classList.toggle('sticky', window.scrollY > 30)
// })


// //hamburger menu
// var eltHamburger = document.querySelector('.js-hamburger')
// var eltClose = document.querySelector('.js-close')
// var eltNav = document.querySelector('.sitenav')
// var eltBgLayer = document.querySelector('.bglayer')

// eltHamburger.addEventListener('click', function(){
//   eltNav.classList.add('active')
//   eltBgLayer.classList.add('active')
// })
// eltClose.addEventListener('click', function(){
//   eltNav.classList.remove('active')
//   eltBgLayer.classList.remove('active')
// })
// eltBgLayer.addEventListener('click', function(){
//   this.classList.remove('active')
//   eltNav.classList.remove('active')
// })


// // Pricing slide
// var swiper = new Swiper(".swiper-container", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: { 768: {slidesPerView: 2}, 992: {slidesPerView: 3}}
// });


// // scrollspy menu
// var home = document.querySelector('#hero');
// var about = document.querySelector('#about');
// var types = document.querySelector('#types');
// var teachers = document.querySelector('#teachers');
// var learners = document.querySelector('#learners');
// var pricing = document.querySelector('#pricing');
// var contacts = document.querySelector('#contacts');
// var menu = document.querySelectorAll('.sitenav__item');
// var linkHome = document.querySelector('js-hero');
// var linkAbout = document.querySelector('.js-about');
// var linkTypes = document.querySelector('.js-types');
// var linkTeachers = document.querySelector('.js-teachers');
// var linkLearners = document.querySelector('.js-learners');
// var linkPricing = document.querySelector('.js-pricing');
// var linkContacts = document.querySelector('.js-contacts');

// function classRemove(){
//   menu.forEach(function(item){
//     item.classList.remove('active')
//   })
// }

// window.addEventListener('scroll', ()=>{
//   var wind = window.pageYOffset
//   if(home.offsetTop <= wind && about.offsetTop > (wind - 50)){
//     classRemove()
//     linkAbout.classList.add('active')
//   }
//   else if(about.offsetTop <= wind && types.offsetTop > (wind - 50)){
//     classRemove()
//     linkTypes.classList.add('active')
//   }
//   else if(types.offsetTop <= wind && learners.offsetTop > (wind - 50)){
//     classRemove()
//     linkLearners.classList.add('active')
//   }
//   else if(learners.offsetTop <= wind && pricing.offsetTop > (wind - 50)){
//     classRemove()
//     linkPricing.classList.add('active')
//   }
//   else if(pricing.offsetTop <= wind && teachers.offsetTop > (wind - 50)){
//     classRemove()
//     linkTeachers.classList.add('active')
//   }
//   else if(teachers.offsetTop <= wind && contacts.offsetTop > (wind - 50)){
//     classRemove()
//     linkContacts.classList.add('active')
//   }
// })


// sticky header
window.addEventListener('scroll', function(){
  var header = document.querySelector('.siteheader')
  header.classList.toggle('sticky', window.scrollY > 30)
})


//hamburger menu
var eltHamburger = document.querySelector('.js-hamburger')
var eltClose = document.querySelector('.js-close')
var eltNav = document.querySelector('.sitenav')
var eltBgLayer = document.querySelector('.bglayer')

eltHamburger.addEventListener('click', function(){
  eltNav.classList.add('active')
  eltBgLayer.classList.add('active')
})
eltClose.addEventListener('click', function(){
  eltNav.classList.remove('active')
  eltBgLayer.classList.remove('active')
})
eltBgLayer.addEventListener('click', function(){
  this.classList.remove('active')
  eltNav.classList.remove('active')
})


// Pricing slide
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: { 768: {slidesPerView: 2}, 992: {slidesPerView: 3}}
});


// scrollspy menu
var home = document.querySelector('#hero');
var about = document.querySelector('#about');
var types = document.querySelector('#types');
var teachers = document.querySelector('#teachers');
var learners = document.querySelector('#learners');
var pricing = document.querySelector('#pricing');
var contacts = document.querySelector('#contacts');
var menu = document.querySelectorAll('.sitenav__item');
var linkHome = document.querySelector('js-hero');
var linkAbout = document.querySelector('.js-about');
var linkTypes = document.querySelector('.js-types');
var linkTeachers = document.querySelector('.js-teachers');
var linkLearners = document.querySelector('.js-learners');
var linkPricing = document.querySelector('.js-pricing');
var linkContacts = document.querySelector('.js-contacts');

function classRemove(){
  menu.forEach(function(item){
    item.classList.remove('active')
  })
}

window.addEventListener('scroll', ()=>{
  var wind = window.pageYOffset
  if(home.offsetTop <= wind && about.offsetTop > (wind - 50)){
    classRemove()
    linkAbout.classList.add('active')
  }
  else if(about.offsetTop <= wind && types.offsetTop > (wind - 50)){
    classRemove()
    linkTypes.classList.add('active')
  }
  else if(types.offsetTop <= wind && teachers.offsetTop > (wind - 50)){
    classRemove()
    linkTeachers.classList.add('active')
  }
  else if(teachers.offsetTop <= wind && learners.offsetTop > (wind - 50)){
    classRemove()
    linkLearners.classList.add('active')
  }
  else if(learners.offsetTop <= wind && pricing.offsetTop > (wind - 50)){
    classRemove()
    linkPricing.classList.add('active')
  }
  else if(pricing.offsetTop <= wind && contacts.offsetTop > (wind - 50)){
    classRemove()
    linkContacts.classList.add('active')
  }
})