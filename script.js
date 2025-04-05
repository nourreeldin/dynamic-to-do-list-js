document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

    function addTask(taskText, save = true) {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add('remove-btn');

        btn.onclick = () => {
            newTask.remove();
            removeTaskFromStorage(taskText);
        };

        newTask.appendChild(btn);
        taskList.appendChild(newTask);

        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    const handleAddClick = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Invalid Input!");
        } else {
            addTask(taskText);
            taskInput.value = "";
        }
    };

    addButton.addEventListener("click", handleAddClick);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleAddClick();
        }
    });

    loadTasks();
});