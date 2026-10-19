// Fetch API

//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await x.json();
  console.log(data);
}
async function main() {
  console.log("I am first line");
  console.log("I am second line");

  let data = await getData();
  console.log(data);

  console.log("I am third line");
  console.log("I am fourth line");
}

main();

//post method (for ref see lec from 17:00 )

async function createPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  // 1. Prepare your data payload
  const data = {
    title: "Hello World",
    body: "This is my first post request.",
    userId: 1,
  };

  try {
    // 2. Make the fetch call with configurations
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tells the server the payload format
      },
      body: JSON.stringify(data), // Converts JavaScript object to a JSON string
    });

    // 3. Check if the response status is successful (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 4. Parse the JSON response body
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

createPost();
