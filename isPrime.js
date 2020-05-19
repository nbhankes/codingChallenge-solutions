function isPrime(x) {
    if (x < 2) {
        return "Not Prime";
    }

    for (var i = 2; i < x; i++) {
        console.log(i);
        if (x % i == 0)  {
            return "Not Prime";
        } else {
            return "Prime!"
    }   
  }
}
console.log(isPrime(13)); // Prime!
