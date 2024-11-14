let taskName;
let list;
let insertNode;
let button = document.getElementById('form');

button.addEventListener('submit', addTask);

function addTask(event){
    event.preventDefault();
    list = document.getElementById('task-list');
    insertNode = document.createElement('div');
    taskName = document.getElementById('task').value;
    insertNode.innerHTML = `
            <span class="task-name">${taskName}</span>
            <button id="task-id" onclick="removeTask(this)">Delete</button>
        `;
    list.appendChild(insertNode);
    border();
}

function removeTask(toggle){
    toggle.parentNode.remove();
    border();
}

function border(){
    const element = document.querySelector('#task-list').children;
    let totalTask = element.length - 1;
    while(totalTask >= 0){
        console.log(totalTask);
        if(totalTask != 0) element[totalTask].classList.add("bt-2-grey");
        else element[totalTask].classList.remove("bt-2-grey");
        totalTask--;
    }
    
}