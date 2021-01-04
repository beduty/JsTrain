function handleStartBtn(){
    const banner = document.querySelector(".banner");
    banner.style.display = "none";
    
    const slideShow_Wrap = document.querySelector(".slideshow-wrapper");
    slideShow_Wrap.style.opacity = "1";
    slideShow_Wrap.style.visibility = "visible";
    
    const slideShow = document.querySelector(".slideshow");
    slideShow.style.animation = 'slideshow 24s infinite';
}

function init(){
    const startBtn = document.querySelector(".banner button");
    startBtn.addEventListener("click", handleStartBtn);
}
init();