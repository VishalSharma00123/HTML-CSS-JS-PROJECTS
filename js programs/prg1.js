// data types in javascript 
// undefined null boolean string number and object 
var a=7
var a=4
console.log(a)
let b=10
console.log(b)
const pi=3.14
console.log(pi);
// local scope can access global variable
var number = 50

function print() {
  var square = number * number
  console.log(square)
}
print()
console.log(number)

// global scope cannot access the variable which are present in the local scope 

function print1() {
    var number1 = 50
    var square1 = number1 * number1
    console.log(square1)
  }
  
  print1()// 2500
  
  console.log(number1)// ReferenceError