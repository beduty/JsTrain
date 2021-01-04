let correct = Math.round(Math.random() * 10);
let retry = 3;

function loadEventListeners(){
    const submit = document.querySelector("#submit");
    submit.addEventListener("click", handleSubmit);
}

const handleSubmit = ()=>{    
    const input = document.querySelector("#input");
    if(retry > 0)
    {
        if(correct.toString() === input.value)
        {
            console.log("correct!");
            input.style.cssText = 'border: 2px solid #279327;';
            const result = document.querySelector(".result");
            result.innerHTML = `${correct} is correct, YOU WIN!`;
            result.style.cssText = "color : #279327; font-weight : bold; font-size : 20px;"

            
            const submit = document.querySelector("#submit");
            submit.value = "PLAY AGAIN";
            retry = 0;
        }
        else{    
            retry--;    
            console.log("Fail! : " + correct + "  " + input.value );
            input.style.cssText = 'border: 2px solid #ff1212;';

            if(retry === 0){
                const result = document.querySelector(".result");
                result.innerHTML = `Game Over, you lost. The Correct number was ${correct}.`;
                result.style.cssText = "color : #ff1212; font-weight : bold; font-size : 20px;"

                const submit = document.querySelector("#submit");
                submit.value = "PLAY AGAIN";
            }
            else{
                const result = document.querySelector(".result");
                result.innerHTML = `${input.value} is not correct, ${retry} guesses left`;
                result.style.cssText = "color : #ff1212; font-weight : bold; font-size : 20px;"
            }
        }
    }
    else{        
        const submit = document.querySelector("#submit");
        submit.value = "SUBMIT";
        correct = Math.round(Math.random() * 10);
        retry = 3;

        input.value = "";
        input.style.cssText = 'border: 1px #aaa solid';
        const result = document.querySelector(".result");
        result.innerHTML = ``;
    }
}

function init(){
    loadEventListeners();
}

init();