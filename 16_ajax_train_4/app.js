const posts = [
    {title:'Post One', body : 'This is post one'},
    {title:'Post Two', body : 'This is post two'}
]

function createPost(post){
    setTimeout(function(){
        posts.push(post);
    }, 2000)
}
function getPost(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPostAsync(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000)
}

function getPostAsync(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function init()
{
    // {
    //     //싱크로나이즈 방법이다.
    //     // 2초 후에 추가된다. 
    //     createPost( {title:'Post Three', body : 'This is post three'});

    //     // 1초 후에 화면에 표시한다. --> Post Three가 표시되지 않는다.
    //     getPost(); 
    // }
    {
        // 비동기 ASync 방법이다. 
        createPostAsync( {title:'Post Three', body : 'This is post three'}, getPostAsync);
    }
}
init();