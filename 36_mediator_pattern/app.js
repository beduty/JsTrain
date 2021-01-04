class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;    
    }
    send(msg, to){
        this.chatroom.send(msg, this, to);
    }
    receive(msg, from){
        console.log(`${from.name} to ${this.name} : ${msg}`);
    }
}

class Chatroom {
    constructor(){
        this.users = {};
    }
    register(user){
        this.users[user.name] = user;
        user.chatroom = this;
        console.log("Chat Room Enter : " + user.name);        
        console.log("Members : " + Object.keys(this.users).length);
        // console.log(Object.keys(this.users));
    }
    send(msg, from , to){
        if(to){
            to.receive(msg, from);
        }
        else{
            for(const key in this.users){
                if(this.users[key] !== from){
                    this.users[key].receive(msg, from);
                }
            }
        }
    }
}

function init(){
    const brad =  new User('Brad');
    const jeff =  new User('Jeff');
    const sara =  new User('Sara');

    const chatroom = new Chatroom();

    const btnBrad = document.getElementById("user-brad");
    const btnJeff = document.getElementById("user-jeff");
    const btnSara = document.getElementById("user-sara");
    btnBrad.addEventListener("click", ()=>{
        chatroom.register(brad);
    });
    btnJeff.addEventListener("click", ()=>{
        chatroom.register(jeff);
    });
    btnSara.addEventListener("click", ()=>{
        chatroom.register(sara);
    });

    const btnSend = document.getElementById("send-msg");
    btnSend.addEventListener("click", ()=>{
        brad.send("Hello Jeff", jeff);
        sara.send('Hello Brad, you are the best dev ever!', brad);
        jeff.send('Hello Everyone!!!!');
    });


}
init();
