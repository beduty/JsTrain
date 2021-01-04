function easyHTTP(){
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    this.http.onload = ()=>{
        if(this.http.status === 200){
            callback(this.http.responseText);
        }
        else{
            callback('Error: ' + this.http.status)
        }
    }
    this.http.send();
}

easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    this.http.onload = ()=>{
        if(this.http.status === 200){
            callback('Post Delete');
        }
        else{
            callback('Error: ' + this.http.status)
        }
    }
    this.http.send();
}