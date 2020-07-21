let sequence = [0, 1];

function fib(x) {
    for (var i = sequence.length; i < x; i++) {
        sequence.push((sequence[i -1]) + (sequence[i - 2]));
    }
    return sequence
}

console.log(fib(15))
