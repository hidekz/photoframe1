const gallery = document.getElementById('gallery');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreen-img');

// コールバックとして呼び出される関数
function loadPhotos(photoList) {
  photoList.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onclick = () => showFullscreen(src);
    gallery.appendChild(img);
  });
}

// フルスクリーン表示
function showFullscreen(src) {
  fullscreenImg.src = src;
  fullscreen.classList.remove('hidden');
}

// フルスクリーン解除
function hideFullscreen() {
  fullscreen.classList.add('hidden');
  fullscreenImg.src = '';
}

// JSONP の読み込み
const script = document.createElement('script');
script.src = 'photos.js';
document.body.appendChild(script);

// PWA Service Worker登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
