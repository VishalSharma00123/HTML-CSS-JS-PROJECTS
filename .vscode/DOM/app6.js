// Event Listners (DOM)
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

// To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:
// 1. onclick Event(Event occurs when a use clicks on it)
// The addEventListener() method
// The addEventListener() method attaches an event handler to the specified element.

// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

// You can add many event handlers to one element.
// element.addEventListener(event, function, useCapture);
// eg
const buttontwo = document.querySelector('.btn-2');
buttontwo.addEventListener('click', myfunction);
function myfunction() {
    alert('i also love javascript')
}
// The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:
const newbg = document.querySelector('.box-3')
console.log(newbg);
function background() {
    newbg.style.background = 'red';
}
newbg.addEventListener("mouseover", background)