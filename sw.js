const CACHE_NAME = "photoframe-v2"; // ← バージョン番号を変更する

const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "photos.js"
];

// インストール時に新しいファイルをキャッシュ
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// 古いキャッシュを削除
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
});

// キャッシュ or ネットワークから取得
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
