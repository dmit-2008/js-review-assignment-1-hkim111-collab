// your code goes here.

const BASE_URL = "http://localhost:3000"

const getJobList=(url=`${BASE_URL}/jobs/`)=>{
    return fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        return data;
    })
}

export {getJobList}