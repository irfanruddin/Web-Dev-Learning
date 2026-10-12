// let a = 5;
// function factrial(n) {
//   let arr = Array.from(Array(n + 1).keys());
//   console.log(arr.slice(1));
//   let c = arr.slice(1).reduce((a, b) => {
//     return a * b;
//   });
//   console.log(c);
// }

// factrial(a);

let x = 5;
function factrial(n) {
  let arr = Array.from(Array(n + 1).keys());
  let z = arr.slice(1).reduce((x, y) => x * y);
  console.log(z);
}
factrial(x);
