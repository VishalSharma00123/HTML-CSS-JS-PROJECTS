// we have used addEventListner() methods whose 1st paramenter is a Event and second parameter is a function which gets excetuted once we click on the button 
window.addEventListener('click', function () {
    console.log('window')
}, false);
// 3rd parameter is true or false and it ids optional
// true means the element present at the root or top most element willl executed first
// false means the element present at the bottom or innerelement will be executed first 
document.addEventListener('click', function () {
    console.log('document');
}, false)
document.querySelector('.div2').addEventListener('click', function () {
    console.log('div2')
}, false);
document.querySelector('.div1').addEventListener('click', function (event) {
    console.log('div1')
}, false)
// by using target we can grab the entire element 
// e.target=<button>Click</button>
// preventDefault() method prevents a link from opening
document.querySelector('.button').addEventListener('click', function (e) {
    console.log(e.target.innerHTML = 'clicked');
    e.preventDefault();
}, false);