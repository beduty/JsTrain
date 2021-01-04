document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt').then(function(res){
    return res.text();
  }).then(function(data){
    // console.log(data);
    document.getElementById('output').innerHTML = data;
  }).catch(function(err){
    console.log(err);
  });
}

// Get local json data
function getJson() {
  fetch('posts.json').then(function(res){
    return res.text();
  }).then(function(data){
    let output = '';
    const arrData = JSON.parse(data);
    arrData.forEach(element => {
      output += `<li>${element.body}</li>`
    });
    document.getElementById('output').innerHTML = output;
  }).catch(err=>{
    console.log(err);
  });
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users').then(res=>{return res.json()}
  ).then(datas=>{

    let output = '';
    datas.forEach(data=>{
      output += `<li>${data.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
}

