//== operator
function myfunc(value)
{
    if(value=='10')
    return "both data type and values are matching"
    else
    return "value or data type is not matching"
}
    console.log(myfunc(10));
    // eg2
    function matchvalue(a,b)
    {
        if(a==b)
        return "matched"
        else
        return "not matched"
    }
        console.log(matchvalue(10,'10'));
// === operator
function myfunc1(value)
{
    if(value==='10')
    return "both data type and values are matching"
    else
    return "value or data type is not matching"
}
    console.log(myfunc1(10));
    // eg2
    function matchvalue1(a,b)
    {
        if(a===b)
        return "matched"
        else
        return "not matched"
    }
        console.log(matchvalue1(10,'10'));
        // not equality opearator(!=)
        function matchvalue(a,b)
        {
            if(a!=b)
            return "yes not equal"
            else
            return "no it is equal"
        }
            console.log(matchvalue(8,'10'));
//(!==) srict not equality operator
function matchvalue(a,b)
{
    if(a!==b)
    return "yes not equal"
    else
    return "no it is equal"
}
    console.log(matchvalue(8,"8"));
    // example
    function myfunction(value)
    {
        if(value<5)
        return "tiny"
        else if(value<10)
        return "small"
        else if(value<15)
        return "Medium"
        else if(value<20)
        return "Large"
        else
        return "huge"
    }
        console.log(myfunction(13));
// cards count
var count=0
function cc(cards)
{
    switch(cards)
    {
        // if i insert lower cards 1,2,3,4 then my count increases
        case 1:
        case 2:
        case 3:
        case 4:
            count++;
            break;
        // for middle cards then count will be constant(will not change)
        // for higher cards the count decreases
        case 10:
        case "K":
        case "q":
        case "A":
            count--;
            break;
    }     
    return count
}
var holdback="hold"
if(count>0)
{
    holdback="bet"
}
    
    cc(2);// count becomes 1 from 0
    cc("k");// count becomes 0 from 1
    cc("k");//count becomes -1 from 0
    cc(10);//count becomes 0 from -1
    cc("A");//count becomes -1 from 0
    cc("q");//count becomes -2 from -1
    console.log(cc("K"));// finally count value will be printed which is -3
// eg 3
const obj={
    name2:"vishal",
    class:"6th sem",
    section:7
}
let target=obj["section"]
console.log(target);
// eg4
var obj1=
{
    15:"vishal",
    16:"john",
    17:"big show"
}
var playernumber =17
var player=obj1[playernumber];
console.log(player);
// eg 5
var testobj=
{
    "an entree":"hamburger",
    "my side":"veggies",
    "the drink":"Water"
}
var myvalue=testobj["an entree"]
console.log(myvalue);
console.log(testobj);
// removing a object property using delete keyword
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person.age;//age is removed

  console.log(person);
  console.log(person.age);//undefined yu cannot accces age key or property becuse it is already been deleted using delete keyword
// example for object
function myfun(val)
{
var result=""

var lookup=
{
    "name":"vishal sharma",
    "class":"6th sem",
    "age":20,
    "subject1":"DSA",
    "subject2":"maths"
}
var result=lookup["class"]
console.log(result);
}
myfun("subject1")
// eg for object
const myarray=[
    {
        "hi":"hello",
        "how are you":"i am fine",
        "how was the day":"it was fine",
        "formats":["odi","t20","test"]
    },
    {
        "player":"glenn maxwell",
        "strike rate":183.45,
        "sixes":56,
        "awards":["man of the match","perfect-catch","best-striker"]
    }
] 


