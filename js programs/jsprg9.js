// 
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars)
// Arrays in  js
let array = ["hello", 34, "hey everyone", 5.7]
console.log(array)
// eg2 accessing each array values
let array1 = ["hello", 34, "hey everyone", 5.7]
console.log(array1[0])
console.log(array1[1])
console.log(array1[2])
console.log(array1[3])
// modifing array values
let array2
array2 = ["hello", 34, "hey everyone", 5.7]
array2[0] = "world"
array2[1] = 45
array2[2] = "wonderfull"
array2[3] = 34.6
console.log(array2);
// Nested array or multidimensional array (array inside the array)
let Nested_array = [["james", 78], ["peterson", 78.5], [true, "ronaldo"]]
console.log(Nested_array);
// eg2 Nested array
let Nested_array1 = [["james", 78], ["peterson", 78.5, 90], [true, "ronaldo"]]
console.log(Nested_array1[0][0]);
console.log(Nested_array1[0][1]);
console.log(Nested_array1[1][0]);
console.log(Nested_array1[1][1]);
console.log(Nested_array1[1][2]);
console.log(Nested_array1[2][0]);
console.log(Nested_array1[2][1]);
console.log(Nested_array1[2][2]);
// modifying 2d array
let Nested_array2 = [["james", 78], ["peterson", 78.5, 90], [true, "ronaldo"]]
Nested_array2[0][0] = "holder"
Nested_array2[0][1] = 88
Nested_array2[2][1] = "messi"
Nested_array2[1][2] = 1000
console.log(Nested_array2)
// converting array into string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let mystr = fruits.toString()
console.log(mystr);
// .length is gives length of the array
// eg
var myarr = [12, 23, 45, 12, 34, 12, 3, 4]
var mystr1 = myarr.length
console.log(mystr1);
// .sort() is used to sort array
var myarr1 = [999, 967, 9, 8, 7, 6, 5, 4]
var myarr2 = ["kohli", "Dhoni", "Rohit", "Dhawan"]
var mystr2 = myarr1.sort()
var mystr3 = myarr2.sort()
console.log(mystr2);
console.log(mystr3);
// Push() is used to add element at the end of the array
let arr = [["john", 67], ["furious", 34]]
arr.push(["Andrew", 90])
console.log(arr);
// eg2
let arr1 = ["john", "furious", 45, 34]
arr1.push("Andrew", 90)
console.log(arr1);
// pop() removes last element of the array
// here 34 is the last element and it will get removed
let arr2 = ["john", "furious", 45, 34]
arr2.pop()
console.log(arr2);
// eg3 pop() ["furious",34] is the last item or elemnet and get removed
let arr3 = [["john", 67], ["furious", 34]]
mystr = arr3.pop()
console.log(arr3);
// shift and unshist
// shift(): it removes first element fromt the array
// unshift(specified item): it add specified item in to the array
// eg shift
let arr4 = [["john", 67], ["furious", 34]]
mystr = arr4.shift()
console.log(arr4);
// eg unshift
let arr5 = [["john", 67], ["furious", 34]]
mystr = arr5.unshift(89, ["vishal", 90])
console.log(arr5);



