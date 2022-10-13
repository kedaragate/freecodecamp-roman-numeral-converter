function convertToRoman(num) {
  let roman = "";
  if (num > 0 && num < 4) {
    for (let i = 1; i <= num; i++) {
      roman = "I".repeat(i);
    }
  }

  return (num = roman);
}

const result = convertToRoman(2);

console.log(result);

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
