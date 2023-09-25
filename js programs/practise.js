// var is applicable to scope 
// let a =50
// function print()
// {
//     var square =a*a
//     console.log(square)
//     console.log(a);
// }
// print()
// // let is applicable to block
// let a1 =50
// function print()
// {
//     let square =a1*a1
//     console.log(a1);
// }
// console.log(square)
// print()
// // const is applicable to block
// const a2 =50
// function print()
// {
//     const square =a2*a2
//     console.log(a2);
//     console.log(square)
// }
// print()
// function print()
// {
//     var number=50
//     var number=30
//     var square=number*number
//     console.log(square);
// }
// print()
// console.log(number);
// function print()
// {
//     let number=50
//     number=30
//     console.log(number);
//     if(number>10)
//     {
//         let square=number*number
//     }
//     console.log(square)
// }
// print()
// function print()
// {
//     var number= 7
//     number= 6
//     console.log(number);
//     if(number>10)
//     {
//         const square=number*number
//     }
//     console.log(square)
// }
// print()
function print()
{
    var number= 7
    number= 6
    console.log(number);
    if(number>10)
    {
        const square=number*number
        console.log(square)
    }
}
print()
function myfunc1()
{//local scope
    var number=67
    var b=number*number+78
    console.log(b);
    console.log(number);//45
}
myfunc1()
