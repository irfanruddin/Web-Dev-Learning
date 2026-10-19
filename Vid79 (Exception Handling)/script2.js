let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter a number: "));

//   if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("Invalid input");
//   }
//   else{
//     document.write("Addition is ", a+b);
//   }
function calc() {
  let x = a / b;
  try {
    console.log(x);
  } catch (error) {
    console.log("Cannot divide by zero");
  } finally {
    console.log("execution done.");
  }
}

console.log(calc());
