// Accessing parent, child, and sibling elements using DOM traversal methods
// Access the parent element of a specific element
const container = document.getElementById('container');
console.log(container.parentNode); // output: <body> ... </body> 

// Access the child elements of a pacific element
const paragraphs = container.children; // output: HTMLCollection(4) [h1.title, p, p, div.content]
console.log(paragraphs);

// Access the first child element
const firstParagraph = container.firstElementChild; // output : <h1>DOM Traversal Example</h1>
console.log(firstParagraph);

// Access the next sibling element
const secondParagraph = firstParagraph.nextElementSibling;
console.log(secondParagraph); // output : <p>This is the first paragraph.</p>

// Navigating the DOM tree using properties like parentNode, children, and nextSibling

// Access the parent element of a specific element using parentNode property
console.log(secondParagraph.parentNode); // output : <div id="container">...</div>

// Access the child elements of a specific element using children property
const contentDiv = document.querySelector('.content');
const nestedParagraph = contentDiv.children[0];
console.log(nestedParagraph); // Output : <p>...</p>

// Access the previous sibling element using previousSibling property
console.log(nestedParagraph.previousSibling); // Output: #text (line break)

// Access the next sibling element using nextSibling property
console.log(nestedParagraph.nextSibling); // Output: null