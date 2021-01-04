const func1 = ()=>{
    const http = new EasyHTTP;
    http.get('https://jsonplaceholder.typicode.com/users')
    .then( data => console.log(data))
    .catch( err => console.log(err));
}
const func2 = ()=>{
    const http = new EasyHTTP;   
    const data = {
        name : 'John Doee',
        username : 'johndoe',
        email : 'jdoe@gmail.com'
    }
    http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

const func3 = ()=>{
    const http = new EasyHTTP;
    // update Post
    const data = {
        name : 'John Doe',
        username : 'johndoe',
        email : 'jdoe@gmail.com'
    }
    http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}

const func4 = ()=>{
    const http = new EasyHTTP;
    // Delete User
    http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function init(){
    func4();
}
init();