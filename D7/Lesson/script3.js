/*
Handling events involves responding to user interactions, such 
as clicks, submissions, and keypresses, on web pages. By 
registering event listeners, you can execute specific actions 
or functions when an event occurs. 

Additionally, understanding the event object and its 
properties allows you to access information related to the 
event. Event delegation is a technique that optimizes event 
handling by assigning a single event listener to a parent 
element instead of attaching listeners to multiple child elements.
*/ 

// Registering event listeners to respond to user interactions
const button = document.querySelector('#btn');
button.addEventListener('click',handleClick);

function handleClick(event){
    console.log('The button works!');
    console.log('Event Object: ', event);
    console.log('Event type: ', event.type);
    console.log('Target element: ', event.target);
}

// Register a submit event listener on a form
const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    
    console.log(`Submitted name: ${name}`);

    const inputText = document.getElementById('inputText');
    inputText.innerHTML = name;

    nameInput.value = '';
}