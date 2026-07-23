import { useState } from "react";
import "./ManageJobs.css";

function ManageJobs() {

  const [job, setJob] = useState("");

  const [jobs, setJobs] = useState([
    "Software Developer",
    "Web Developer",
    "Data Analyst"
  ]);

  const addJob = () => {

    if(job.trim() === "") return;

    setJobs([...jobs, job]);

    setJob("");
  };

  const deleteJob = (index) => {

    const updatedJobs = jobs.filter(
      (_, i) => i !== index
    );

    setJobs(updatedJobs);
  };

  return (
    <div className="manage-jobs">

      <h1>Manage Jobs</h1>

      <div className="job-form">

        <input
          type="text"
          placeholder="Enter Job Name"
          value={job}
          onChange={(e)=>setJob(e.target.value)}
        />

        <button onClick={addJob}>
          Add Job
        </button>

      </div>

      <div className="job-list">

        {jobs.map((item,index)=>(
          <div className="job-item" key={index}>

            <h3>{item}</h3>

            <button
              onClick={()=>deleteJob(index)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ManageJobs;