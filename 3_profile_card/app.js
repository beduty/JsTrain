const heading = 'Please Meet Our Team';
function init() {
    const title = document.querySelector(".heading");

    let i = 0;
    const typing = ()=>{
        if(i < heading.length)
        {
            title.innerHTML += heading.charAt(i);
            i++;
            setTimeout(typing, 150);
        }
    }
    typing();
}
init();