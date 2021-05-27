import React from 'react'
import './Input.css';

const Input = ({message, setMessage, sendMessages}) => {
    return (
        <form className="messageForm">
            <input type="text" placeholder="Type a message" className="inputMessage" value={message} onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event)=> event.key === 'Enter' ? sendMessages(event): null}/>
            <button type="submit" className="sendButton" onClick={(event)=> sendMessages(event)}> SEND </button>
        </form>
    )
}

export default Input
