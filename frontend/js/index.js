// your code goes here.

import 'bootstrap/dist/css/bootstrap.min.css'
import { getJobList } from './api/jobs'

getJobList().then((data)=>{
    console.log(data);
})