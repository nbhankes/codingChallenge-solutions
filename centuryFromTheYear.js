function centuryFromYear(year) {
 let yrString = year.toString();
 let digitCount = yrString.length;
 let yearArr = yrString.split("");
 let lastDigit = yearArr[parseInt(digitCount - 1)];
 let secondToLastDigit = yearArr[parseInt(digitCount - 2)];
 let sumOfLastTwoYears = parseInt(lastDigit) + parseInt(secondToLastDigit);
 let firstDigit = parseInt(yearArr[0]);
 let firstDigitString = yearArr[0];
 let secondDigitString = yearArr[1];
 let firstTwoDigitsString = firstDigitString + secondDigitString;
 let firstTwoDigits = parseInt(firstTwoDigitsString);
 
 console.log(firstTwoDigits);
 
 if (digitCount === 4 && sumOfLastTwoYears === 0 ) {
     return firstTwoDigits
 } else if (digitCount === 4 && sumOfLastTwoYears !== 0) {
     return firstTwoDigits + 1
 } else if (digitCount === 3 && sumOfLastTwoYears === 0 ) {
     return firstDigit 
 } else if  (digitCount === 3 && sumOfLastTwoYears !== 0 ) {
    return firstDigit + 1
} else {
    return 1
}
}
