function renderTodos() {
    const todoList = document.getElementById("todoList");
    const emptyState = document.getElementById("emptyState");
    const emptyIcon = document.getElementById("emptyIcon");
    const emptyTitle = document.getElementById("emptyTitle");
    const emptyMessage = document.getElementById("emptyMessage");

    todoList.innerHTML = "";

    const filteredTodos = todos.filter(todo => {
        const matchesSearch =
            todo.text.toLowerCase().includes(searchQuery);
        let matchesFilter = true;
        if (currentFilter === "active") {
            matchesFilter = !todo.completed;
        }

        if (currentFilter === "completed") {
            matchesFilter = todo.completed;
        }

        return matchesSearch && matchesFilter;
    });

    if (todos.length === 0) {
        emptyIcon.className = "bi bi-check2-square";
        emptyTitle.textContent = "No tasks yet";
        emptyMessage.textContent = "Add a new task to get started.";

        emptyState.style.display = "block";
        return;
    }

    if (filteredTodos.length === 0) {
        emptyIcon.className = "bi bi-search";
        emptyTitle.textContent = "No results found";
        emptyMessage.textContent = "Try another search or filter.";

        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";


    filteredTodos.forEach(todo => {
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
