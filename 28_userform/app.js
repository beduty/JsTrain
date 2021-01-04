function loadEventListeners(){
    const userName = document.getElementById("user-name");
    const userZip = document.getElementById("user-zipcode");
    const userEmail = document.getElementById("user-email");
    const userPhone = document.getElementById("user-phonenumber");
    const btnUser = document.getElementById("user-submit");


    userName.addEventListener("focusout",(e)=>{
        const name = e.target.value;
        const re2 = /^[a-zA-Z]{2,10}$/;// 문자가 2~10개 있어야 한다.
        if(false === re2.test(name)){
            showAlert(e.target.parentElement, "Name must be between 2 and 10 characters.");
        }
        else{
            deleteAlert(e.target.parentElement);
        }   
    });

    userZip.addEventListener("focusout",(e)=>{
        const name = e.target.value;
        const re2 = /^[0-9]{5}$/;// 숫자  5개만 허용된다.
        if(false === re2.test(name)){
            showAlert(e.target.parentElement, "Enter a valid zipcode");
        }
        else{
            deleteAlert(e.target.parentElement);
        }   
    });

    userEmail.addEventListener("focusout",(e)=>{
        const name = e.target.value;
        // const re2 = /^()@()\.()$/; // 이메일 형식  \. 은 .을 표현하기 위한 특수 문자
        const re2 = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; // 이메일 형식   
        // jung@abc.de.re 처럼 .이 여러개여도 상관없다. ([a-zA-Z0-9_\-\.]+) 에 다 포함되기 때문이다.
        if(false === re2.test(name)){
            showAlert(e.target.parentElement, "Enter a valid email");
        }
        else{
            deleteAlert(e.target.parentElement);
        }   
    });

    userPhone.addEventListener("focusout",(e)=>{
        const name = e.target.value;        
        const re2 = /^[0-9]{10}$/;// 문자가 2~10개 있어야 한다.
        if(false === re2.test(name)){
            showAlert(e.target.parentElement, "Enter a valid phone");
        }
        else{
            deleteAlert(e.target.parentElement);
        }   
    });


}

function showAlert(parent, msg){
    const p = parent.querySelector("p");
    if(p===null){
        const newP = document.createElement("p"); 
        newP.innerHTML = msg;//"Name must be between 2 and 10 characters.";
        parent.appendChild(newP);
        parent.classList.add("input-err");
    }      
}
function deleteAlert(parent){
    const p = parent.querySelector("p");
    if(p){
        p.remove();
        parent.classList.remove("input-err");
    }            
}

function init(){
    loadEventListeners();
}

init();

