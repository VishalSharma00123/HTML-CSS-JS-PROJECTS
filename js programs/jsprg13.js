// Nested objects
var myobject=
{
    "inside":
    {
        "glove box":"maps",
        "passanger seat":"crumbs",
    },
    "Outside":{
        "trunk":"jack"
    }
}
let mystr=myobject["inside"]
console.log(mystr);// prints the value of the inside property or key and here value itself is a object
mystr=myobject.inside["glove box"]
console.log(mystr);// prints the value of the "glove box" property or key which is inside the object
mystr=myobject.Outside["trunk"]
console.log(mystr);
// Nested Arrays
var college=[
{
    name:"sambhram institue of technology",
    department:[ "ISE","CSE","EEE","EC"]
},
   { "student name":"vishal sharma",
     subjects:["DSA","WT","CN","DC"]
}
]
let myvalue=college[0]//it will initilize oth index if the array and here 1st object is present at 0th index
console.log(myvalue);
 myvalue=college[0].department[0];//it will initilize oth index and insied that it will access oth itme which is ISE
console.log(myvalue);
 myvalue=college[0].department[2];
console.log(myvalue);
// program for updating and deleting records
var collection={
    "2448":{
        "album":"slippery when wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            1999,
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Rober Palmer",
        "tracks":[]
    },
    "5439":
    {
        "album":"ABBA"
    }
};
function updateRecords(id,prop,value)
{
    if(value==="")//if the entered value is empty then delete the id along with its proprties
    {
        delete collection[id][prop];//deleting
    }
    else if(prop==="tracks")//if entered property is tracks 
    {
        collection[id][prop]=collection[id][prop]||[];//check if the value of the key or property tracks is empty or not if  it is a not enpty then simply push  it
        collection[id][prop].push(value) ;
    }
    else{
        collection[id][prop]=value
    }
    return collection
}
var myvalue1=updateRecords(5439,"artist","JOhn")//updating the object
  myvalue1=updateRecords(5439,"album","")//deleting the object the object
  myvalue1=updateRecords(2468,"tracks","peterson")//if the prop is tracks
console.log(myvalue1);
// while loop
const myArray=[]
var i=0;
while(i<5)
{
    myArray.push(i)
    i++
}
console.log(myArray);
// for loop to print even numbers
var array1=[];
for(var i=0 ;i<10;i+=2)
{
    array1.push(i)
}
console.log(array1);
// for loop to print odd numbers
 var array2=[];
for(var i=1 ;i<10;i+=2)
{
    array2.push(i)
}
console.log(array2);
// count bakcward with a for loop
var myarr=[]
for(var i=10;i>0;i--)
{
    myarr.push(i)
}
console.log(myarr);
// itering through an array
var ourArr=[9,19,17,18]
var total=0
for(var i=0;i<ourArr.length;i++)
{
    total+=ourArr[i];
}
console.log(total);
// accessing a multidimensional array using for loop
var Marray=[[1,2],[2,3,4],[4,5,3,2]]
var result=0
for(var i=0;i<Marray.length;i++)
{
    for(var  j=0;j<Marray[i].length;j++)
    {
        result+=Marray[i][j]
    }
}
console.log(result);
// do-while 
let text = "";
let k = 0;
do {
  text += k + " ";
  k++;
}
while (k < 5);
console.log(text);
// while loop example
var myarrr =[]
var i=10;
while(i<5)
{
    myarrr.push(i)
}
console.log(myarrr);
// example for do while
var myarrr1 = []
var i=10;
do {
    console.log(i);
    i++;
}
while(i<5);
