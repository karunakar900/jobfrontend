import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './job.css';


const Addjobdetails = () => {

    const navigate = useNavigate();

    const handlejobdetails = e => {
        e.preventDefault();
        console.log(jobdetails);
        axios
            .post(`http://localhost:3000/post`, {
                jobdetails,
            })
            .then(() => {
                alert("jobposted successfully");
                navigate("/jobDetails");
            })
            .catch((e) => alert("something went wrong"));


    }


    const [jobdetails, setjobdetails] = useState({

        Jobid: "",
        Jobtitle: "",
        ExperienceRange: "",
        SalaryRange: "",
        Jobpriority: "",
        status: "",
        city: "",
        state: ""
    })
    return (
        <div className='ad'>
            <h5 className='posting'>Add-Job-Details</h5>
            <form className='postjob'>
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, Jobid: e.target.value })
                    }
                    placeholder='JobId'
                    value={jobdetails.Jobid}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, Jobtitle: e.target.value })
                    }
                    placeholder='Jobtitle'
                    value={jobdetails.Jobtitle}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, ExperienceRange: e.target.value })
                    }
                    placeholder='ExperienceRange'
                    value={jobdetails.ExperienceRange}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, SalaryRange: e.target.value })
                    }
                    placeholder='SalaryRange'
                    value={jobdetails.SalaryRange}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, Jobpriority: e.target.value })
                    }
                    placeholder='Jobpriority'
                    value={jobdetails.Jobpriority}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, Postedon: e.target.value })
                    }
                    placeholder='Postedon'
                    value={jobdetails.Postedon}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, status: e.target.value })
                    }
                    placeholder='status'
                    value={jobdetails.status}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, city: e.target.value })
                    }
                    placeholder='city'
                    value={jobdetails.city}
                />
                <input
                    className='Add'
                    type="text"
                    onChange={(e) =>
                        setjobdetails({ ...jobdetails, state: e.target.value })
                    }
                    placeholder='state'
                    value={jobdetails.state}
                />

                <button id="details" onClick={handlejobdetails}>SubmitDetails</button>


            </form>
        </div>
    )
}

export default Addjobdetails;