import React, { useEffect, useState } from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji';

const Message = ({ message : {user, text, time}, name, messages }) =>  {
    let isCurrentUser = false;
    // const [minutesNow, setMinutesNow] = useState(Math.floor(new Date().getTime() / 60000))
    const [timeStamp, setTimeStamp] =  useState('');
    useEffect(()=>{
        setTimeStamp(calculateTime(time));
        setInterval(() => {
            setTimeStamp(calculateTime(time));
        }, 1 * 5000);
    },[messages])

    

    const calculateTime = (time) => {
        const timeNow = new Date().getTime() / 1000;
        const difference = timeNow - time;

        if(difference < 60)
            return 'a few seconds ago';
        else if(difference >= 60 && difference < 3600){
            return Math.floor(difference / 60) + ' minutes ago';
        }  
        else if(difference >= 3600)
            return Math.floor(difference / 3600) + ' hours ago'; 
    }
    
    const trimmedName = name.trim().toLowerCase();
    isCurrentUser = user === trimmedName ? true : false;
    return (
        isCurrentUser ? (
                <div className="messageContainer justifyEnd">
                    <p className="userName">{user}</p>
                    <div className="messageBox darkBackground">
                        <p className="messageText colorLight">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="message">{timeStamp}</p>

                </div>
           
            

        ):
        (
                <div className="messageContainer justifyStart">
                    <div className="messageBox lightBackground">
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>   
                    <p className="userName">{user}</p>
                    <p className="message messageTimeLeft">{timeStamp}</p>             
                </div>
        )
    )
}

export default Message
