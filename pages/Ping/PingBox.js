import React, { useState } from 'react';

const PingBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'User 1', text: 'Hello!' },
    { sender: 'You', text: 'Hi there!' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    const newMessage = { sender: 'You', text: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="ping-box">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="ping-input">
        <textarea
          rows="3"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default PingBox;
