function loadPhotos(photoList) {
  const gallery = document.getElementById('gallery');
  const fullscreen = document.getElementById('fullscreen');
  const fullscreenImg = document.getElementById('fullscreen-img');

  photoList.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onclick = () => showFullscreen(src);
    gallery.appendChild(img);
  });

  function showFullscreen(src) {
    fullscreenImg.src = src;
    fullscreen.classList.remove('hidden');
  }

  window.hideFullscreen = function () {
    fullscreen.classList.add('hidden');
    fullscreenImg.src = '';
  };
}

// Service Worker（任意）
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(console.error);
}
