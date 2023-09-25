// functions in js
// eg 1
function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(5, 7));
//    eg2
function myfunc(var1, var2, var3, var4, var5) {
  let result = var3 + " " + var4 + " " + var2 + " " + var1 + " " + var5
  return result;
}
console.log(myfunc("intelligent", "very", "he", "is", "person"))
console.log(myfunc("you", "are", "hi", "how", "bro"))
console.log(myfunc("exactly", "know", "hmm", "dont", ""))
console.log(myfunc("of", "takecare", "Okay", "fine", "yourself"))
// eg
let x = myFunction(4, 3);
console.log(x)
function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}
// () opearator
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(77));

// Accessing a function with incorrect parameters can return an incorrect answer:
function toCelsius1(fahrenheit1) {
  return (5 / 9) * (fahrenheit1 - 32);
}
let value1 = toCelsius1();
console.log(value1)
//   
function toCelsius3(fahrenheit3) {
  return (5 / 9) * (fahrenheit3 - 32);
}

let value3 = toCelsius3;
console.log(value3);