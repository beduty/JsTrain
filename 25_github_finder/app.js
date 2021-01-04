function loadEventListeners(){
    const github = new GitHub;
    const ui = new UI;

    // Search input event listener 
    const searchUser = document.getElementById("search-user");
    searchUser.addEventListener('keyup', (e)=>{
        const userText = e.target.value;
        if(userText !== ''){
            github.getUser(userText).then(data=>{
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', "card alert-danger");
                }else{
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
        }
        else{
            // Clear profile
            ui.clearProfile();
        }
    });
}


function init(){
    loadEventListeners();
}

init();