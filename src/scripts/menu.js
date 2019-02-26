import { start } from './preloader';

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const menuModal = document.getElementById('menuModal');
const menuBtnContainer = document.getElementById('menuBtnContainer');
const aboutBtn = document.getElementById('aboutBtn');
const aboutContainer = document.getElementById('quoteContainer');


// home button 
homeBtn.addEventListener('click', function() {
  menuAnimationOut();

  if (aboutContainer.classList.contains('active')) {
    // let tl = new TimelineLite();

    // tl 
    //   .to(quotee, .75, { opacity: 0, ease: Expo.easeInOut })
    //   .to(quote, .75, { opacity: 0, ease: Expo.easeInOut }, '+=.5')
    //   .to(quoteContainer, .75, { opacity: 0, ease: Expo.easeInOut }, '+=1');

      aboutContainer.classList.remove('active');
  }

  start();
});

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
function menuAnimationIn(e) {
  menuModal.classList.add('active');
  menuBtnContainer.classList.add('close');

  let tl = new TimelineLite();

  tl
    .to(menuModal, .5, { left: 0, ease: Expo.easeInOut }, '-=.15')
    .to(menuTitle, .75, { opacity: 1, ease: Expo.easeInOut }, '-=.1')
    .to(copyright, .75, { opacity: 1, ease: Expo.easeInOut }, '-=.75')

    .staggerTo('ul#menuList li', 1, { opacity: 1 }, 0.25, '+=0')
}


// menu animation out
function menuAnimationOut(e) {
  let tl = new TimelineLite();

  tl
    .to('ul#menuList li', 1, { opacity: 0, ease: Expo.easeInOut }, 'Out')
    .to(copyright, 1, { opacity: 0, ease: Expo.easeInOut }, 'Out')
    .to(menuTitle, 1, { opacity: 0, ease: Expo.easeInOut, onComplete: closeComplete }, 'Out')
};

function closeComplete() {
  menuModal.classList.remove('active');
  menuBtnContainer.classList.remove('close');
};


// about button
aboutBtn.addEventListener('click', () => {  
  menuAnimationOut();
  setInterval(displayAbout, 1000);
});

function displayAbout() {
    aboutContainer.classList.add('active');

    // let tl = new TimelineLite();

    // tl 
    //   .to(quoteContainer, .75, { opacity: 1, ease: Expo.easeInOut })
    //   .to(quote, .75, { opacity: 1, ease: Expo.easeInOut }, '+=.5')
    //   .to(quotee, .75, { opacity: 1, ease: Expo.easeInOut }, '+=1');
}