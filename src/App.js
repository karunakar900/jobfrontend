import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logincomponent from './components/Logincomponent';
import Signupcomponent from './components/Signupcomponent';
import Addjobdetails from './components/Addjobdetails';
import JobDetails from './components/JobDetails';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logincomponent />} />
                <Route path="/register" element={<Signupcomponent />} />
                <Route path="/JobDetails" element={<JobDetails />} />
                <Route path="/addjobdetails" element={<Addjobdetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
