function loadEventListeners(){
    const btn1 = document.getElementById("button1");
    const btn2 = document.getElementById("button2");
    btn1.addEventListener("click", handleBtn1);
    btn2.addEventListener("click", handleBtn2);
}

function handleBtn1(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID : ${customer.id}</li>
                    <li>NAME : ${customer.name}</li>
                    <li>COMPANY : ${customer.company}</li>
                    <li>PHONE : ${customer.phone}</li>
                </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    };
    xhr.send();
}
function handleBtn2(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';

            customers.forEach(customer => {
                output += `
                    <ul>
                        <li>ID : ${customer.id}</li>
                        <li>NAME : ${customer.name}</li>
                        <li>COMPANY : ${customer.company}</li>
                        <li>PHONE : ${customer.phone}</li>
                    </ul>
                `;           
            });
            document.getElementById('customers').innerHTML = output;     
        }
    };
    xhr.send();    
}

function init(){
    loadEventListeners();
}

init();