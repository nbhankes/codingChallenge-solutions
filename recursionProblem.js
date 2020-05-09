//factorial w/o recursion
function factorial(n) {
  let arr = [];
  for (let i = n; i >= 1; i--) arr.push(i);
  let productArr = function (arr) {
    return arr.reduce((a, b) => a + b);
  };
  return productArr(arr);
}
factorial(5); // = 15

//recursion factorial
function factorial(n) {
  if (n <= 1) {
    return 1; //terminal call
  } else {
    return n + factorial(n - 1); //calls the function again and repeats until terminal call
  }
}

factorial(5); // 15
