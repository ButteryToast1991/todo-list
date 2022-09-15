//Add tasks to the task list
const taskList = document.getElementById('taskList');

document.getElementById('addBtn').onclick = function(){
    var task = document.getElementById('toDo').value;
 
    var taskItem = document.createElement('li');
    
    taskItem.innerHTML = '<input type="checkbox" onclick = isChecked()>' + task;

    taskList.appendChild(taskItem);

}

function isChecked(){
    const checkbox = document.querySelector('input[type=checkbox]');
    const taskComplete = document.getElementsByClassName('taskItem');

    checkItem = ((checkbox.classList.contains('checked')) ? true:false);
    
    if(checkItem){;
        taskComplete.classList.remove('complete');
        console.log(taskComplete.classList);

    }else{
        taskComplete.classList.add('complete');
        console.log(taskComplete.classList);
    }
}