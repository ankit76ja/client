import React,{ useEffect, useRef } from 'react';
import ScrollToBottom  from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css'
import ReactScrollableFeed from 'react-scrollable-feed'
const Messages = ({messages, name}) =>  {
    // const el = useRef(null);

    // useEffect(() => {
    //     console.log(el);
    //     el.current.scrollIntoView({ behavior: 'smooth' });
    // },[messages]);
    

    return (
        <ReactScrollableFeed>
            { messages.map((message,i) => <div key={i}><Message name={name} message={message} messages={messages}/></div>) }
        </ReactScrollableFeed>
    )
}

export default Messages
