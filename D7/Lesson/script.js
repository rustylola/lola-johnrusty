// Accessing Elements by ID
const heading = document.getElementById('heading');
console.log(heading);

// Accesing elements by class
const text = document.getElementsByClassName('text');
console.log(text);

// Accessing elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Accessing elements by query selector
const heading2 = document.querySelector('#heading');
console.log(heading2);

// Accessing elements by query selector all
const listItems = document.querySelectorAll('#list li');
console.log(listItems);

// Modifying element content using textContent
const firstParagraph = text[0];
firstParagraph.textContent = 'This is an updated paragraph';

// Modifying element attributes using setAttribute
const listItem = listItems[0];
listItem.setAttribute('class','highlight');

// Modifying element styles using style property
const button = document.querySelector('#btn');
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// Creating new elements dynamically
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph';
const container = document.querySelector('.container');
container.appendChild(newParagraph);

// Removing elements dynamically
const secondListItem = listItems[1];
secondListItem.remove();
