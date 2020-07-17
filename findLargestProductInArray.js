let sumsArray = [];

function adjacentElementsProduct(inputArray) {
    let length = inputArray.length;
    let count = length - 1;

for (var i = 0; i < inputArray.length -1; i++) {
    sumsArray.push(inputArray[ i ] * inputArray[ i + 1 ])
    console.log(i);
    }
    return Math.max(...sumsArray);
}
