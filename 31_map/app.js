const func1 = ()=>{
    
    // Map : 키-Value으로 이루어져 있다. 키와 Value는 아무거나 와도 된다.!
    const key1 = 'some string';
    const key2 = {};
    const key3 = function(){};

    const map1 = new Map();
    map1.set(key1, 'Value of key1');
    map1.set(key2, 'Value of key2');
    map1.set(key3, 'Value of key3');

    console.log(map1.get(key1));
    console.log(map1.get(key2));
    console.log(map1.get(key3));
    console.log(map1.size);

    for(let [key,value] of map1){
        console.log(`${key} : ${value}`);
    }   

    for(let key of map1.keys()){
        console.log(key);
    }
    for(let value of map1.values()){
        console.log(value);
    }

    map1.forEach(function(key, value){        
        console.log(`${key} : ${value}`);
    });

    const arrKeyVal = Array.from(map1);
    console.log(arrKeyVal);
    
    const arrKey = Array.from(map1.keys());
    console.log(arrKey);
    
    const arrVal = Array.from(map1.values());
    console.log(arrVal);
}
const func2 = ()=>{}
const func3 = ()=>{}
const func4 = ()=>{}

function init(){
    func1();
    func2();
    func3();
};


init();