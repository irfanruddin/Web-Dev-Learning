function about(name) {
  console.log(`Hello, my name is ${name}.`);
  console.log(`${name} is a s/w dev.`);
}

// about("irfan");

function calc(a, b, opr) {
  switch (opr) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "-":
      result = a * b;
      break;
    case "/":
      result = b == 0 ? "cannot divide by zero" : a / b;
      break;
    default:
      result = "Invalid opr";
  }
  console.log(`${a} ${opr} ${b} = ${result}`);
}

// calc(4, 0, "/");

const func1 = (x, y) => {
  let z = x + y;
  return z;
};

let k = func1(1, 2);
console.log(k);
