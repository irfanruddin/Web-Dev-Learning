let r = Math.random();
let a = prompt("Enter first number: ");
let c = prompt("Enter second number: ");
let b = prompt("Enter Operation: ");

let obj = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**",
};

if (r > 0.1) {
  alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  b = obj[b];
  alert(`The Result is ${eval(`${a} ${b} ${c}`)}`);
}
