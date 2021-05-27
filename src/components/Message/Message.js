import React from 'react'
import './Message.css'

const Message = ({ message : {user, text}, name }) =>  {
    let isCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
    isCurrentUser = user === trimmedName ? true : false;
    return (
        isCurrentUser ? (
            <div className="messageContainer justifyEnd">
                 <p className="userName">{user}</p>
                 <div className="messageBox darkBackground">
                    <p className="messageText colorLight">{text}</p>
                </div>
            </div>
        ):
        (
            <div className="messageContainer justifyStart">
                <div className="messageBox lightBackground">
                    <p className="messageText colorDark">{text}</p>
                </div>
                
                <p className="userName">{user}</p>
            </div>
        )
    )
}

export default Message
