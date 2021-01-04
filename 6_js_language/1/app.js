const section1 = ()=>{
    console.log("Hello23321!");
    // alert("Hello!");
    let greeting = "Hello";
    console.log(greeting);
    console.log({a:1, b:2});
    console.log([1,2,3,4]);
    console.table({a:1, b:2});
    console.error("This is some error");
    console.warn('This is a warning')
    console.time('Hello');
        console.log("something1");  console.log("something2");
        console.log("something3");  console.log("something4"); console.log("something5");
    console.timeEnd('Hello');
}


const section2 = ()=>{
    const numbers = [1,2,3,4,5];
    numbers.push(6);
    console.log(numbers);
    // numbers = [1,2,3,4,5];

    const person ={
        name : "John",
        age : 30
    }
    console.log(person);

    person.name = 'Sara'
    person.age = 32;
    console.log(person);
    // person = { name : "John", age : 30 }
}

const section3 = ()=>{
    const name = 'John Doe';
    console.log(typeof name);

    const age = 45;
    console.log(typeof age);

    const hasKids = true;
    console.log(typeof hasKids);

    const car = null;
    console.log(typeof car);

    const hobbies = ['movies', 'music'];
    console.log(typeof hobbies);

    const etc = {food:'hamburger', ets : 2};
    console.log(typeof etc);

    const today = new Date();
    console.log(today);
    console.log(typeof today);
}

const section4 = ()=>{
    let val = String(4+4);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);
    
    val = String(555);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);
    
    val = String(true);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = String(new Date());
    console.log(val);
    console.log(typeof val);
    console.log(val.length);    

    val = String([1,2,3,4]);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = (5).toString();
    console.log(val);
    console.log(typeof val);
    console.log(val.length);
    
    val = (true).toString();
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = Number('5');
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = Number(true);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);
    
    val = Number(false);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);
    
    val = Number(null);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = Number('hello');
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = Number([1,2,3,4]);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = parseInt('100.30');
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    val = parseFloat('100.31');
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    const val1 = String(5);
    const val2 = 6;
    const sum = val2+val1;
    // const sum = val1+val2;
    console.log(sum);
    console.log(typeof sum);
    
    //const sumInt = Number(val2+val1);
    const sumInt = val2+Number(val1);
    console.log(sumInt);
    console.log(typeof sumInt);
}

const section5 = ()=>{
    let val;
    val = Math.PI;
    console.log(val);

    val = Math.round(2.8);
    console.log(val);
    val = Math.ceil(2.4);
    console.log(val);
    val = Math.floor(2.8);
    console.log(val);
    val = Math.sqrt(64);
    console.log(val);
    val = Math.abs(-3);
    console.log(val);
    val = Math.pow(8,2);
    console.log(val);
    val = Math.min(8,2,33,1,55,6,7);
    console.log(val);
    val = Math.max(8,2,33,1,55,6,7);
    console.log(val);    
    val = Math.random();
    console.log(val);
    val = Math.random() * 20;
    console.log(val);
    val = Math.floor(Math.random() * 20);
    console.log(val);    
}

const section6 = ()=>{
    const firstName = 'William';
    let val = firstName.substring(0,4);
    console.log(val);

    val = firstName.slice(0,4);
    console.log(val);

    val = firstName.slice(-3);
    console.log(val);
    
    const str = 'Hello there, my name is Brad';
    val = str.split(' ');
    console.log(val);

    const tags = 'web design,web development,programming';
    val = tags.split(',');
    console.log(val);

    val = str.replace('Brad', 'Jack');
    console.log(val);

    val = str.includes('Hello');   
    console.log(val);
}
function init(){
    section6();
}
init();