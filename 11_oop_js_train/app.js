const func1 = ()=>{
    function Person(name, dob){
        this.name = name;
        this.birthday = new Date(dob);
        this.calculateAge = function(){
            const diff = Date.now() - this.birthday.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear()- 1970);
        }
    }
    const brad = new Person('Brad', '06-01-1992');
    console.log(brad.calculateAge());
}

const func2 = ()=>{    
    const arr1 = [1,2,3,4];
    const arr2 = new Array(1,2,3,4);
    console.log(arr1);
    console.log(arr2);
    
    const re1 = /\w+/;
    const re2 = new RegExp('\\w+');
    console.log(re1);
    console.log(re2);
}

const func3 = ()=>{
    function Person(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    Person.prototype.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()- 1970);        
    }
    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    Person.prototype.getsMarried = function(newLastName){
        this.lastName = newLastName;
    }

    const john = new Person('John', 'Doe', '8-12-90');
    console.log(john.calculateAge());

    const mary = new Person('Mary', 'Johnson', 'March 20 1978');
    console.log(mary.getFullName());
    mary.getsMarried("Smith");
    console.log(mary.getFullName());
    console.log(mary.hasOwnProperty('firstName'));
    console.log(mary.hasOwnProperty('getFullName')); // 추가된 getFullName는 false를 날린다.
}

const func4 = ()=>{
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greeting = function(){
        return `Hello there ${this.firstName} ${this.lastName}`; 
    }
    const person1 = new Person("John", 'Doe');
    console.log(person1.greeting());

    ///////////////////////////////////////////
    ///////////////////////////////////////////
    function Customer(firstName, lastName, phone, membership){
        // 상속받을 수 있다.
        Person.call(this, firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    // 생성자
    Customer.prototype = Object.create(Person.prototype);
    Customer.prototype.constructor = Customer;

    const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
    Customer.prototype.greeting = function(){
        return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
    }
    console.log(customer1);
    console.log(customer1.greeting());
}

const func5 = ()=>{
    const personPrototypes = {
        greeting : function(){
            return `Hello there ${this.firstName} ${this.lastName}`;
        }, 
        getsMarried : function(newLastName){
            this.lastName = newLastName;
        }
    }

    const mary = Object.create(personPrototypes);
    mary.firstName = 'Mary';
    mary.lastName = 'Williams';
    mary.age = 30;
    mary.getsMarried('Thompson');
    console.log(mary.greeting());


    const brad = Object.create(personPrototypes, {
        firstName : {value : 'Brad'},
        lastName : {value : 'Traversy'},
        age : {value : 36}
    });
    console.log(brad);
    console.log(brad.greeting());
}

const func6 = ()=>{
    class Person{
        constructor(firstName, lastName, dob){
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }
        greeting() {
            return `Hello there ${this.firstName} ${this.lastName}`;
        }

        calculateAge(){
            const diff = Date.now() - this.birthday.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        getsMarried(newLastName){
            this.lastName = newLastName;
        }
        static addNumber(x,y){
            return x + y;
        }
    }

    const mary = new Person('Mary', "Williams", '11-13-1980');
    mary.getsMarried('Thompson');
    console.log(mary);
    console.log(Person.addNumber(1,2));
}


const func7 = ()=>{
    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
        greeting(){
            return `Hello there ${this.firstName} ${this.lastName}`;            
        }
    }

    class Customer extends Person{
        constructor(firstName, lastName, phone, membership){
            super(firstName, lastName);
            this.phone = phone;
            this.membership = membership;
        }
        static getMembershipCost(){
            return 500;
        }
    }

    const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');
    console.log(john.greeting());
    console.log(Customer.getMembershipCost());
}


function init(){
    func7();
}

init();