let todos = [];

function createTodo(text) {
    return {
        id: Date.now(),
        text: text,
        completed: false
    };
}

function addTodo(text) {
    const todo = createTodo(text);

    todos.push(todo);
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }

        return todo;
    });
}

function editTodo(id, newText) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.text = newText;
        }

        return todo;
    });
}