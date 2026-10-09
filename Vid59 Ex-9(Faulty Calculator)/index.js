function calc(a, b, opr) {
  var x = Math.random();

  if (x < 0.1) {
    switch (opr) {
      case "+":
        result = a - b;
        break;
      case "-":
        result = b == 0 ? "cannot divide by zero" : a / b;
        break;
      case "*":
        result = a + b;
        break;
      case "/":
        result = a ** b;
        break;
      default:
        result = "Invalid opr";
    }
  } else {
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
  }
  console.log(`${a} ${opr} ${b} = ${result}`);
}

calc(4, 2, "+");
