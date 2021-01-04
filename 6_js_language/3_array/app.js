const func1 = ()=>{
    const numbers = [43,56,33,23,44,36,5];
    const numbers2 = new Array(22,45,33,76,54);
    const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
    const mixed = [22,'Hello', true, undefined, null, {a:1, b:1}, new Date()];
    console.log(numbers);
    console.log(numbers2);
    console.log(fruit);
    console.log(mixed);

    let val = numbers.length;
    console.log(val);

    val = Array.isArray(numbers);
    console.log(val);

    val = numbers[3];
    console.log(val);

    val = numbers[0];
    console.log(val);

    val = numbers.indexOf(36);
    console.log(val);

    numbers[2] = 100;
    console.log(numbers);
}

const func2 = ()=>{    
    const numbers = [43,56,33,23,44,36,5];
    console.log(numbers);

    // Add to End;
    numbers.push(250);
    console.log(numbers);

    // Add to Front;
    numbers.unshift(120);
    console.log(numbers);

    // Delete End;
    numbers.pop();
    console.log(numbers);

    // Delete Front;
    numbers.shift();
    console.log(numbers);

    // Splice values => 1번 인덱스 포함하여 3개 없앤다.
    numbers.splice(1,3);
    console.log(numbers);

    // Reverse
    numbers.reverse();
    console.log(numbers);

    let sorted = numbers.sort(); // 내부의 element를 string으로 처리하여 정렬한다.
    console.log(sorted);

    sorted = numbers.sort(function(a,b){return a-b;});
    console.log(sorted);

    let reverseSorted = numbers.sort(function(a,b){return b-a;});
    console.log(reverseSorted);
}

//Find
const func3 = ()=>{
    function under50(num){
        return (num<50);
    }
    function over50(num){
        return (num>50);
    }

    const numbers = [43,56,33,23,44,36,5];
    let val = numbers.find(under50);  //처음 찾은 객체를 리턴한다.
    console.log(val);

    val = numbers.find(over50);  //처음 찾은 객체를 리턴한다.
    console.log(val);
}

const func4 = ()=>{
    const person = {
        firstName : 'Steve',
        lastName : 'Smith',
        age : 30,
        email : 'steve@aol.com',
        hobbies : ['music', 'sports'],
        address : {
            city : 'Miami',
            state : 'FL'
        },
        getBirthYear : function(){
            return 2020 - this.age;
        }
    }

    let val; 
    val = person;
    console.log(val);
    
    val = person.firstName;
    console.log(val);
    
    val = person['lastName'];
    console.log(val);
    
    val = person.age;
    console.log(val);

    val = person.hobbies;
    console.log(val);
    val = person.hobbies[1];
    console.log(val);
    val = person.address;
    console.log(val);
    val = person.address.state;
    console.log(val);
    val = person.address['city'];
    console.log(val);
    val = person.getBirthYear();
    console.log(val);
}

const func5 = ()=>{
    const people = [
        {name : 'John', age : 30},
        {name : 'Mike', age : 23},
        {name : 'Nancy', age : 40},
    ]

    for(let i = 0; i < people.length; i++){
        console.log(people[i].name);
    }
}

function init(){
    func5();
}
init();