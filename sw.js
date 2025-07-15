self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("photoframe").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "app.js",
        "manifest.json",
        "photos.js"
      ]);a0p
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
