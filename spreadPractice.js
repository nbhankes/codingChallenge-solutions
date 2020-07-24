sequence = [5, 8, 2, 12]

console.log(Math.max(...sequence)) // 12
console.log(Math.min(...sequence)) // 2
console.log(sequence.length) // 4

console.log(Math.max(...sequence)-Math.min(...sequence)+1-sequence.length)  // 7
