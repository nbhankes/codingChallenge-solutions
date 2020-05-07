/*
Assignment:
Implement 2 different functions, each with a single console.log(“(func name)“)
Name each “A”, “B”

You can only call (emphasis on call) “A” Exactly ONE TIME.
Each function takes in one parameter, ‘k’.
“A” returns the value of ‘k’ squared.
“A” cannot perform any mathematic operations.
*/


function A(k) {
  console.log("function A()");
  let AK = k
  return B(AK);
}



function B(k) {
  console.log("function B()");
  return k * k;
}

A(8);
