import React from 'react';
import './LogOrSign.css'
import { LogOrSignPanel } from '../../Components/LogOrSignPanel';

export const LogOrSign =(props)=> {
    return (
        <div className="splashContainer">
            <div className="splashColLeft">
                <LogOrSignPanel/>
            </div>
            <div className='splashColRight'>
                <h1>Find Music</h1>
                <h1>Find Friends</h1>
            </div>
        </div>
    );
}

export default LogOrSign;