var array=[
    {
        firstname:"Rohit",
        lastname:"Sharma",
        Phone:7645673489,
        likes:["sleeping","music","eating"]
    },
    {
        firstname:"virat",
        lastname:"kohli",
        phone:9876567898,
        likes:["influencer","cricket","fitness","cars"]
    },
    {
        firstname:"MS",
        lastname:"Dhoni",
        phone:9876576655,
        likes:["riding","wicketkeeing","batting","CSK"]
    },
    {
        firstname:"vin",
        lastname:"Diesel",
        phone:6785678765,
        likes:["movies","bikes"]
    }
];
function myfunc(name,prop)
{
    for(i=0;i<array.length;i++)
    {
        if(array[i].firstname===name)
        {
            return array[i][prop]|| "NO much property"
        }
    }
    return "No such contact"
}

var data = myfunc("Rohit","likes")
console.log(data);
// generating randon fractions
function randomfraction()
{
    return Math.random();//Mtah.random is used to print random numbers
}
console.log(randomfraction());
// The Math.floor() method rounds a number DOWN to the nearest integer.
// JavaScript Rounding Functions are
// The Math.abs() Method
// The Math.ceil() Method
// The Math.floor() Method
// The Math.round() Method
// The Math.fround() Method
// The Math.trunc() Method
// eg for generating whole number by passing Math.random function inside the Math.floor()
function randomWholeNum()
{
    return Math.floor(Math.random()*20);
}
console.log(randomWholeNum());
// Random fractions and whole number
function OurRandomRange(OurMin,OurMax)
{
    return Math.floor(Math.random()*(OurMax-OurMin+1))+OurMin;
}
var mystr=OurRandomRange(1,9);
console.log(mystr);
// parseInt functionin javascript
// eg 
function convertInteger(str)
{
    return parseInt(str)
}
let mystr1=convertInteger("50");
console.log(mystr1);//50
 mystr1=convertInteger("hi 50");
console.log(mystr1);//NaN(non-writable property.)
 mystr1=convertInteger("10.33");//10
console.log(mystr1);//10
 mystr1=convertInteger("89 33 78");//10
console.log(mystr1);//10
 mystr1=convertInteger("12 years");//10
console.log(mystr1);//12
// checking whether two values are strictly equal or not using ternary operator
function checkEqual(a,b)
{
    return a===b?true:false;
}
var myvalue=checkEqual(2,2);
console.log(myvalue);
// checking whether two values are strictly equal or not without using ternary operator and this is the effective method
function checkEqual1(a,b)
{
    return a===b
}
var myvalue1=checkEqual1(2,1);
console.log(myvalue1);
// eg for ternary operator
let result = (10 > 0) ? true : false;
console.log(result);
let message = (20 > 15) ? "Yes" : "No";
console.log(message);
// Syntax: (for ternary operator)
// condition ? value if true : value if false
// lets take an example to check whether a number is positive or negative
// without using ternary operator
function checkSign(num)
{
    if(num>=0)
    {
        return "positive";
    }
    else{
        return "negative";
    }
}
let result1=checkSign(-10);
console.log(result1);//negative
// same program by using ternary operator
function checkSign(num)
{
 return num>=0?"positive":"negative";
}
let result2=checkSign(0);
console.log(result2);
