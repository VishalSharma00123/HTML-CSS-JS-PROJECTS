// eg1 selevtiong id of the h1 and styling it
let myval = document.getElementById("main");
console.log(myval);
myval.style.color = "blue"
// eg2
let myval2 = document.getElementsByTagName("li");
console.log(myval2);
for (var i = 0; i < myval2.length; i++) {
    myval2[i].style.cssText = "font-size:3rem;background:red"
}
// eg3 accessing div.container and styling the background properties using for loop
// note if your accessing more than one element having tagname,id or class then use for loop because the elements are stored in the form of arrays
// so to access the weneed for loop in below example we access two div.container and it is stored in the variable myval3 int he form of array
let myval3 = document.querySelectorAll("div.container")
console.log(myval3);
for (let i = 0; i < myval3.length; i++) {
    myval3[i].style.background = "#c9c936";
}
// eg accessing the h1#main
// by using cssText we can add multiple styling to element
let myvalue1 = document.querySelectorAll("h1#main");
console.log(myvalue1);
for (let i = 0; i < myvalue1.length; i++) {
    myvalue1[i].style.cssText = 'color: blue; font-size: 8rem; color: orangered;'
}
