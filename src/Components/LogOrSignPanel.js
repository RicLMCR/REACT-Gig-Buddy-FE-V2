import React, { useState } from 'react';

export function LogOrSignPanel() {

    const [logSwitch, setlogSwitch]=useState(true);

    const changeLogSign =(e)=>{
        setlogSwitch(e)
    }

    return (
        <>
        {logSwitch ?
            <div className="logContainer">
            <h1>Gig Buddy</h1>
            <h2>Log In</h2>
            <div className="inputContainer">
                <h3>Username</h3>
                <input placeholder='username'/>
            </div>
            <div className="inputContainer">
                <h3>Password</h3>
                <input placeholder='password'/>
            </div>
            <div className='inputContainer'>
                <h3>Don't have an account?</h3>
                <button className="logSwitchLogBtn" onClick={(e)=>changeLogSign(false)}>Sign Up</button>
            </div>
        </div>
        :
        <div className="logContainer">
            <h1>Gig Buddy</h1>
            <h2>Sign Up</h2>
            <div className="inputContainer">
                <h3>Username</h3>
                <input placeholder='username'/>
            </div>
            <div className="inputContainer">
                <h3>Email</h3>
                <input placeholder='email'/>
            </div>
            <div className="inputContainer">
                <h3>Password</h3>
                <input placeholder='password'/>
            </div>
            <div className='inputContainer'>
                <h3>Already have an account?</h3>
                <button className="logSwitchLogBtn" onClick={(e)=>changeLogSign(true)}>Sign Up</button>
            </div>
        </div>
        }
        </> 
    );
}

export default LogOrSignPanel;