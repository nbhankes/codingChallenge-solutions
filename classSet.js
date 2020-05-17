class mySet {
  constructor(anArray) {
    this.anArray = this.removeDuplicates(anArray);
  }

  removeDuplicates(anArray) {
    return anArray.filter((value, index) => anArray.indexOf(value) === index);
  }
}

numberSet = new mySet([1, 2, 2, 3, 2]);
secondSet = new mySet([6, 5, 5, 6, 8]);
console.log(numberSet);
console.log(secondSet);
