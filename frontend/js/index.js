// your code goes here.

import 'bootstrap/dist/css/bootstrap.min.css'
import { getJobList } from './api/jobs.js'
import { renderJob } from './api/jobs.js';

const jobList=document.querySelector("#searched-jobs");

getJobList().then((data)=>{
    console.log(data);
    if (data) {
        data.forEach((jobData) => {
            renderJob(jobData, jobList);
        });
    } else {
        jobList.innerHTML+=`<div class="text-dark">No Results Found</div>`;
    }
})

