document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Invalid Input!");
        } else {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            const btn = document.createElement("button"); 
            btn.textContent = "Remove";
            btn.className = 'remove-btn';
            btn.onclick = () => {
                newTask.remove();
            };
            newTask.appendChild(btn);
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    };
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});