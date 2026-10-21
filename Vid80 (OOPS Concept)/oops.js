let obj = {
  1: "harry",
  2: "irfan",
};

// console.log(obj);

let a = {
  eats: true,
};
let b = {
  jump: true,
};

b.__proto__ = a;

// console.log(a);
// console.log(b);

class animal {
  constructor(name) {
    this.name = name;
    console.log("object is created");
  }
  eats() {
    console.log("Eats veg + Non Veg");
  }
  jumps() {
    console.log("can jumps a long distance");
  }
}

// let x = new animal("Shera");
// console.log(x.eats( ));

class ostrich extends animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("inheritance started");
  }
  fly() {
    console.log("I can fly");
  }
}
let abc = new ostrich("kali");
console.log(abc.jumps());

console.log(abc instanceof ostrich);
