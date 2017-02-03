(function (win, doc) {
  var overlay  = document.querySelector('.overlay'),
      sound    = document.querySelector('audio'),
      onButton = document.querySelector('.on-button');

  function toggleOverlay (event) {
    overlay.classList.add('hidden');
    sound.play();
  }

  onButton.addEventListener('click', toggleOverlay);
})(window, document);
