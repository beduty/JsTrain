class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }

    showProfile(user){
        this.profile.innerHTML = '';

        console.log(user);

        const divImg = document.createElement('div');
        divImg.className = "prof-img flex-vert";
        
        const img = document.createElement('img');
        img.src = user.avatar_url;
        
        const btn = document.createElement('button');
        btn.innerHTML = `<a href=${user.html_url} target="_blank">View Profile </a>`;

        divImg.appendChild(img);
        divImg.appendChild(btn);
        this.profile.appendChild(divImg);


        const divProf = document.createElement('div');
        divProf.className = "prof-info";
        divProf.innerHTML =`
            <div>
                <span class="badge bg-blue">Public Repos : ${user.public_repos}</span>
                <span class="badge bg-gray">Public Gists : ${user.public_gists}</span>
                <span class="badge bg-green">Followers : ${user.followers}</span>
                <span class="badge bg-teal">Following : ${user.following}</span>
            </div>
            <ul>
                <li><div class="prof-info-li">Company : ${user.company}</div></li>
                <li><div class="prof-info-li">Website/Blog : ${user.blog}</div></li>
                <li><div class="prof-info-li">Location : ${user.location}</div></li>
                <li><div class="prof-info-li">Member Since : ${user.created_at}</div></li>
            </ul>
        `;
        this.profile.appendChild(divProf);
    }

    showRepos(repos){
        const container = document.getElementById("repos_container");
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card repo-card">
                    <span><a href=${repo.html_url} target="_blank">${repo.name}</a></span>
                    <div>
                        <span class="badge bg-blue">Stars : ${repo.stargazers_count}</span>
                        <span class="badge bg-gray">Watchers : ${repo.watchers}</span>
                        <span class="badge bg-green">Forks : ${repo.forks}</span>
                    </div>
                </div>
            `;
        });
        console.log(output);
        container.innerHTML = output;
    }

    showAlert(message, className){
        const container = document.getElementById("container");
        const userInput = document.getElementById("user-input");
        const alert = document.createElement('div');
        alert.className = className;
        alert.innerHTML = message;
        container.insertBefore(alert,userInput);

        setTimeout(()=>{
            alert.remove();
        }, 1000);
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}