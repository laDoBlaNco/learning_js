'use strict'

const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

// Event Listeners
document.querySelector('#todo-search').addEventListener('input', (e) => { // => function
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})
document.querySelector('#create-todos').addEventListener('submit', (e) => { // => function
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
})
document.querySelector('#hide-complete').addEventListener('change', (e) => { // => function
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})