document.addEventListener('DOMContentLoaded', function() {

//select form, button, list
const form = document.querySelector('#todoForm');
const list = document.querySelector('#list')

//localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = savedTodos[i].task;
    newLi.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newLi.isCompleted) {
        newLi.style.textDecoration = 'line-through';
    }
    list.appendChild(newLi);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    //create new TODO
    let newLi = document.createElement('li');
    newLi.innerHTML = document.querySelector('#todo-input').value;
    newLi.isCompleted = false;
    
    //delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';


    
    //append order here
    list.appendChild(newLi);
    newLi.appendChild(deleteBtn);
    form.reset();

    //localStorage
    savedTodos.push({ task: newLi.innerHTML, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
})
//click events for strikethrough/button
// list.addEventListener('click', function(e) {
//     let targetTagName = e.target.tagName.toLowerCase();

//     if (targetTagName === 'li') {
//         //toggle isCompleted
//         e.target.isCompleted = !e.target.isCompleted;
//         if (e.target.isCompleted) {
//         e.target.style.textDecoration = "line-through";
//         } else {
//             e.target.style.textDecoration = "none";
//         };
//     };
//     if (targetTagName === 'button') {
//         e.target.parentElement.remove();
        
//     };
//new code block
list.addEventListener('click', function(e) {
    const targetTagName = e.target.tagName.toLowerCase();

    if (targetTagName === 'li') {
        // Toggle isCompleted
        e.target.isCompleted = !e.target.isCompleted;
        if (e.target.isCompleted) {
            e.target.style.textDecoration = 'line-through';
        } else {
            e.target.style.textDecoration = 'none';
        }

        // Find the corresponding task in savedTodos and update it
        const taskIndex = savedTodos.findIndex(todo => todo.task === e.target.firstChild.textContent);
        if (taskIndex > -1) {
            savedTodos[taskIndex].isCompleted = e.target.isCompleted;
            localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
    }

    if (targetTagName === 'button') {
        // Remove the <li> (todo item)
        const taskToRemove = e.target.parentElement.firstChild.textContent;
        e.target.parentElement.remove();

        // Update savedTodos and remove the corresponding task
        const taskIndex = savedTodos.findIndex(todo => todo.task === taskToRemove);
        if (taskIndex > -1) {
            savedTodos.splice(taskIndex, 1);
            localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
    }
});

});
