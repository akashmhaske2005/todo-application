function renderTodos() {
    const todoList = document.getElementById("todoList");
    const emptyState = document.getElementById("emptyState");

    todoList.innerHTML = "";

    if (todos.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
           <div class="todo-left">
                <input 
                    type="checkbox"
                    class="todo-check"
                    data-id="${todo.id}"
                    ${todo.completed ? "checked" : ""}>
        
                <span class="${todo.completed ? "completed" : ""}">
                   ${todo.text}
                </span>
           </div>
        
           <div class="todo-actions">

                <button
                    class="edit-btn"
                    data-id="${todo.id}">

                    <i class="bi bi-pencil"></i>

                </button>

                <button
                    class="delete-btn"
                    data-id="${todo.id}">

                    <i class="bi bi-trash"></i>

                </button>

            </div>
           `;

        todoList.appendChild(li);
    });

    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    totalTasks.textContent = `${todos.length} Task${todos.length !== 1 ? "s" : ""}`;

    const completed = todos.filter(todo => todo.completed).length;

    completedTasks.textContent = `${completed} Completed`;
}
