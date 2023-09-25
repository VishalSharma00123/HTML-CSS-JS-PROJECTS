// we have already studied about the parent-child-sibling relationship
// now by using this relaitionship we can accese them by using some methods
// 1. by using parentNode and parentElement(it returns the parens of the specified element )
// eg
let ul1 = document.querySelector('ul#my-list1');
console.log(ul1);
console.log(ul1.parentElement);
console.log(ul1.parentNode);
// we can also find their grandparent aswell
console.log(ul1.parentElement.parentElement);
console.log(ul1.parentNode.parentNode);
// like this we can also find theri greatgrandfather element and many more
console.log(ul1.parentElement.parentElement.parentElement);
console.log(ul1.parentNode.parentNode.parentNode);
console.log(ul1.parentElement.parentElement.parentElement.parentElement);
// here we have  accessed whole html
console.log(ul1.parentNode.parentNode.parentNode.parentNode);
ul1.parentElement.style.background = 'pink'
ul1.parentElement.style.border = '3rem solid green'
ul1.parentElement.style.display = 'flex'
ul1.parentElement.style.justifyContent = 'center'
// parent element of the <ul> is <div> so it is returning div in console
// let see the difference between parentNode and parentElement using an example
const html = document.documentElement;
console.log(html);
console.log(html.parentNode);// #document
console.log(html.parentElement);//null[]

// in above example we can clearly see the example between the parentNode and parentElement ,first we accessed the html element and then when we try to retrive its parent using parentNode it returns #document in console because it is present inside the docuemnt and when we use the parentElement it returns null because it doesnt contain any parnet element 
// so using parentNode is better in terms of retrieving the parent
// Now we will se how we can traverse downwards(retrieving child) in the dom by
console.log(ul1.childNodes);
// in console it display all list elements bcz <li> is a child of <ul>
// list content will be stored in the array because we are accessing more than one element
// in console we can see that length of the arrya is 11 but li element is 5, this is because 1 length is for text node it takes the length of  indentation also(new line)
// firstchild(we cannot use firstchild for styling  bcz in this firstchild of ul is a text and text cant be styled using css ),so instead use childNode[indexes]
ul1.childNodes[7].style.cssText = 'color:blue;background:red;'
// we saw by using childNodes we can access the child of the ul but it has one disadvantage that it takes the length of textnode also but by using .children we cans solve this
console.log(ul1.children);
// array takes only spaces for <li> element
ul1.children[0].style.cssText = 'color:blue;background:yellow;border:3px solid green;'
ul1.children[1].style.cssText = 'color:orange;background:purple;border:5px solid red;'
ul1.children[2].style.cssText = 'color:purple;font-weight:6rem;background:pink;border:3px solid orange;'
ul1.children[3].style.cssText = 'color:green;font-size:4rem;background:white;border:3px solid green;'
