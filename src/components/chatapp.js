import React, { useState } from 'react';
import './home.css'
import avatar from '../assets/Avatar_icon_green.svg.png'

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleMessageSend = () => {
        if (inputValue.trim() === '') return;

        const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
        const newMessage = {
            id: new Date().getTime(),
            user: randomUser,
            text: inputValue,
            likes: 0
        };

        setMessages(prevMessages => [...prevMessages, newMessage]);
        setInputValue('');
    };

    const handleLike = (id) => {
        setMessages(prevMessages => {
            return prevMessages.map(message => {
                if (message.id === id) {
                    return {
                        ...message,
                        likes: message.likes + 1
                    };
                }
                return message;
            });
        });
    };

    return (
        <div className="chat-app">
            <div className="message-thread">
                {messages.map(message => (
                    <div key={message.id} className="message">
                        <strong><img src={avatar}  className='avatar' alt='avatar'/>{message.user}</strong>:<br /> <div className='message-text-box'><span className=''>{message.text}</span></div>
                        <br /><button className="like-button" onClick={() => handleLike(message.id)}>Like</button>
                        <span className="like-count">{message.likes} Likes</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    className="input-field"
                    value={inputValue}
                    placeholder='Enter a message'
                    onChange={e => setInputValue(e.target.value)}
                />
                <button className="send-button" onClick={handleMessageSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatApp;
