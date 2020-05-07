//Factorial of 4 = 4 * 3 * 2 * 1 = 24
// if n = 4 // 24
//if n = 5 // 120


function factorial(n) {
    let arr = [];
    for (let i = n; i >= 1; i--)
    arr.push(i);
    let productArr = function(arr) {
    return arr.reduce((a, b) => a * b)
}
return (productArr(arr))
}
