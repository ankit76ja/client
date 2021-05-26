import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';
const Join = () => {
    const [name,setName] = useState('');
    const [room, setRoom] = useState('')
    return (
    <div className='outerContainer'>
        <div className='innerContainer'>
            <h1 className='heading'>Join</h1>
            <div><input placeholder='Name' className='inputBox' onChange={(event)=> setName(event.target.value)}/></div>
            <div><input placeholder='Room' className='inputBox mt-20' onChange={(event)=> setRoom(event.target.value)}/></div>
            <Link onClick={(event)=> (!name || !room) ? event.preventDefault(): null} to = {`/chat?name=${name}&room=${room}`}><button className='button mt-20' type='submit'>Sign In</button></Link>
        </div>

    </div>
    
    )    
}

export default Join
