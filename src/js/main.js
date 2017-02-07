(function (win, doc) {
  var $         = doc.querySelector.bind(doc),
      overlay   = $('.overlay'),
      sound     = $('audio'),
      onButton  = $('.on-button'),
      offButton = $('.off-button');

  function toggleOverlay (event) {
    (overlay.classList.contains('hidden')) ? overlay.classList.remove('hidden') : overlay.classList.add('hidden');

    sound.play();
  }

  onButton.addEventListener('click', toggleOverlay);
  offButton.addEventListener('click', toggleOverlay);
})(window, document);
