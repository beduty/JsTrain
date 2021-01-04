const bannerBtn = document.querySelector(".banner button");
const formBtn = document.querySelector(".form-xbtn");
const btnAddTask = document.querySelector(".form_add");
const inputAddTask = document.querySelector(".form>input");
const btnClears = document.querySelector(".form-list>button");
const lstTask = document.querySelector(".lst-tasks");
const lstFiltTask = document.querySelector(".lst-filtered");
const form = document.querySelector(".form");
const inputFiltTask = document.querySelector(".form-filt");

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);

    bannerBtn.addEventListener("click", handleBannerBtn);
    formBtn.addEventListener("click", handleFormBtn);
    btnAddTask.addEventListener("click", handleBtnAddTask);
    inputAddTask.addEventListener("keyup", handleEnterAddTask);
    lstTask.addEventListener("click", handleLst);
    btnClears.addEventListener("click", handleBtnClear);
    inputFiltTask.addEventListener("keyup",handleFilt);
}

const handleFilt = (e)=>{    
    const txtSearch = e.target.value.toLowerCase();
    while(lstFiltTask.firstChild){
        lstFiltTask.removeChild(lstFiltTask.firstChild);        
    }

    document.querySelectorAll(".lst-tasks .task-item").forEach(task => {
        const txtItem = task.firstChild.textContent.toLowerCase();
        if(txtItem.indexOf(txtSearch) !== -1)
        {
            task.style.display = 'flex';
            if(txtSearch !== "")
                addFiltTask(txtItem);
        }
        else{    
            task.style.display = 'none';
        }
    })    
}

const getTasks = ()=>{
    let  = [];
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        addTask(task);
    });
}

const handleBtnClear = ()=>{    
    if(confirm("Clear?")){
        while(lstTask.firstChild){
            lstTask.removeChild(lstTask.firstChild);        
        }
        localStorage.clear();
    }
}

const handleLst = (e)=>{    
    if(true === e.target.classList.contains("toggle")){
        const li = e.target.parentElement;
        const span = li.querySelector("span");
        if(true === e.target.checked){
            span.style.cssText = 'opacity : 0.3; text-decoration:line-through';
        }
        else{
            span.style.cssText = 'opacity : 1.0';
        }        
    }

    if(true === e.target.classList.contains("fa-remove")){
        const li = e.target.parentElement;
        const toggle = li.querySelector(".toggle");
        if(false == toggle.checked)
        {
            alert("No! Toggle On First!");
        }
        else
        {
            li.remove();

            let tasks;
            if(localStorage.getItem('tasks') === null){
                tasks = [];
            }else{
                tasks = JSON.parse(localStorage.getItem('tasks'));
            }
            tasks.forEach(function(task, index){
                const spanValue = li.querySelector("span").innerHTML;
                if(task === spanValue)
                    tasks.splice(index, 1);
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}

const handleBannerBtn = ()=>{
    const bg = document.querySelector(".bg");
    bg.style.background = "#cc683c";

    const banner = bg.querySelector(".banner");
    banner.style.display = "none";

    const form = bg.querySelector(".form-wrapper");
    form.style.opacity = "1";
    form.style.visibility = "visible"; 
}

const addStorage = (task)=>{    
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const handleBtnAddTask = ()=>{     
    addStorage(inputAddTask.value);
    addTask(inputAddTask.value);
    inputAddTask.value = '';
}


const handleEnterAddTask = (e)=>{    
    if(e.key === "Enter"){                
        addStorage(inputAddTask.value);
        addTask(inputAddTask.value);
        inputAddTask.value = '';
    }       
}

const addTask = (strTask)=>{
    if(strTask === "")
    {
        return;
    }
    const lst = document.querySelector(".lst-tasks");

    const span = document.createElement("span");
    span.className = 'task-name';
    span.innerHTML = strTask;    

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'toggle'; 

    const taskItem =document.createElement("li");
    taskItem.className = "task-item"
    taskItem.appendChild(span);
    taskItem.appendChild(input);    

    const icon = document.createElement('i');
    icon.className = "fa fa-remove";
    taskItem.appendChild(icon);    

    lst.appendChild(taskItem);
}

const addFiltTask = (strTask)=>{
    if(strTask === "")
    {
        return;
    }
    const lst = document.querySelector(".lst-filtered");

    const span = document.createElement("span");
    span.className = 'task-name small-text';
    span.innerHTML = strTask;  

    const taskItem =document.createElement("li");
    taskItem.className = "task-item"
    taskItem.appendChild(span);

    lst.appendChild(taskItem);
}


const handleFormBtn = ()=>{
    const bg = document.querySelector(".bg");
    // bg.style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(images/bg1.jpeg) no-repeat center";
    bg.style.cssText = "background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(images/bg1.jpeg) no-repeat; background-size: cover;";
    const banner = bg.querySelector(".banner");
    banner.style.display = "flex";

    const form = bg.querySelector(".form-wrapper");
    form.style.opacity = "0";
    form.style.visibility = "hidden"; 
}

function init(){
    loadEventListeners();
}

init();