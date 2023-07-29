const todos = [{
    text: 'Morning sex',
    completed: true
},{
    text: '2 hours of udemy',
    completed: false
},{
    text: '2 hours of edX',
    completed: false
},{
    text: '2 hours of nodeschool',
    completed: true
},{
    text: 'More sex',
    completed: true
}];

const removeTodo = (todos,todosText)=>{
    const index = todos.findIndex((todo,index)=>{
        return todo.text.toLowerCase()===todosText.toLowerCase();
    })
    if(index > -1) todos.splice(index,1); // I missed this one. Without the 'if' it simply deletes the last one
}
const getThingsToDo = (todos)=>{
    return todos.filter(todo=>!todo.completed)
}
const sortTodos = (todos)=>{
    todos.sort((a,b)=>{
        if(a.completed<b.completed){
            return -1;
        }else if(b.completed<a.completed){
            return 1;
        }else{
            return 0;
        }
    })
}

// console.log(todos);
// removeTodo(todos,'2 Hours Of something else')
// console.log(todos);

// console.log(getThingsToDo(todos));

sortTodos(todos);
console.log(todos);


