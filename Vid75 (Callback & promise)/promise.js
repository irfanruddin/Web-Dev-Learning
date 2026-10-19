console.log("this is promise");
const battle = new Promise((resolve, reject) => {
  let r = Math.random();

  if (r < 0.5) {
    reject("No it cannot be acceptable");
  } else {
    setTimeout(() => {
      console.log("I am timeout");
      resolve("resolve done");
    }, 3000);
  }
});

const war = new Promise((resolve, reject) => {
  let r = Math.random();

  if (r < 0.5) {
    reject("No it cannot be acceptable");
  } else {
    setTimeout(() => {
      console.log("I am timeout");
      resolve("resolve done");
    }, 3000);
  }
});

// battle.then((a) => {
//   console.log(a);
// }).catch(err=>{
//     console.log(err)
// })

let prom = Promise.all([battle, war]);
prom
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
