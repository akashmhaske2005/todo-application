function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}