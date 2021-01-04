class Item{
    constructor(name, calorie){
        this.id = -1;
        this.name = name;
        this.calorie = calorie;
    }
}

class StorageCtrl{
    constructor(){
        this.items = [];
        if(null !== localStorage.getItem("items"))
        {   
            this.items = JSON.parse(localStorage.getItem("items"));
            // console.log(this.items);    
        }  
    }
    allocId(){
        let id = -1; 
        for(let i =0; i < this.items.length; i ++)
        {
            if(-1 === this.items[i].id){
                id = i;
                break;
            }            
        }
        if(id === -1){
            // id = 0;
            id = this.items.length;
        }
        return id ;
    }
    chkStorage(){
        if(null === localStorage.getItem("items") && this.items.length !== 0){
            this.items = [];
            window.location.reload();
        }
    }
    refreshStorage(){
        localStorage.setItem("items", JSON.stringify(this.items));
    }
    addItem(item){
        this.chkStorage();
        item.id = this.allocId();
        this.items[item.id] = item;
        // this.items.push(item);
        this.refreshStorage();   
        return item.id;//this.getCalories();
    }
    getCalories(){
        let totalCals = 0;
        this.items.forEach(item =>{
            totalCals += Number(item.calorie);
        })
        return totalCals;
    }
    getItems(){
        return this.items;
    }
    updateItem(item){
        console.log(item);
        this.items[item.id] = item;

        // this.items.splice(item.id, 1, item); // 해당 Id의 내용교체
        // console.log(this.items);
        this.refreshStorage();   
    }
    deleteItem(id){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id === Number(id)){
                console.log(i);
                this.items[i].id = -1;
                this.items[i].name = "";
                this.items[i].calorie = 0;
                break;
            }
        }
        this.refreshStorage();   
    }
    clearItems(){
        this.items = [];
        localStorage.removeItem("items");
    }
}


class UICtrl{
    constructor(){
        this.UISelectors = {
            inputMeal : "#input-item",
            inputCal : "#input-calorie",
            btnAdd : "#btn-add",
            btnUpdate : "#btn-update",
            btnDel : "#btn-delete",
            btnBack : "#btn-back",
            totalCalories : '#total-cal',
            listMeals : '#list-cals',
            listItem : '.list-li',
            food : '.li-item',
            food_name : '.li-meal',
            food_cal : '.li-cal',
        }
    }

    makeUpList(items){
        let html = '';
        items.forEach(item =>{
            if(item.id !== -1){
                html += `
                    <li class="list-li" id = "${item.id}">
                        <div class="li-item">
                        <span class="li-meal">${item.name}</span> : 
                        <span class="li-cal">${item.calorie}</span> Calories
                        </div>
                        <div class="li-edit"><a href="#" class = "link">🖍</a></div>
                    </li>
                `;
            }
        });      
        document.querySelector(this.UISelectors.listMeals).innerHTML = html;
    }

    updateTotalCals(totalCals){        
        const result = document.getElementById("total-cal");
        result.innerHTML = `Total Calories : ${totalCals}`;
    }
    
