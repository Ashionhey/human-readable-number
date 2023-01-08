module.exports = function toReadable(number) {

   let numberString = String(number);
   let numberLength = numberString.length;
   let unicNum = {
      0: "",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
      100: "one hundred",
      200: "two hundred",
      300: "three hundred",
      400: "four hundred",
      500: "five hundred",
      600: "six hundred",
      700: "seven hundred",
      800: "eight hundred",
      900: "nine hundred",

   }
   let unicNum1 = {
      1: "eleven",
      2: "twelve",
      3: "thirteen",
      4: "fourteen",
      5: "fifteen",
      6: "sixteen",
      7: "seventeen",
      8: "eighteen",
      9: "nineteen",
   }
   if (number == 0) {
      return "zero"
   }
   if (number <= 20) {
      return unicNum[number]
   }
   else if (numberLength == 2 & number > 20 & numberString[1] == 0) {
      return `${unicNum[(Number(numberString[0])) * 10]}${unicNum[numberString[1]]}`
   }
   else if (numberLength == 2 & number > 20) {
      return `${unicNum[(Number(numberString[0])) * 10]} ${unicNum[numberString[1]]}`
   }
   else if (numberLength == 3 & numberString[1] == 1 & numberString[2] > 0 & numberString[2] < 10) {
      return `${unicNum[numberString[0]]} hundred ${unicNum1[numberString[2]]}`.trim()
   }
   else if (numberLength == 3 & numberString[1] == 0) {
      return `${unicNum[numberString[0]]} hundred ${unicNum[(Number(numberString[1])) * 10]}${unicNum[numberString[2]]}`.trim()
   }
   else if (numberLength == 3) {
      return `${unicNum[numberString[0]]} hundred ${unicNum[(Number(numberString[1])) * 10]} ${unicNum[numberString[2]]}`.trim()
   }
}