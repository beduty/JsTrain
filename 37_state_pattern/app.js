class PageState{
    // constructor
    constructor(){
        this.currentState;
    }
    init(){
        this.currentState = new homeState(this);
    }
    change(state){
        this.currentState = state;
    };
}

const homeState = function(page){
    const container = document.getElementById('container');
    container.innerHTML = `
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <button>Learn more</button>`;
}
const aboutState = function(page){
    const container = document.getElementById('container');
    container.innerHTML = `
    <h1>About us</h1>
    <p>This is the about page</p>
    `;
}
const contactState = function(page){
    const container = document.getElementById('container');
    container.innerHTML = `
    <h1>Contact us</h1>
    <div class="input">
        <p>Name</p>
        <input type="text">
    </div>
    <div class="input">
        <p>Email address</p>
        <input type="text">
    </div>
    <button>Submit</button>
    `;
}





function loadEventListeners(){    
    const page = new PageState();
    page.init();

    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");

    home.addEventListener("click", ()=>{
        page.change(new homeState);
    });
    about.addEventListener("click", ()=>{
        page.change(new aboutState);
    });
    contact.addEventListener("click", ()=>{
        page.change(new contactState);
    });
}

function init(){
    loadEventListeners();
}
init();