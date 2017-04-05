// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//filter_list([1,2,'a','b']) == [1,2]

function filterString(arrayToSort) {
  newArray = []
  for(var i = 0; i < arrayToSort.length; i++){
    if(typeof(arrayToSort[i]) !== typeof("string")){
      newArray.push(arrayToSort[i]);
    }
  }
  console.log(newArray);
}

filterString([1,2,'a','b'])
 var check = [1,2,'a','b'];
 console.log(typeof(check[0]));

 // Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).
// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"

function divisors(num){
  allDivisors = []
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      allDivisors.push(i)
    }
  }
  if(allDivisors.length === 0){
    console.log(num + ' is prime')
  } else {
    console.log(allDivisors)
  }
}

divisors(12);
divisors(25);
divisors(13);


// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  var validLength = false
  var validPin = false;
  if(pin.length === 4 || pin.length === 6 ){
    validLength = true
  }
  if(validLength && !/[a-z]/i.test(pin)){
    validPin = true;
  }
  console.log(validPin);
}

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
function getMiddle(s){
 if(s.length % 2 === 0) {
   var evenPosition = s.length / 2;
   return s[evenPosition -1] + s[evenPosition]
 } else {
   var oddPosition = Math.floor(s.length / 2);
   return s[oddPosition];
 }
}

getMiddle('testing');
