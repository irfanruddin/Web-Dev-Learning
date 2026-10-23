// Async and Await
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Retrived");
    }, 1000);
  });
}

async function main() {
  console.log("I am first line");
  console.log("I am second line");
  console.log("I am third line");

  let data = await getData();
  console.log(data);

  console.log("I am fourth line");
  console.log("I am fifth line");
  console.log("I am sixth line");
}

main();
