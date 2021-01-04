function loadEventListeners(){
    const btn1 = document.querySelector(".form button");
    btn1.addEventListener("click", getJokes);
}

function getJokes(e){
    const number = document.querySelector(".form input");

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number.value}`, true);

    {
        // xhr.onload = function(){
        //     if(this.status === 200){
        //         const respond = JSON.parse(this.responseText);
        //         respond['value'].forEach(value => {      
        //             const joke = value['joke']; 
        //             const li = document.createElement('li');
        //             // li.appendChild(document.createTextNode(joke));
        //             li.innerHTML = joke;
        
        //             const ul = document.getElementById("lst-jokes");
        //             ul.appendChild(li);
        //         });
        //     }
        // }    
        // xhr.send();
    }
    {
        xhr.onload = function(){
            if(this.status === 200){
                const response = JSON.parse(this.responseText);
                let output = '';
                if(response.type === 'success'){
                    response.value.forEach(function(joke){
                        output += `<li>${joke.joke}</li>`
                    });
                }else{
                    output += '<li>Something went wrong</li>';
                }
                const ul = document.getElementById("lst-jokes");
                ul.innerHTML = output;
            }
        }   
        xhr.send();
    }
}

function init(){
    loadEventListeners();
}

init();