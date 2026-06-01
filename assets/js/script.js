const todoInput = document.getElementById('inputbox-todo');
const listContainer = document.getElementById('list-container');

function addTodo() {
    if (todoInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }
    else {
        let li = document.createElement('li');
        li.innerText = todoInput.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    todoInput.value = '';
    saveData();
}
