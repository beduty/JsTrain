class GitHub {
    constructor(){
        this.client_id = 'dc850ae947582bbf121e';
        this.client_secret = 'e2744e07979624d1c54f2abb595813848c37aef0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const profileResponse = await fetch(url);
        const profileData = await profileResponse.json();

        const urlRepo = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const repoResponse = await fetch(urlRepo);
        const repoData = await repoResponse.json();

        // repos와 함께 profileData를 Object로 전달한다.
        return {
            profile : profileData,
            repos : repoData
        }
    }

}