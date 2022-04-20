/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2){
    return l1*l2;
}   
let theArea=area(4,5)
console.log(theArea)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  };
  let ichoThis=crazySum(5,6)
  console.log(ichoThis)


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(x){
     if (x>19){
        return (x-19)*3;
    }else if (x<19){
        return (19-x);
    }
}
let differenceBe=crazyDiff(7);
console.log(differenceBe)


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n){
    if (n>20 && n<100 || n === 400){
        return true
    }else {
        return false
    }
}
console.log(boundary(40))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str){
    if(str.startsWith("Strive")){
        return str
    }else {
        return "Strive " + str;
    }
}
let sentenceTing =strivify("Apolo with us");
console.log(sentenceTing);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(x){
    if(x%3===0 && x%7===0 && x>0){
        return "is a multiple of 3 or 7";
    }else{
        return "is not a multiple of 3 or 7 "
    }
}
let multiples= check3and7(21)
console.log(multiples)


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString = function (str) {
    return str.split("").reverse("").join("");
  };
  console.log(reverseString("Strive"));
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str){
    return str[0].toUpperCase() +str.slice(1)
}
let firstLetter=upperFirst("icho");
console.log(firstLetter)

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(str){
    return str.shift("").pop("")
};
console.log(cutString("Icho"))
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */