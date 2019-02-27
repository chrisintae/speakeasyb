import { start } from './preloader';
import { TweenLite } from 'gsap';

const homeBtn = document.getElementById('homeBtnMenu');
const menuBtn = document.getElementById('menuBtn');
const menuModal = document.getElementById('menuModal');
const menuBtnContainer = document.getElementById('menuBtnContainer');

const videoBtn = document.getElementById('videoBtn');
const videoBtnMenu = document.getElementById('videoBtnMenu');
const videoModal = document.getElementById('videoModal');
const videoContainer = document.getElementById('videoContainer');
const videoCloseBtn = document.getElementById('videoCloseBtn');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// menu button
menuBtn.addEventListener('click', () => {  
  if (menuModal.classList.contains('active')) {
    menuAnimationOut();
  } else {
    menuModal.classList.remove('active');
    menuAnimationIn();
  }
});

// menu animation in
function menuAnimationIn() {
  menuModal.classList.add('active');
  menuBtnContainer.classList.add('close');

  let tl = new TimelineLite();

  tl
    .to(menuModal, .5, { left: 0, ease: Expo.easeInOut }, '-=.15')
    .to(menuTitle, .75, { opacity: 1, ease: Expo.easeInOut }, '-=.1')
    .to(copyright, .75, { opacity: 1, ease: Expo.easeInOut }, '-=.75')

    .staggerTo('ul#menuList li', 1, { opacity: 1 }, 0.25, '+=0');
};

// menu animation out
function menuAnimationOut() {
  let tl = new TimelineLite();

  tl
    .to('ul#menuList li', 1, { opacity: 0, ease: Expo.easeInOut }, 'Out')
    .to(copyright, 1, { opacity: 0, ease: Expo.easeInOut }, 'Out')
    .to(menuTitle, 1, { opacity: 0, ease: Expo.easeInOut, onComplete: closeComplete }, 'Out');
};

function closeComplete() {
  menuModal.classList.remove('active');
  menuBtnContainer.classList.remove('close');
};



// home button 
homeBtn.addEventListener('click', () => {
  menuAnimationOut();

  if (menuModal.classList.contains('active')) {
    videoModalAnimationOut()
  }

  // if (document.body.classList.contains('index')) {
  //   start();
  // } else {

  // }
   start();
});



// trailer button
videoBtn.addEventListener('click', () => {
  videoModalAnimation();
});

// watch button
videoBtnMenu.addEventListener('click', () => {
  videoModalAnimation();
});

//video close button
videoCloseBtn.addEventListener('click', () => {
  player.pause().then(
    videoModalAnimationOut()
  )
})

// video modal
function videoModalAnimation() {
  if (menuModal.classList.contains('active')) {
    menuAnimationOut();
  }
  
  videoModalAnimationIn();
};

function videoModalAnimationIn() {
  videoModal.classList.add('active');

  TweenLite.to(videoContainer, 1, { opacity: 1, ease: Expo.easeIn });
};

function videoModalAnimationOut() {
  TweenLite.to(videoContainer, 1.25, { opacity: 0, onComplete: function() {
    videoModal.classList.remove('active');
  }});
  
};