const func1 = ()=>{
    const name = 'John';
    const age = 30;
    const job = 'Web Developer';
    const city = 'Miami';
    let html = '';

    // html = '<ul>'+
    // '<li>Name: ' + name + '</li>' +
    // '<li>Age: ' + age + '</li>' +
    // '<li>Job: ' + job + '</li>' +
    // '<li>City: ' + city + '</li>' ;
    // document.body.innerHTML = html;

    function hello(){
        return 'hello';
    }

    html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age>20? 'Over 20' : 'Under 20'}</li>
    </ul>    
    `;
    document.body.innerHTML = html;
}

function init(){
    func1();
}

init();