function loadEventListeners(){
    const btnCalc = document.querySelector('.card button');
    btnCalc.addEventListener('click',handleCalc);
}
function handleCalc(e){
    e.preventDefault();

    const loading = document.querySelector(".loading");
    loading.style.display = "flex";

    const results = document.querySelector(".results");
    results.style.display = "none";

    // 2초 후에 calcResult가 호출된다. 
    setTimeout(calcResult, 500);
}

const calcResult = ()=>{
    const valAmount = document.querySelector(".form-input:first-child input").value;
    const valInterst = document.querySelector(".form-input:nth-child(2) input").value;
    const valYears = document.querySelector(".form-input:nth-child(3) input").value;

    const principal = parseFloat(valAmount);
    const calcedInterest = parseFloat(valInterst)/100/12;
    const calcedPayments = parseFloat(valYears)*12;

    //Compute monthly payment
    const x = Math.pow(1+calcedInterest, calcedPayments); // 제곱
    const monthly = (principal*x*calcedInterest) / (x-1); 

    console.log(isFinite(monthly));
    console.log(monthly);

    if(isFinite(monthly)){
        const objMonthPayment = document.getElementById("m-payment");
        const objTotPayment = document.getElementById("t-payment");
        const objTotInterest = document.getElementById("t-interest");
        objMonthPayment.value = monthly.toFixed(2);
        objTotPayment.value = (monthly * calcedPayments).toFixed(2);
        objTotInterest.value = ((monthly*calcedPayments)-principal).toFixed(2);
        objMonthPayment.readOnly = true;
        objTotPayment.readOnly = true;
        objTotInterest.readOnly = true;

        const loading = document.querySelector(".loading");
        loading.style.display = "none";
    
        const results = document.querySelector(".results");
        results.style.display = "block";
    }
    else{
        showError('Please check your numbers');
    }
}

function showError(error){
    const errContainer = document.createElement("div");
    errContainer.className = "err-group";

    const errSpan = document.createElement("span");
    errSpan.innerHTML = "please check your numbers";

    errContainer.appendChild(errSpan);

    const card = document.querySelector(".card");
    const cardHeader = document.querySelector(".card-heading");
    card.insertBefore(errContainer,cardHeader);
    

    const loading = document.querySelector(".loading");
    loading.style.display = "none";

    const results = document.querySelector(".results");
    results.style.display = "none";

    setTimeout(()=>{
        errContainer.remove();
    }, 3000)
}


function init(){
    loadEventListeners();
}

init();