
// SETS : Store Unique values of any types
// 값 자체가 key 와 value이다.

const func1 = ()=>{
    const set1 = new Set();
    set1.add(100);
    set1.add("A string");
    set1.add({name : 'John'});
    set1.add(true);
    set1.add(100); // 오로지 하나만 있어야 하므로, add되더라도 무시된다.

    console.log("size: " + set1.size);
    set1.forEach(element=>{
        console.log(element);
    });

    // Check for Values
    console.log("Check for Values...")
    console.log(set1.has(100));
    console.log(set1.has(30+70));
    console.log(set1.has(true));
    console.log(set1.has({name : 'John'}));
}

const func2 = ()=>{
    const set2 = new Set([1,true, 'string', 1]);
     // 오로지 하나만 있어야 하므로, 마지막 1은 무시된다.
     console.log("size: " + set2.size);
    set2.forEach(element=>{
        console.log(element);
    });

    console.log(set2);
    set2.delete(1);
    console.log(set2);
}

const func3 = ()=>{    
    const set1 = new Set();
    set1.add(100);
    set1.add("A string");
    set1.add({name : 'John'});
    set1.add(true);
    set1.add(100);

    console.log('[Entries]');
    for(let item of set1.entries()){
        console.log(item);
    }

    console.log('');
    console.log('[Set]');
    for(let item of set1){
        console.log(item);
    }    

    console.log('');
    console.log('[Key]');
    for(let item of set1.keys()){
        console.log(item);
    }    

    console.log('');
    console.log('[Value]');
    for(let item of set1.values()){
        console.log(item);
    }

    console.log('');
    console.log('[ForEach..]');
    set1.forEach(value =>{
        console.log(value);
    });

    console.log('');
    console.log('[Set To Array]');
    const arrSet = Array.from(set1);
    console.log(arrSet);
}

function init(){
    // func1();
    // func2();
    func3();
};


init();