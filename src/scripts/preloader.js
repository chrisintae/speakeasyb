let tl = new TimelineLite();

tl
  .set(preloader, { opacity: 0, immediateRender: true}, 0)
  .set(videoSection, { display: "none", immediateRender: true }, 0)
  .set(contact, { display: "none", immediateRender: true }, 0)

  .to(preloader, 0.5, { opacity: 1, ease: Expo.easeInOut }, '+=0.25')

  .from(titleSpeak, 0.25, { opacity: 0, ease: Expo.easeIn }, '+=0.5')
  .from(titleEasy, 0.25, { opacity: 0, ease: Expo.easeIn }, '+=0.5')
  .from(titleComma, 0.25, { opacity: 0, ease: Expo.easeIn }, '+=0.5')
  .from(titleB, 0.25, { opacity: 0, ease: Expo.easeIn }, '-=0.25')
  .from(mainCtaContainer, 1, { display: "none"}, '-=0.25')

  .to(preloader, 0.5, { opacity: 0 }, '+=0.5')

  .to(preloader, 0.5, { display: "none" }, '-=0.5')
  .to(titleContainer, 1, { scale: 1, ease: Power2.easeOut }, '-=0.5')
  .from(subContainer, 1, { opacity: 0 }, '-=0.5')
  .to(mainContainer, 1, { marginBottom: 80, ease: Power2.easeOut }, '-=1.5')

  .from(mainCtaContainer, 1, { opacity: 0, ease: Power2.easeOut }, '-=0.5')
  .staggerFrom(".menu ul li", 0.75, { opacity: 0 }, 0.35, '-=0.5')
  .to(videoSection, 0.25, { display: "flex" }, '-=0.5')
  .to(contact, 0.25, { display: "flex" }, '-=0.5')

tl.play();
