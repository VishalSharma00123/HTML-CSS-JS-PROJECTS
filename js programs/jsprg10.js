
// javascript hoisting
x = 5; // Assign 5 to x
console.log(x);
var x
// eg
function myfunc(value1, value2) {
    return value1 * value2
}
let myvalue = myfunc(23, 67)
console.log(myvalue);
// without hoisting
let a = 90//global variable
function myfunc1() {//local scope
    var a = 67
    var b = a * a + 78
    console.log(a);//67 
    console.log(b);//4567

}
myfunc1()
console.log(a);//90
// console.log(b);//b is not defined bcz it is declared with var inside the fucntion whch is the local scope varible
// but by using the concept of hoisting we can we can display or access the local varible from global scope
// eg
let a1 = 90//global variable
function myfunc1() {//local scope
    var a1 = 67
    b1 = a * a + 78//hioisting(means without any declaration of keyword)
    console.log(a1);//67 
    console.log(b1);//4567

}
myfunc1()
console.log(a1);//90
console.log(b1)
// eg 2 for hoisting
function func2() {
    a3 = 9100 //hoisting
    b3 = 78 //hoisting
    c3 = "peterson" //hiosting
    console.log(a3);
}
func2()//call or invokes the function first
console.log(a3);//9100
console.log(b3);//78
console.log(c3);//peterson
//without hoistin
function func2() {
    let a4 = 9100 //
    let b4 = 78 //
    let c4 = "peterson" //
    console.log(a4);
}
func2()//call or invokes the function first
console.log(a4);//
console.log(b4);//
console.log(c4);//