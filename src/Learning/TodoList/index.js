import { useState } from "react";

function Learn() {

    //Get data
    const newJobs = JSON.parse(localStorage.getItem('jobs'))

    const [job, activeJob] = useState('')
    const [jobs, activeJobs] = useState(newJobs || [])
    const handleAddJob = function () {
        activeJobs(rest => {
            const newJob = [...rest, job]

            // save data  localStorage
            const newJson = JSON.stringify(newJob)
            localStorage.setItem('jobs', newJson)
            return newJob
        })
        activeJob('')
    }
    return (
        <div style={{ padding: 32 }}>
            <input
                value={job}
                onChange={e => activeJob(e.target.value)}

            />
            <button
                type="submit"
                onClick={handleAddJob}
            >Add</button>
            <ul>
                {
                    jobs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Learn;