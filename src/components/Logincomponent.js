import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const Logincomponent = () => {

    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleloginemail = e => {
        setemail(e.target.value);
    }

    const handleloginpassword = e => {
        setpassword(e.target.value);
    }


    const handleloginsubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert("please fillout all the required fields..");

        }
        axios.post('https://jobportalbackend-ca02.onrender.com/login', {
            email: email,
            password: password

        })
            .then(res => {
                alert("loginned successfully!");
                setemail('');
                setpassword('');
                navigate("/jobdetails");

            })
            .catch(err => {
                console.log(err);
                alert("An error occurred Login.");
                setpassword('');
            });

    }


    return (
        <form>.
            <div className='login-container'>
                <h1 id="h4">Account-user</h1>
                <label htmlFor="email" id="label1">Email</label><br></br>
                <input type="text" value={email} id="p" onChange={handleloginemail} /><br></br>
                <label htmlFor="password" id="label1">password</label><br></br>
                <input type="password" value={password} id="p" onChange={handleloginpassword} /><br></br>
                <button onClick={handleloginsubmit} id="btn2">Login</button>
                <Link to="/register">signup</Link>
            </div>
        </form>
    )
}

export default Logincomponent;