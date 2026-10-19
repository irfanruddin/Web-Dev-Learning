console.log("hii");
console.log("I am Irfan");

// Callback

// function loadScr(src, callback) {
//   let ls = document.createElement("script");
//   ls.src = src;
//   ls.onload = ()=>callback(ls);
//   document.head.append(ls);
// }
// loadScr("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js",(ls)=>{
//     console.log("new method.")
// })

// Callback hell

const mike = () => {
  console.log("another one");
};

const again = (mike) => {
  console.log("Done");
  mike();
};

const callback = (arg, again) => {
  console.log(arg);
  again(mike);
};

function loadScript(src, callback) {
  let ls = document.createElement("script");
  ls.src = src;
  ls.onload = callback("first one", again);
  document.head.append(ls);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js",
  callback,
);
