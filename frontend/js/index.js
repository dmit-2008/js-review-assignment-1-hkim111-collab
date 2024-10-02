// your code goes here.

import 'bootstrap/dist/css/bootstrap.min.css'
import { getJobList } from './api/jobs.js'
import { renderJob } from './api/jobs.js';
import { fetchJobs } from './api/jobs.js';
import { fetchJobDetail } from './api/jobs.js';
import { renderJobDetail } from './api/jobs.js';

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

document.getElementById("search-button").addEventListener("click", async (event) => {
    event.preventDefault();
    
    const job = document.getElementById("query-input").value.trim();
    
    jobList.innerHTML = "";

    if (job) {
        try {
            const data = await fetchJobs(job);
            console.log("Search results:", data);
            if (data && data.length > 0) {
                data.forEach((jobData) => {
                    renderJob(jobData, jobList);
                });
            } else {
                jobList.innerHTML = `<div class="text-dark">No Results Found</div>`;
            }
        } catch (error) {
            console.error("Error", error);
        }
    }
});

jobList.addEventListener("click", async (event) => {
    if (event.target.classList.contains("view-job-button")) {
        event.preventDefault();
        const jobDetailId = event.target.getAttribute('job-data-id');
        try {
            const jobDetail = await fetchJobDetail(jobDetailId);
            const jobDetailCard = document.getElementById("job-details-card");
            jobDetailCard.innerHTML = "";
            renderJobDetail(jobDetail, jobDetailCard);
        } catch (error) {
            console.error("Error", error);
        }
    }
});