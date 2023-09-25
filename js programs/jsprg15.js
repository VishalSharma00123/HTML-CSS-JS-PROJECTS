// strict mode in javascript
// "use strict"; Defines that JavaScript code should be executed in "strict mode".
// Declaring Strict Mode
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
// syntax is "use strict"; 
// what is Not Allowed in Strict Mode
//Using a variable, without declaring it, is not allowed:
function myfun()
{
"use strict";
let value=90//not declared so it throw an error
console.log(value);
}
myfun()
// Objects are variables too.so Using an object, without declaring it, is not allowed:
function myfunc1()
{
    "use strict";
    let object={ //
        name:"butler",
        age:34
    }
    return object
}
console.log(myfunc1());//object is not defined
// you cant delete a variable in while "use strict";
function myfunc2()
{
     x=10
    delete x //we cant delete x bcz it is not defined
}
//  
// const s = [5,7,2];
// function editInplace()
// {
//     "use strict";
//     s=[3,5,7]//when we try to modify the array like this we will get the error bcz  s is declared using const and we cant u reassign a value declared with const
//     return s;
// }
// console.log(editInplace());
// but we can mutate an array element declared with const in this way
const array=[3,5,7]
function mutate()
{
    "use strict";
    array[0]=4;
    array[1]=8;
    array[2]=10;
    return array;
}
console.log(mutate());//we will get the new array i.e [4,8,10] 


