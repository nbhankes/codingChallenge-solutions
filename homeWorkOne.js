//Assignment:
//Write three functions with the following Big O:

// 1)Constant time: O(1)
// 2) Linear time: O(n)
// 3) Polynomial time: O(n^k)

//Constant time: O(1)
function printHelloWorld() {
  console.log("Hello World!");
}

printHelloWorld();

//Linear time: O(n)
//the letters variable takes up space of 1 but wouldn't it be a non-dominant term and get dropped?
let string = "Hello World.";

function printAllInArr() {
  let letters = [];
  letters.push(string.split(""));
  for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]);
  }
}

printAllInArr();

// 3) Polynomial time: O(n^k)
