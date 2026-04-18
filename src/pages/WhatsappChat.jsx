import React, { useState, useEffect, useRef } from "react";
import "./WhatsappChat.css";

const WhatsappChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to Technowin! How can we help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simple bot replies
  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("window"))
      return "We provide high-quality uPVC windows with durability and insulation 👍";
    if (msg.includes("door"))
      return "Our uPVC doors are strong, stylish, and weather-resistant 🚪";
    if (msg.includes("price"))
      return "Please contact us at 9061317516 for pricing details 📞";
    if (msg.includes("location"))
      return "We are located in Kannur, Kerala 📍";
    
    return "Thanks for your message! Our team will contact you soon 😊";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botMsg = { text: getBotReply(input), sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chat-page">

      {/* Header */}
      <div className="chat-header">
        <h3>Technowin Support</h3>
        <span>Online</span>
      </div>

      {/* Chat Body */}
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default WhatsappChat;