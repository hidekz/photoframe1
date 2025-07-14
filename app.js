const gallery = document.getElementById('gallery');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreen-img');

// 一覧表示処理
function displayPhotos(photoList) {
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

// JSONから画像URLを取得
fetch('photos.json')
  .then(res => {
    if (!res.ok) throw new Error('JSONの読み込みに失敗しました');
    return res.json();
  })
  .then(displayPhotos)
  .catch(err => {
    console.error(err);
    gallery.textContent = '画像の読み込みに失敗しました';
  });

// PWA Service Worker登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
