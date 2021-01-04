const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}
];

// // 기존 
// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// ES6 Promise
function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error : Something went wrong');
            }
        }, 2000);
    });
}

// // 기존 
// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// ES6 Promise
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function init(){
    // 기존
    // createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

    // ES6 Promise
    createPost({title : 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(function(err){
        console.log(err);
    });
}

init();