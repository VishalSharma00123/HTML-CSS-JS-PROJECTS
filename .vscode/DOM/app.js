// different methods of selecitong an elements
// 1. getElementById methos-it selects the id of the element and later we can  manipulate those elements
const title = document.getElementById('main')
console.log(title);
title.style.color = "red";
// 2. getElemnetByClassName()
// it selects the elements having classes
const listitem = document.getElementsByClassName("list-items")
console.log(listitem);
// 3. getElementByTagName()
// it will selects only tags like p,span,div etc
let listitems = document.getElementsByTagName("li")
console.log(listitems);
// querySelector
// it will select only one spcecified tags tag like p,span,div etc
let value = document.querySelector("li")
console.log(value);
// eg2 
value = document.querySelector("div")
console.log(value);
// querySelectorAll()
// it selects all specifies tag like p,span,div etc
// eg1
let myvalue = document.querySelectorAll("li.list-items")
console.log(myvalue);
// eg2
let mystr = document.querySelectorAll("div.container")
console.log(mystr);
