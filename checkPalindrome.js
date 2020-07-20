function checkPalindrome(inputString) {
  let stringArr = inputString.split("");
  const stringArrReverse = [...stringArr].reverse()
  let string = stringArr.join();
  let reverse = stringArrReverse.join();

  if (string === reverse) {
    return true
  } else {
    return false
  }

}
