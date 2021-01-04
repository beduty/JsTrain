const func1 = ()=>{
    let val;
    const today = new Date();
    let birthDay = new Date('9-10-1981 11:25:00');
    console.log(birthDay);

    birthDay = new Date('September 10 1981');
    console.log(birthDay);

    birthDay = new Date('9/10/1981');
    console.log(birthDay);

    val = today.getMonth();     console.log(val);
    val = today.getDate();    console.log(val);
    val = today.getDay();    console.log(val);
    val = today.getFullYear();    console.log(val);
    val = today.getHours();    console.log(val);
    val = today.getMinutes();    console.log(val);
    val = today.getSeconds();    console.log(val);
    val = today.getMilliseconds();    console.log(val);
    val = today.getTime();    console.log(val);

    birthDay.setMonth(2);    console.log(birthDay);
    birthDay.setDate(12);    console.log(birthDay);
    birthDay.setFullYear(1985);    console.log(birthDay);
    birthDay.setHours(10);    console.log(birthDay);
    birthDay.setMinutes(11);    console.log(birthDay);
    birthDay.setSeconds(31);    console.log(birthDay);
}

const func2 = ()=>{
    const color = 'red';
    if(color === 'red'){
        console.log("Color is red");
    }
    else if(color==='blue'){
        console.log("Color is blue");
    }


    const name = 'Steve';
    const age = 20;
    if(age > 0 && age < 12){
        console.log(`${name} is a child`);
    }
    else if(age >= 13 && age <= 19){
        console.log(`${name} is a teenager`);
    }
    else{
        console.log(`${name} is a adult`);
    }

    id = 10;
    console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
}

const func3 = ()=>{
    let day;
    switch(new Date().getDay()){
        case 0:{
            day = 'Sunday';
            break;
        }
        case 1:{
            day = 'Monday';
            break;
        }
        case 2:{
            day = 'Tuesday';
            break;
        }
        case 3:{
            day = 'Wednesday';
            break;
        }
        case 4:{
            day = 'Thursday';
            break;
        }
        case 5:{
            day = 'Friday';
            break;
        }
        case 6:{
            day = 'Saturdau';
            break;
        }
    }
    console.log(`Today is ${day}.`);
}

const func4 = ()=>{
    const todo = {
        add: function(){
            console.log("Add todo..");
        },
        edit : function(id){
            console.log(`Edit todo ${id}`);
        }    
    }
    todo.delete = function(id){
        console.log(`Delete todo ${id}`);
    }

    todo.add();
    todo.edit(2);
    todo.delete(1);
}

const func5 = ()=>{
    for(let i =0; i< 10; i++){
        if(i === 2){
            console.log('2 is my favorite number');
            continue;
        }
        if(i === 5){
            console.log('Stop the loop');
            break;
        }
        console.log('Number ' + i);
    }
}

const func6 = ()=>{
    
    let i = 100;
    do{
        console.log('Number ' + i);
        i++;
    }
    while(i<10);
}

const func7 = ()=>{
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    for(let i =0; i < cars.length; i++){
        console.log(cars[i]);
    }
    cars.forEach((car)=>{
        console.log(car);
    })
}

const func8 = ()=>{
    const users = [
        {id : 1 , name : 'John'},
        {id : 2 , name : 'Sara'},
        {id : 3 , name : 'Karen'},
    ];

    const ids = users.map(function(user){
        return user.id;
    });
    console.log(ids);
}

const func9 = ()=>{
    const user = {
        firstName : 'John',
        lastName : 'Doe',
        age : 40
    }

    for(let x in user){
        console.log(`${x} : ${user[x]}`);
    }
}

function init(){
    func9();
}
init();