import React, {useEffect,useState} from 'react';
import QueryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import './Chat.css';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const url = 'localhost:5000'

    const sendMessages = (event) =>{
        event.preventDefault();

        if(message)
            socket.emit('sendMessage',message, () => setMessage(message));
    }
    useEffect(() => {
        const {name, room} = QueryString.parse(location.search);
        
        socket = io(url)

        setName(name);
        setRoom(room);

        socket.emit('join',{name , room},(error)=>{
            console.log(error);
        });

        return ()=>{
            socket.emit('disconnected');
            socket.off();
        }

    },[url,location.search])

    useEffect(()=> {
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        })
    },[messages])

    console.log(messages)
    return( 
    <div className="outerBox">
        <div className="innerBox">
            <InfoBar/>
            <Messages messages={messages} name={name}/>
            <Input message={message} setMessage={setMessage} sendMessages={sendMessages}/>
        </div>

    </div>
    )

}

export default Chat
