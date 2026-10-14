let boxes = document.querySelectorAll(".box");

function getcolor() {
  let a = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  let c = Math.ceil(Math.random() * 255);

  return `rgb(${a},${b},${c})`;
}
function getFontColor(){

  let x = Math.ceil(Math.random() * 255);
  let y = Math.ceil(Math.random() * 255);
  let z = Math.ceil(Math.random() * 255);

  return `rgb(${x},${y},${z})`;

}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getcolor();
  e.style.color=getFontColor();
  e.textContent = getcolor();
});

// const textCol = document.querySelector(".container");
// textCol.style.color = "black";

// let boxes = document.querySelector(".container").children;

// for (i = 0; i < boxes.length; i++) {
//   var box = boxes[i];

//   let Color = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   let BgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

//   box.style.Color = Color;
//   box.style.backgroundColor = BgColor;
//   box.textContent = BgColor;
// }
