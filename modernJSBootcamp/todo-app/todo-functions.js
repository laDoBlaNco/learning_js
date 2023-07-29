'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => { // => function
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
        // if (todosJSON !== null) {
        //     return JSON.parse(todosJSON);
        // } else {
        //     return [];
        // }
    } catch (e) {
        return []
    }
}
// Save todos to localStorage
const saveTodos = (todos) => { // => function
    localStorage.setItem('todos', JSON.stringify(todos));
}
// Render application todos based on filters
const renderTodos = (todos, filters) => { // => function
    const filteredTodos = todos.filter((todo) => { // => function
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch
    });

    const incomplete = filteredTodos.filter(todo => !todo.completed); // => function (short syntax)
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDom(incomplete));
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDom(todo));
    })
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id); // => function (short syntax)
    console.log(todoIndex);
    if (todoIndex > -1) todos.splice(todoIndex, 1);
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => { // => function
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed;
    }
}

// Get the DOM elements for an individual note
const generateTodoDom = (todo) => { // => function
    // Create & configure div
    const div = document.createElement('div');

    // Create & configure checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', (e) => { // => function
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // Create & configure text
    const text = document.createElement('span');
    text.textContent = todo.text;

    // Create & configure button
    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', (e) => { // => function
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // Attach all elements and return div
    div.appendChild(checkbox);
    div.appendChild(text);
    div.appendChild(button);
    return div;
}

// Get the DOM elements for list summary
const generateSummaryDom = (todos) => { // => function
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${todos.length} todos left`
    return todosLeft;
}