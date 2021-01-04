const func1 = ()=>{
    const input = prompt();
    alert(input);
}
const func2 = ()=>{
    if(confirm("Are you sure")){
        console.log("YES");
    }
    else{
        console.log("No");
    }
}
const func3 = ()=>{
    let val;
    val = window.outerWidth;
    console.log(val);
    val = window.outerHeight;
    console.log(val);
    val = window.innerWidth;
    console.log(val);
    val = window.innerHeight;
    console.log(val);

    val = window.scrollY;
    console.log(val);
    val = window.scrollX;
    console.log(val);

    val = window.location;
    console.log(val);
    val = window.location.hostname;
    console.log(val);
    val = window.location.port;
    console.log(val);
    val = window.location.href;
    console.log(val);

    val = window.navigator;
    console.log(val);
    val = window.navigator.appName;
    console.log(val);
    val = window.navigator.appVersion;
    console.log(val);
    val = window.navigator.userAgent;
    console.log(val);
    val = window.navigator.platform;
    console.log(val);
    val = window.navigator.vendor;
    console.log(val);
    val = window.navigator.language;
    console.log(val);
}

function init(){
    func3();
}

init();