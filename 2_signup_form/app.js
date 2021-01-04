const btnEnter = document.querySelector(".banner__btn");
const btnClose = document.querySelector(".form__xbtn");

function handleBannerEnter(){
    document.querySelector(".banner").style.display = "none";
    // document.querySelector(".form").style.opacity = "1";
    // document.querySelector(".form").style.visibility = "visible";
    document.querySelector('.form').style.cssText = 'opacity : 1; visibility : visible';
    document.querySelector(".bg").style.background = '#cc683c'


}

function handleBannerClose(){
    document.querySelector(".banner").style.display = "flex";
    document.querySelector(".form").style.opacity = "0";
    document.querySelector(".form").style.visibility = "hidden";
    document.querySelector(".bg").style.cssText 
    = "background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(images/bg1.jpeg) no-repeat; background-size: cover;";
}

function init()
{
    btnEnter.addEventListener("click" , handleBannerEnter)
    btnClose.addEventListener("click" , handleBannerClose)
}

init();