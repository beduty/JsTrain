const datas = [
    {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
      name: 'Jen Smith',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'Miami FL',
      image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
      name: 'William Johnson',
      age: 38,
      gender: 'male',
      lookingfor: 'female',
      location: 'Lynn MA',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

function loadEventListeners(){    
    const data = getData(datas);
    const btn = document.getElementById("btnNext");
    showProfile(data.next().value);
    
    btn.addEventListener("click", ()=>{
        const info = data.next();
        if(info.value != null){
            console.log(info);
            showProfile(info.value);
        }            
        else{
            console.log("Nope!!");
            window.location.reload();
        }
    });
}

function showProfile(info){
    const container = document.querySelector(".container");
    container.className = "container";
    container.innerHTML = `    
        <h1>Profile Scroller</h1>
        <div><img src= ${info.image} alt=""></div>
        <ul>
            <li>Name : ${info.name}</li>
            <li>Age : ${info.age}</li>
            <li>Location : ${info.location}</li>
            <li>Preference : ${info.gender} looking for ${info.lookingfor}</li>
        </ul>
    `;
}

function* getData(arr) {
    for(let i = 0; i < arr.length; i++){
        yield arr[i];    
    }
}
  
function init(){
    loadEventListeners();
}
init();