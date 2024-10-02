// your code goes here.

const BASE_URL = "http://localhost:3000"

const getJobList=(url=`${BASE_URL}/jobs/`)=>{
    return fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        return data;
    })
}

const renderJob = (jobData, listElement) => {
    const list = document.createElement('li');
    list.className = 'job-card card my-1';
    list.style.width = '18rem';
  
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.textContent = jobData.company;
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = jobData.title;
  
    const location = document.createElement('h6');
    location.className = 'card-subtitle mb-2 text-body-secondary';
    location.textContent = jobData.location;
  
    const date = document.createElement('h6');
    date.className = 'card-subtitle mb-2 text-body-secondary';
    date.textContent = `Posted ${jobData.date_posted}`;
  
    const button = document.createElement('button');
    button.className = 'btn btn-primary view-job-button';
    button.setAttribute('job-data-id', jobData.id);
    button.textContent = 'View Job';
  
    cardBody.appendChild(title);
    cardBody.appendChild(location);
    cardBody.appendChild(date);
    cardBody.appendChild(button);
    
    list.appendChild(cardHeader);
    list.appendChild(cardBody);
    
    listElement.appendChild(list);
}

const fetchJobDetail = (id) => {
  return fetch(`${BASE_URL}/jobs/${id}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Not found');
          }
          return response.json();
      });
}

const renderJobDetail=(jobDetailData,listDetailElement)=>{
  listDetailElement.innerHTML+=`<div class="card">
  <div class="card-body">
    <h3 class="card-title">${jobDetailData.title}</h5>
    <h4 class="card-subtitle mb-2 text-body-secondary pb-3">${jobDetailData.company}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary ">${jobDetailData.location}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary pb-3">${jobDetailData.date_posted}</h6>
   
    <h5 class="card-subtitle mb-2">Description</h5>
    <p class="card-text">${jobDetailData.description}</p>
    <h5 class="card-subtitle mb-2">Qualifications</h5>
    <p class="card-text">${jobDetailData.qualifications}</p>
    <button class="btn btn-success save-job">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
      </svg>
      Save Job
    </button>
  </div>
</div>`
}

export async function fetchJobs(job) {
  const url = `${BASE_URL}/jobs?q=${encodeURIComponent(job)}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Not found');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}

export function displayJobDetail(data){
    const output=document.getElementById("weatherOutput");
    output.innerHTML=`<div class="card">
    <div class="card-body">
      <h3 class="card-title">JOB TITLE HERE</h5>
      <h4 class="card-subtitle mb-2 text-body-secondary pb-3">JOB COMPANY HERE</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary ">JOB LOCATION HERE</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary pb-3">Posted JOB POSTED DATE HERE (FORMATTED)</h6>
     
      <h5 class="card-subtitle mb-2">Description</h5>
      <p class="card-text">JOB DESCRIPTION HERE</p>
      <h5 class="card-subtitle mb-2">Qualifications</h5>
      <p class="card-text">JOB QUALIFICATIONS HERE</p>
      <button class="btn btn-success save-job">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
        Save Job
      </button>
    </div>
  </div>`
}

export {getJobList}
export {renderJob}
export {fetchJobDetail}
export {renderJobDetail}