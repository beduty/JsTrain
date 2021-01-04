//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listeners
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click',removeTask );
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        console.log(task);
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    // append the link to li    
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    //Store in LS
    storeTaskInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = "";
    
    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    console.log(task);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    // li가 동적으로 생성된 것이므로, li를 특정지을 수 있는 className이 없다. 
    // 그렇기 떄문에 li내부의 X버튼을 지정할 수가 없다. 

    // 다만, ul은 있으므로 이를 활용한다. 
    // taskList에  .addEventListener('click' .. ) 를 걸어두면 클릭했을 떄 이벤트가 들어온다. 
    // <li>를 클릭하면, 
    //    --> e.target은 클릭한 <li> 가 리턴된다. 
    //    --> e.target.parentElement는 <ul>을 의미한다.
    // <li>내부에 포함된 <i>을 클릭하면 
    //    --> e.target은 <i>가 리턴된다. 
    //    --> e.target.parentElement는 <i>를 포함하는 링크<a>을 의미한다.

    if(e.target.parentElement.classList.contains('delete-item'))
    {
        // X 아이콘을 클릭하면
        // e.target.parentElement.classList에는 [input-field, col, s12]가 리턴된다.
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            //Remove from LS
            removeTaskFromLocalStroage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStroage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(){
    // taskList.innerHTML = '';

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //Clear from LS
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
    console.log(text);
}

loadEventListeners();
