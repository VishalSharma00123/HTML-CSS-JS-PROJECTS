function next_inLine(arr, item) {
  arr.push(item)
  arr.shift()
  return arr
}
console.log(next_inLine([2, 3, 4, 5], 6));
const testarr = [1, 2, 3, 4, 5]
console.log("Before :" + JSON.stringify(testarr))
console.log(next_inLine(testarr, 6))
console.log("After :" + JSON.stringify(testarr))

const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);
console.log(obj);

function negative() {
  return false
}
console.log(negative())
function positive() {
  return true
}
console.log(positive())
// if else statements
hour = 20
if (hour > 10 && hour < 16) {
  greeting = "good day"
}
else if (hour > 16 && hour < 19) {
  greeting = "good evening"
}
else {
  greeting = "good night"
}
console.log(greeting)
// switch statment
let number = 9
switch (number) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break
  default:
    console.log("no matching found");
}
//   for loop in javascript
const cars = [12, 34, "john", "lamborghini"];
var text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "" + "\n"
}
console.log(text);
//   for in loop :The JavaScript for in statement loops through the properties of an Object.
const person1 = { fname: "John", lname: "Doe", age: 25 };

let text1 = "";
for (let x in person1) {
  text1 += person1[x] + " " + " \n";
}

console.log(text1);
// for in loop in array
const numbers = [454, 423, 19, 168, 025];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + " ";
}
console.log(txt);
// array.forEach() in javascript
// eg 1
const numbers1 = [45, 4, 9, 16, 25];

let txt1 = "";
numbers1.forEach(myFunction);

function myFunction(value, index, array) // takes three parameter (value,index,array)
{
  txt1 += value + " ";
}
console.log(txt1);
// eg2
const numbers2 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers1.forEach(myFunction1);

function myFunction1(value, index, array) // takes three parameter (value,index,array)
{
  txt2 += value + " index is " + index + " \n";
}
console.log(txt2);
// eg3
const numbers3 = [45, 4, 9, 16, 25];

let txt3 = "";
numbers3.forEach(myFunction2);

function myFunction2(value, index, array) // takes three parameter (value,index,array)
{
  txt3 = "array is " + array;
}
console.log(txt3);
// for in eg
people = ["vishal", "sharma", "john", 45]
for (x in people) {
  text = people[x]
  console.log(text);
}
// for in eg 
people1 = {
  name: "suryakumar",
  sixes: 25,
  age: 33,
  batting: "Right-hand-batsman"
}
for (x in people1) {
  text = people1[x]
  console.log(text);
}
console.log("update the age to 35");
people1.age = 35
console.log(people1);
//eg 4
mystring = "vishal"
for (let x in mystring) {
  console.log(mystring[x]);
}
// using traditional for loop 
mystring1 = "vishal"
for (let i = 0; i < mystring.length; i++) {
  let text = mystring[i]
  console.log(text);
}
// for-of loop
const cars1 = ["BMW", "Volvo", "Mini"];

let text5 = "";
for (let x of cars1) {
  text5 += x + " ";
}
console.log(text5);
// eg 2
const cars2 = "vishal";

let text6 = "";
for (let x of cars2) {
  text6 += x + " ";
}
console.log(text6);
// if statement
function trueorFalse(wasittrue) {
  if (wasittrue) {
    return "Yes it is true"
  }
  else
    return "it is false"
}
console.log(trueorFalse())
// if statement
function myfunc(value) {
  if (value == 10) {
    console.log("Yes it is equal");
  }
  else
    console.log("no it is not equal");
}
myfunc(17)
// for in
arr = [1, 2, 3, 4]
for (let x in arr) {
  let myval = arr[x]
  console.log(myval);
}
// for of
const myarr1 = [2, 5, 6, 6, 56.7]
var myvalue1 = ""
myarr1.forEach(func)
function func(value, index, array) {
  myvalue1 += "1st value is " + value + " \n "
}
console.log(myvalue1);