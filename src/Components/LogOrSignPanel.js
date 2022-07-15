import React, { useState } from 'react';
import {logInUser, createUser} from "../utils/fetch";

export function LogOrSignPanel({ user, setUser }) {

    const [logSwitch, setlogSwitch]=useState(true);

    const [username, setUsername]=useState();
    const [email, setEmail]=useState();
    const [password,setPassword]=useState();

    const submitHandlerLogin = (e)=>{
        console.log("logInHandle - hit")
        e.preventDefault();
        logInUser(username, password);
    }

    const submitHandlerCreate = (e)=>{
        console.log("createHandle - hit")
        e.preventDefault();
        createUser(username, email, password);
    }
    const changeLogSign =(e)=>{
        setlogSwitch(e)
    }

    return (
        <>
        {logSwitch ?
            <form className="logContainer" onSubmit={submitHandlerLogin}>
                <h1>Gig Buddy</h1>
                <h2>Log In</h2>
                <div className="inputContainer">
                    <h3>Username</h3>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="inputContainer">
                    <h3>Password</h3>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="inputContainer">
                    <button className="submitBtn" type="submit">Submit</button>
                </div>
                <div className='inputContainer'>
                    <h3>Don't have an account?</h3>
                    <button className="logSwitchLogBtn" onClick={(e)=>changeLogSign(false)}>Sign Up</button>
                </div>
            </form>
        :
        <form className="logContainer" onSubmit={submitHandlerCreate} >
            <h1>Gig Buddy</h1>
            <h2>Sign Up</h2>
            <div className="inputContainer">
                <h3>Username</h3>
                <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="inputContainer">
                <h3>Email</h3>
                <input input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="inputContainer">
                <h3>Password</h3>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="inputContainer">
                    <button className="submitBtn" type="submit">Submit</button>
            </div>
            <div className='inputContainer'>
                <h3>Already have an account?</h3>
                <button className="logSwitchLogBtn" onClick={(e)=>changeLogSign(true)}>Log In</button>
            </div>
        </form>
        }
        </> 
    );
}

export default LogOrSignPanel;