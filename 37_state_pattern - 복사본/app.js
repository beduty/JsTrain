function loadEventListeners(){
    const btnCheck = document.getElementById("chkbox");
    btnCheck.addEventListener("click" , ()=>{
        console.log("click");
    });
}

function init(){
    loadEventListeners();
}
init();