// Event Delegation
// football
// document.querySelector('#Football').addEventListener
//     ('click', function (e) {
//         console.log('football is clicked');
//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgreen'
//         }
//     })
// // basketball
// document.querySelector('#Basketball').addEventListener
//     ('click', function (e) {
//         console.log('basketball is clicked');
//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgreen'
//         }
//     })
// // boxing
// document.querySelector('#Boxing').addEventListener
//     ('click', function (e) {
//         console.log('boxing is clicked');
//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgreen'
//         }
//     })
// // tennis
// document.querySelector('#Tennis').addEventListener
//     ('click', function (e) {
//         console.log('tennis is clicked');
//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgreen'
//         }
//     })
// // golf
// document.querySelector('#Golf').addEventListener
//     ('click', function (e) {
//         console.log('golf is clicked');
//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = 'lightgreen'
//         }
//     })
// // sports
// document.querySelector('#sports').addEventListener
//     ('click', function (e) {
//         const target = e.target;
//         if (target.matches('ul')) {
//             target.style.backgroundColor = 'red'
//         }
//     })
// the above code can be fully optimized using Event Delegation method   and the result will be same
// sports
document.querySelector('#sports').addEventListener('click', function (e) {
    console.log(e.target);//it eill display the element on which we will click if we click on the <li> element then it will print <li>  in the console if we click on  the <ul> then it will print or acces the <ul> and inside that element it return value of that id
    console.log(e.target.getAttribute('id') + ' is clicked');
    const mytarget = e.target
    if (mytarget.matches('ul')) {
        mytarget.style.background = 'red'
    }
    else if (mytarget.matches('li')) {
        mytarget.style.background = 'lightgreen'
    }
});
const sports1 = document.querySelector('#sports');
const newli = document.createElement('li');
newli.setAttribute('id', 'Rugby')
newli.innerHTML = 'rugby'
sports1.append(newli);