document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="deleteButton">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const targetElement = event.target;
        if (targetElement.classList.contains('deleteButton')) {
            const listItem = targetElement.parentElement;
            taskList.removeChild(listItem);
        } else if (targetElement.classList.contains('task-text')) {
            targetElement.parentElement.classList.toggle('completed');
        }
    });
});