    addItem(id, meal, calorie){
        const item = document.createElement("li");
        item.className ="list-li";
        item.id = id;
        item.innerHTML = `
            <div class="li-item">
            <span class="li-meal">${meal}</span> : 
            <span class="li-cal">${calorie}</span> Calories
            </div>
            <div class="li-edit"><a href="#" class = "link">🖍</a></div>
        `;        
        const list = document.getElementById("list-cals");
        list.appendChild(item);
    }
    updateList(item){
        const listItem = document.getElementById(`${item.id}`);
        listItem.innerHTML = `
            <div class="li-item">
            <span class="li-meal">${item.name}</span> : 
            <span class="li-cal">${item.calorie}</span> Calories
            </div>
            <div class="li-edit"><a href="#" class = "link">🖍</a></div>
        `;
    }
    deleteList(id){
        const listItem = document.getElementById(`${id}`);
        const list = document.getElementById("list-cals");
        list.removeChild(listItem);
    }
    clearLists(){
        const list = document.getElementById("list-cals");
        const lists = document.querySelectorAll(".list-li");
        lists.forEach(listItem=>{
            list.removeChild(listItem);
        })
    }
    showEditMode(){
        const btnAdd = document.querySelector(this.UISelectors.btnAdd);    
        const btnUpdate = document.querySelector(this.UISelectors.btnUpdate);
        const btnDel = document.querySelector(this.UISelectors.btnDel);
        const btnBack = document.querySelector(this.UISelectors.btnBack);
        btnUpdate.classList.remove("fade");
        btnDel.classList.remove("fade");
        btnBack.classList.remove("fade");
        btnAdd.classList.add("fade");
    }
    hideEditMode(){
        const btnAdd = document.querySelector(this.UISelectors.btnAdd);    
        const btnUpdate = document.querySelector(this.UISelectors.btnUpdate);
        const btnDel = document.querySelector(this.UISelectors.btnDel);
        const btnBack = document.querySelector(this.UISelectors.btnBack);
        btnUpdate.classList.add("fade");
        btnDel.classList.add("fade");
        btnBack.classList.add("fade");
        btnAdd.classList.remove("fade");
    }
    clearInputs(){
        const inputItem = document.querySelector(this.UISelectors.inputMeal);
        const inputCal = document.querySelector(this.UISelectors.inputCal);
        inputItem.value = "";
        inputCal.value = "";
    }
    updateInput(name, cal){
        const inputItem = document.querySelector(this.UISelectors.inputMeal);
        const inputCal = document.querySelector(this.UISelectors.inputCal);
        inputItem.value = name;
        inputCal.value = cal;
    }
    getInputMeal(){
        const inputItem = document.querySelector(this.UISelectors.inputMeal);
        return inputItem.value;
    }
    getInputCal(){
        const inputCal = document.querySelector(this.UISelectors.inputCal);
        return inputCal.value;
    }
}

let currentId = -1;
const storage = new StorageCtrl;
const app = new UICtrl;

function init(){
    loadEventListeners();
}

function loadEventListeners(){
    const output = storage.getItems();
    const totalCals =storage.getCalories();
    app.makeUpList(output);
    app.updateTotalCals(totalCals);

    const btnAdd = document.querySelector(app.UISelectors.btnAdd);    
    btnAdd.addEventListener("click", ()=>{
        if(app.getInputCal()!== ""){
            const newItem = new Item(app.getInputMeal(), app.getInputCal());
            const idx = storage.addItem(newItem);
            app.addItem(idx, app.getInputMeal(), app.getInputCal());
            app.clearInputs();
            const totalCals = storage.getCalories();
            const result = document.getElementById("total-cal");
            result.innerHTML = `Total Calories : ${totalCals}`;
        }
        else{
            console.log("No Input!");
        }
    });

    const btnEdit = document.querySelector(app.UISelectors.listMeals);
    btnEdit.addEventListener("click", (e)=>{
        // console.log(e.target.className);
        if(e.target.className !== "link"){
            return;
        }
        const li = e.target.parentNode.parentNode;
        const name = li.querySelector(`${app.UISelectors.food_name}`).innerHTML;
        const cal = li.querySelector(`${app.UISelectors.food_cal}`).innerHTML;
        app.updateInput(name, cal);
        app.showEditMode();
        currentId  = li.id;
        console.log("currentId : ", currentId);
    });

    const btnBack = document.querySelector(app.UISelectors.btnBack);
    btnBack.addEventListener("click", (e)=>{
        app.hideEditMode();
        app.clearInputs();
    });

    const btnUpdate = document.querySelector(app.UISelectors.btnUpdate);
    btnUpdate.addEventListener("click", (e)=>{
        const item = new Item(app.getInputMeal(), app.getInputCal());
        // item.id = Number(currentId);
        item.id = Number(currentId);
        storage.updateItem(item);
        app.updateList(item);
        app.hideEditMode();
        currentId = -1;
        app.clearInputs();    
        
        const totalCals =storage.getCalories();
        app.updateTotalCals(totalCals);
    });

    const btnDel = document.querySelector(app.UISelectors.btnDel);
    btnDel.addEventListener("click", ()=>{
        app.clearInputs();   
        app.hideEditMode();
        app.deleteList(currentId);
        storage.deleteItem(currentId);
        currentId = -1;
        const totalCals =storage.getCalories();
        app.updateTotalCals(totalCals); 
    });
    
    const btnClearAll = document.querySelector("#clear-all");
    btnClearAll.addEventListener("click", ()=>{
        app.clearInputs();   
        app.hideEditMode();
        app.clearLists();
        storage.clearItems();
        currentId = -1;
        const totalCals =storage.getCalories();
        app.updateTotalCals(totalCals); 


        // app.deleteList(currentId);
        // storage.deleteItem(currentId);
        // currentId = -1;
        // const totalCals =storage.getCalories();
        // app.updateTotalCals(totalCals); 
    });
}


init();