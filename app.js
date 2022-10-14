function convertToRoman(num) {
  let roman = "";
  if (num > 0 && num <= 30)
    if (num < 4) {
      for (let i = 1; i <= num; i++) {
        roman = "I".repeat(i);
      }
    }
}

function checkLengthOfNumber(num) {
  let length = num.toString().length;
  return Number(length);
}

function checkNumberLastDigit(num) {
  let slicedNum = num.toString().slice(-1);
  return Number(slicedNum);
}

function romanNumberOneToNine(num) {
  let romanNumber;
  if (num < 4 && num > 0) {
    for (let i = 1; i <= num; i++) {
      romanNumber = "I".repeat(i);
    }
    return romanNumber;
  }
  if (num === 4) {
    return (romanNumber = "IV");
  }
  if (num === 5) {
    return (romanNumber = "V");
  }
  if (num === 6) {
    return (romanNumber = "VI");
  }
  if (num === 7) {
    return (romanNumber = "VII");
  }
  if (num === 8) {
    return (romanNumber = "VIII");
  }
  if (num === 9) {
    return (romanNumber = "IX");
  }
  if (num <= 0) {
    return (romanNumber = "X");
  }
}
function romanBelow39(num) {
  let firstNum;
  let roman;
  let lastRoman;
  if (num <= 39 && num >= 11) {
    firstNum = num.toString().slice(-2, 1);
    console.log(firstNum);
    lastRoman = checkNumberLastDigit(num);
    roman = romanNumberOneToNine(firstNum) + romanNumberOneToNine(lastRoman);
    console.log(
      romanNumberOneToNine(firstNum),
      romanNumberOneToNine(lastRoman)
    );

    return roman;
  } else {
    return romanNumberOneToNine(num);
  }
}

console.log(romanBelow39(10));

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1

// numbers up to 38
