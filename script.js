const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");
const clearAllBtn = document.getElementById("clearAllBtn");

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;
    const li = document.createElement('li');
    li.textContent = taskText;


    li.addEventListener('click', () => {
        const myBoolean = confirm("Press OK to mark task as completed.\nPress Cancel to delete task.");

        if (myBoolean) {
            const currentListId = li.parentElement.id;        
            if (currentListId === 'taskList'){
            taskList.removeChild(li);
            completedList.appendChild(li);
            } else {
            completedList.removeChild(li);
            taskList.appendChild(li);
            }
        } else {
            li.parentElement.removeChild(li);
        }
    });

    taskList.appendChild(li);
    taskInput.value = '';
});

clearAllBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
});