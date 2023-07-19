import React, { Fragment ,useEffect, useState} from 'react'
import './Index.scss'

import io from 'socket.io-client';

const socket = io('http://localhost:8080', { debug: true })

const Index = () => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
      socket.on('chatMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]); // Add received message to the state
      });
  
      return () => {
        socket.disconnect(); // Disconnect the socket when the component is unmounted
      };
    }, []);
  
    const handleSendMessage = (e) => {
      e.preventDefault();
  
      if (message.trim() !== '') {
        socket.emit('chatMessage', message); // Send the message to the server
        setMessage(''); // Clear the input field
      }
    };
  return (
    <Fragment>
        <div>
            {/* <Chat/> */}
      {/* <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form> */}
    </div>

    </Fragment>
  )
}

export default Index