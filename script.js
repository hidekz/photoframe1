async function loadPhotos() {
  const res = await fetch("photos.json");
  const photos = await res.json();
  const gallery = document.getElementById("gallery");

  photos.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.onclick = () => showFullscreen(url);
    gallery.appendChild(img);
  });
}

function showFullscreen(url) {
  document.getElementById("gallery").style.display = "none";
  const fs = document.getElementById("fullscreen");
  const img = document.getElementById("full-img");
  img.src = url;
  fs.style.display = "flex";
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}

function exitFullscreen() {
  document.getElementById("fullscreen").style.display = "none";
  document.getElementById("gallery").style.display = "flex";
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

loadPhotos();
