// Select DOM elements
const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Initialize task array
let tasks = ['Task 1', 'Task 2', 'Task 3'];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the current list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Add event listener to the "Add" button
addButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task); // Add task to the array
        taskInput.value = ''; // Clear the input field
        renderTasks(); // Update the task list
    }
});

// Initial render
renderTasks();