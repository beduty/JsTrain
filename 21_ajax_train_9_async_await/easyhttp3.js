class EasyHTTP {
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    // // 아래의 함수와 동일한 내용이다. 
    // get(url){
    //     return new Promise((resolve, reject)=>{
    //         fetch(url).then(res=>res.json())
    //         .then(data=>resolve(data));
    //     });
    // }

    async post(url,data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }

    // // 아래의 함수와 동일한 기능이다. 
    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //       fetch(url, {
    //         method: 'POST',
    //         headers: {
    //           'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       })
    //       .then(res => res.json())
    //       .then(data => resolve(data))
    //       .catch(err => reject(err));
    //     });
    // }
    
   // Make an HTTP PUT Request
   async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const resData = await response.json();
    return resData;
  }

//   // 아래의 함수와 동일한 기능이다. 
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     });
//   }

  // Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const resData = await 'Resource Deleted...';
    return resData;
  }
//   // 아래의 함수와 동일한 기능이다. 
//     delete(url) {
//         return new Promise((resolve, reject) => {
//           fetch(url, {
//             method: 'DELETE',
//             headers: {
//               'Content-type': 'application/json'
//             }
//           })
//           .then(res => res.json())
//           .then(() => resolve('Resource Deleted...'))
//           .catch(err => reject(err));
//         });
//       }
}