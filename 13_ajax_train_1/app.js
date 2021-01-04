function loadEventListeners(){
    const btn = document.getElementById('button');
    btn.addEventListener('click', handleBtnClick);
};

function handleBtnClick(){
    console.log("Click!");
    loadData();
}

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    
    // OPEN
    xhr.open('GET', 'data.txt', true);
    {
        // Optional - Used for spinners/loaders
        xhr.onprogress = function(){
            console.log('READYSTATE :' + xhr.readyState);
        }

        // console.log('READYSTATE ' + xhr.readyState);
        xhr.onload = function(){
            // finish될 때 호출된다.
            console.log('READYSTATE ' + xhr.readyState);
            if(this.status === 200){ // OK
                // console.log(this.responseText);
                const output =  document.getElementById('output');
                output.innerHTML = `
                    <h1>
                    ${this.responseText}
                    </h1>
                `;
            }
            else if(this.status === 403){ // Forbidden
                console.log("Forbidden");
            }        
            else if(this.status === 404){ // Not Found
                console.log("Not Found");
            }
        }
        xhr.onerror = function(){
            console.log('Request error...');
        }
        xhr.send();
    }
    {
        // console.log('READYSTATE ' + xhr.readyState);
        // xhr.onreadystatechange = function(){
        //     // 모든 과정을 다 기록한다.
        //     console.log('READYSTATE ' + xhr.readyState);
        //     if(this.status === 200 && this.readyState === 4){
        //         console.log(this.responseText);
        //     }
        // }
        // xhr.send();
        // // ReadyState Value
        // // 0: request not initialized
        // // 1: server connection established
        // // 2: request received
        // // 3: processing request
        // // 4: request finished and response is ready
    }


}

function init(){
    loadEventListeners();
}
init();