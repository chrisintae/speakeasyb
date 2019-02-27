export function start() {
  let tl = new TimelineLite();

  tl
    // set
    .set(preloader, { opacity: 1, immediateRender: true}, 0)
    .set(titleContainer, { scale: 1.25, immediateRender: true}, 0)

    // into
    .from(titleSpeak, 0.25, { opacity: 0, ease: Expo.easeIn }, '+=0.5')
    .from(titleEasy, 0.25, { opacity: 0, ease: Expo.easeIn }, '+=0.5')
    .from(titleComma, 0.25, { opacity: 0, ease: Expo.easeIn }, '+=0.5')
    .from(titleB, 0.25, { opacity: 0, ease: Expo.easeIn }, '-=0.25')

    // intro - out
    .to(preloader, 0.5, { opacity: 0 }, '+=0.5')
    .to(preloader, 0.5, { display: "none" }, '-=0.5')

    // main 
    .fromTo(titleContainer, 1, { scale: 1.25 }, { scale: 1, ease: Power2.easeOut }, 'Title')
    .from(subContainer, 1, { opacity: 0 }, 'Title')
    .from(awardsContainer, 1, { opacity: 0, }, 'Title')
    .from(videoBtn, 1, { opacity: 0 }, 'Title')
    .from(videoTextContainer, .5, { css: { width: '0' }, ease: Power2.easeOut }, 'Title+=.9')
    .from(arrowBox, .5, { css: { left: '0' }, ease: Power2.easeOut }, 'Title+=0.5')
    .from(menuBtn, .5, { css: { left: '0' }, ease: Power2.easeOut }, 'Title+=0.75')
}

if (document.body.classList.contains('index')) {
  start();
}



