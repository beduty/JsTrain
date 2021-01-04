// 구글 맵 API String 끝 쪽에 보면 initMap()함수가 있다. 이는 콜백함수다. 
// 알아서 실행되기 떄문에 .js에서는 initMap()함수를 호출하지 않아도 된다!
function initMap(){
    const loc = {lat : 42.361145, lng : -71.057083};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom:14,
        center : loc
    })

    const marker = new google.maps.Marker(
        {
            position : loc, 
            map:map
        }
    );
}

// Sticky menu background
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
})

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop : $(hash).offset().top -100
            },
            800
        );
    }
});