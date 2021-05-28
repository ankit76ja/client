import React, {useEffect,useState, useRef} from 'react';
import QueryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import './Chat.css';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import { TextContainer } from '../TextContainer/TextContainer';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    

    const url = 'localhost:5000'

    const sendMessages = (event) =>{
        event.preventDefault();

        if(message)
            socket.emit('sendMessage',message, () => setMessage(''));
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
            socket.emit('disconnect');
            socket.off();
        }

    },[url,location.search])

    useEffect(()=> {
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        });
        socket.on('roomData', (room,users)=>{
            console.log(users);
            setUsers(users);
        })
        
    },[messages])
    

    console.log(messages)
    return( 
    <div className="outerBox">
        <div className="innerBox">
            <InfoBar room={room}/>
            <Messages messages={messages} name={name}  />
            <Input message={message} setMessage={setMessage} sendMessages={sendMessages}/>
        </div>
        {/* <TextContainer usersOnline = {users}/> */}
    </div>
    )

}

export default Chat
