function loadPhotos(photoList) {
  const gallery = document.getElementById('gallery');

  photoList.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onclick = () => showFullscreen(src);
    gallery.appendChild(img);
  });
}

// グローバル関数として定義する
function showFullscreen(src) {
  const fullscreen = document.getElementById('fullscreen');
  const fullscreenImg = document.getElementById('fullscreen-img');
  fullscreenImg.src = src;
  fullscreen.classList.remove('hidden');
}

// hideFullscreen もグローバルで
function hideFullscreen() {
  const fullscreen = document.getElementById('fullscreen');
  const fullscreenImg = document.getElementById('fullscreen-img');
  fullscreen.classList.add('hidden');
  fullscreenImg.src = '';
}

// Service Worker 登録（任意）
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(console.error);
}
