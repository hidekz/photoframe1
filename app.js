const photos = Array.from({ length: 8 }, (_, i) =>
  `photo/photo${String(i + 1).padStart(2, '0')}.jpg`
);

const gallery = document.getElementById('gallery');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreen-img');

// 一覧表示
photos.forEach(src => {
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

function hideFullscreen() {
  fullscreen.classList.add('hidden');
  fullscreenImg.src = '';
}

// PWA Service Worker登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
