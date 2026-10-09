let first;
let second;
let third;

var rand = Math.random();
console.log(rand);
if (rand < 0.33) {
  first = "craxy";
} else if (rand > 0.33 && rand < 0.66) {
  first = "amaizing";
} else {
  first = "fire";
}

var rand = Math.random();
console.log(rand);
if (rand < 0.33) {
  second = "engine";
} else if (rand > 0.33 && rand < 0.66) {
  second = "food";
} else {
  second = "garment";
}

var rand = Math.random();
console.log(rand);
if (rand < 0.33) {
  third = "bros";
} else if (rand > 0.33 && rand < 0.66) {
  third = "limited";
} else {
  third = "hub";
}

console.log(`${first} ${second} ${third}`);
