import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [askedQuestions, setAskedQuestions] = useState(new Set());

  const handleSend = async () => {
    if (input.trim() && !askedQuestions.has(input.toLowerCase())) {
      const userMessage = { text: input, isUser: true };
      setMessages([...messages, userMessage]);
      setInput("");
      setAskedQuestions(new Set([...askedQuestions, input.toLowerCase()]));

      // Send the user message to the backend
      try {
        const response = await fetch('http://localhost:5001/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const botMessage = { text: data.message, isUser: false };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }
    } else if (askedQuestions.has(input.toLowerCase())) {
      alert("You've already asked this question. Please ask something else.");
    }
  };

  return (
    <div className="chatbot">
      <img src="/photos/bot-avatar.png" alt="Chatbot Avatar" className="bot-avatar" />
      <h2>AI Chatbot</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? "user" : "bot"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;