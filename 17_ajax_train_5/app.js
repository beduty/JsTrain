// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// // Get Posts
// const http = new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
// });

// // Get Single Post
// const http = new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });


// // Create Data
// const data = {
//     title : 'Custom Post',
//     body : 'This is a custom post'
// }
// // Create Post
// const http = new easyHTTP;
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

// // Update Post
// const data = {
//     title : 'Custom Put',
//     body : 'This is a custom put'
// }
// // Create Post
// const http = new easyHTTP;
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });


// Delete Post
const http = new easyHTTP;
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }
    else{
        console.log(response);
    }
});