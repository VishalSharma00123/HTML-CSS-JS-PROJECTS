let myul = document.querySelector('ul#my-list1');
console.log(myul);
console.log(myul.children);
console.log(myul.children[0]);
myul.children[0].style.color = 'brown'
// firstElementchild

// The firstElementChild property returns the first child element of the specified element.
// The firstElementChild property is read-only.

// The firstElementChild property returns the same as children[0].

// Till now we saw parent and child traversal now we will see sibling traversal

// previousElementsibling-in dom tree we learnt about parent-child-sibling relationship in this previous sibling of <ul> is <h1> and next sibling is null as there is not sibling available afte <ul> refer 12.html code 
const mystr = myul.previousElementSibling;
console.log(mystr);// <h1>...</h1>
// nextElementSibling 
console.log(myul.nextElementSibling);//null
console.log(document.getElementById('heading').nextElementSibling);//<ul>