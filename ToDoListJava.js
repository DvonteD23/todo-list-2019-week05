
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const resetButton = document.getElementById("reset");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the text from the input
        if (taskText) { // Check if the input is not empty
            const listItem = document.createElement("li"); // Create a new list item
            listItem.textContent = taskText; // Set the text of the list item
            taskList.appendChild(listItem); // Append the item to the task list
            taskInput.value = ""; // Clear the input field
        } else {
            alert("Psss.... Add Task"); // Alert if the input is empty
        }
    }

    // Function to reset the task list
    function resetList() {
        taskList.innerHTML = ""; // Clear the contents of the task list
    }

    // Event listeners
    addTaskButton.addEventListener("click", addTask); // Add task on button click
    resetButton.addEventListener("click", resetList); // Reset list on button click

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
