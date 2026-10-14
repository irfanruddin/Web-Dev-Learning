function createCard(title, cName, views, monthOld, duration, thumbnail) {
  let viewCount;

  if ((views < 1000000) & (views >= 1000)) {
    viewCount = views / 1000 + "k";
  } else if (views > 1000000) {
    viewCount = views / 1000000 + "m";
  } else {
    viewCount = views;
  }
  let html = `
<div class="card">
  <div class="image">
    <img src="image.jpg" alt="" />
      <div class="capsule">${duration}</div>
  </div>

  <div class="text">
    <h1>${title}</h1>
    <p>${cName} • ${viewCount} views • ${monthOld} months ago</p>
  </div>
</div>;
`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
  

createCard(
  "sigma web dev",
  "karim",
  12345678990,
  56,
  "56:56",
  "https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg",
);
