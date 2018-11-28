// helper
function $(id) {
  return document.getElementById(id);
}

$('watchBtn').addEventListener('click', function() {
  modal = $('modal');
  video = $('videoContainer')
  modalBtn = $('');

  TweenLite.to(modal, 0.5, {display: "flex", height: "100vh", ease: Power1.easeInOut, onComplete: loadVideo})
  TweenLite.from(videoContainer, 0.5, {opacity: 0, delay: 0.5})
});

function loadVideo() {
  modal.classList.add('modal-active')
}
