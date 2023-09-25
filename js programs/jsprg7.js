//all primitive data types  are immutable
// eg possible scenario to chnage the value
let my_str = "Hello World"
my_str = "John"
console.log(my_str)
//immpossible scenario where we cant change the value of primitive data type
let mystr = "Hello world"
mystr[9] = "d"
console.log(mystr[9])
// Acessing values in a string
let firstname = "adc"
let lastLetteroffirstname = firstname[firstname.length - 1]//first index from the last
let secondindex = firstname[1] // second index
let firstindex = firstname[0] // index start from 0
console.log(lastLetteroffirstname);
console.log(secondindex);
console.log(firstindex);
// eg
var myname = "vishal sharma"
var str = myname[myname.length - 3]//13-3=9 i.e myname[9]=r
console.log(str);
// **********************
const a = typeof "vishal sharma"
console.log(a);

const b = 100.0 >> 3//right shift
console.log(b);
const c = 100.0 << 3//left shift
console.log(c);