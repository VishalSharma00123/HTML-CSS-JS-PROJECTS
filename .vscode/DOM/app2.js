// Creating Elements
// here i accessed the <ul> tags using the id="my-list"
const ul = document.querySelector("ul#my-list");
console.log(ul);
// now i will create a new <li> element using createElement() method
// by using createElement() we will create <li> element 
// we will paas the element name inside the ('li') to create
// let see an example
const li = document.createElement("li");
// by using append method we will the <li> element into the <ul>
ul.append(li);
// now we have appended the li inside the <ul>
// now wel will id and its value for the <li> elements usig setAttribute() Elements
li.innerText = "X-man"
li.setAttribute('id', 'heading');
// so if we to know get the value of attribute we can do that also
// so the in console it will display the main which is the value the id
const title2 = document.getElementById('main');
console.log(title2.getAttribute('id'));
// we can remove the attribute by using removeAt method
// we havt to paas the attribute which we want to remove
// above we removed the id of the created li element
// till now we saw how to add and remove atttibute using id
// now we will this with classes also by using add() method 
li.removeAttribute('id')
//  pass the value of the class
li.classList.add('list-items');
// we can also remove it
li.classList.remove('list-items');
// we can aslo chekc whether that element had that specific class or not
console.log(li.classList.contains('list-items'));
// it returns false because li element doesnt contain any class value named list-items
// if want to completely remove the created element then use .remove() method
li.remove()