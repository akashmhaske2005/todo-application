let searchQuery = "";
let currentFilter = "all";

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompleted");

function handleAddTodo() {
    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    addTodo(text);
    saveTodos();
    renderTodos();
    todoInput.value = "";
    todoInput.focus();
}

addBtn.addEventListener("click", handleAddTodo);

todoInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleAddTodo();
    }
});

document.getElementById("todoList").addEventListener("click", function (event) {
    const deleteButton = event.target.closest(".delete-btn");

    if(!deleteButton) {
        return;
    }

    const id = Number(deleteButton.dataset.id);

    deleteTodo(id);
    saveTodos();
    renderTodos();
});

document.getElementById("todoList").addEventListener("change", function (event) {
    const checkbox = event.target.closest(".todo-check");

    if (!checkbox) {
        return;
    }

    const id = Number(checkbox.dataset.id);

    toggleTodo(id);
    saveTodos();
    renderTodos();
});

document.getElementById("todoList").addEventListener("click", function (event) {
    const editButton = event.target.closest(".edit-btn");

    if (!editButton) {
        return;
    }

    const id = Number(editButton.dataset.id);
    const todo = todos.find(todo => todo.id === id);
    const newText = prompt("Edit task:", todo.text);

    if (newText === null || newText.trim() === "") {
        return;
    }

    editTodo(id, newText.trim());
    saveTodos();
    renderTodos();
});

searchInput.addEventListener("input", function () {
    searchQuery = searchInput.value.toLowerCase();

    renderTodos();
});

filterButtons.forEach(button => {

    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        renderTodos();
    });

});

clearCompletedBtn.addEventListener("click", function () {
    todos = todos.filter(todo => !todo.completed);

    saveTodos();
    renderTodos();
});

loadTodos();
renderTodos();