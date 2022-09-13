//Add tasks to the task list
document.getElementById('addBtn').onclick = function(){
    var task = document.getElementById('toDo').value;

    var taskItem = document.createElement('li');
    var taskCheck = document.createElement('input').setAttribute('type', 'checkbox');
    taskItem.innerHTML = '<input type="checkbox">' + task;

    document.getElementById('taskList').appendChild(taskItem);
}

