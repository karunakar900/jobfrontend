import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './job.css';

const JobDetails = () => {

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/Addjobdetails');
    }

    return (
        <div className='table-container'>
            <h1 className='head'>JOBS-PORTAL</h1>
            <button id="job" onClick={handleAdd}>AddJob</button>
            <Link to="/"><button className='logout1'>Logout</button></Link>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>| Jobid</TableCell>
                        <TableCell>| Jobtitle</TableCell>
                        <TableCell>| Experience</TableCell>
                        <TableCell>| SalaryRange</TableCell>
                        <TableCell>| Jobpriority</TableCell>
                        <TableCell>| Postedon</TableCell>
                        <TableCell>| status</TableCell>
                        <TableCell>| city</TableCell>
                        <TableCell>| state</TableCell>
                    </TableRow>
                    <TableBody>

                    </TableBody>
                </TableHead>
            </Table>
        </div>
    )
}

export default JobDetails;