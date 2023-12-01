// first i have to get the elem data form 

let newTask    = document.querySelector('#new-task');
let todoUL     = document.querySelector('#items');
let completeUL = document.querySelector('.complete-list ul');
let form       = document.querySelector('.new-task-container');

// function to create task

let createTask = function(task){

    // make the list, label, inputChackbox
    let listItem   = document.createElement('li');
    let listLabel  = document.createElement('label');
    let listInput  = document.createElement('input');

    // assign the value of label and checkbox
    listLabel.innerText = task;
    listInput.type   = 'checkbox';

    // insert the new task at the end 
    listItem.appendChild(listInput);
    listItem.appendChild(listLabel);
    

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let insertValue = createTask(newTask.value);
    todoUL.appendChild(insertValue);
    newTask.value  = ""; // input set blank after add the task 

    // bind the new list item to the incomplete list
    bindIncompleteTask(insertValue, completeTask); // (onchange) change the task incomplete to complete

}

let completeTask = function(){

    let listItem = this.parentNode; // get the parent element 

    // create the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    // remove the checkbox
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    // insert the task in the complete task
    completeUL.appendChild(listItem);

    // bind the complete task and remove from the complete task
    bindcompleteTaskDelete(listItem, deleteTask);
    

}

// delete the whole task
let deleteTask = function(){
    let listItem = this.parentNode; // get the parent element <li>..</li>
    console.log(listItem); 
    let ul = listItem.parentNode; // get the element <ul>..</ul>
    console.log(ul);
    ul.removeChild(listItem);
}

// task will change to complete task
let bindIncompleteTask = function(taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}


// task will remove from the complete task
let bindcompleteTaskDelete = function(taskItem, deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}



for(let i=0; i<todoUL.children.length; i++){
    bindIncompleteTask(todoUL.children[i], completeTask);
}

for(let i=0; i<completeUL.children.length; i++){
    bindcompleteTaskDelete(completeUL.children[i], deleteTask);
}


// call the function
form.addEventListener('submit', addTask);