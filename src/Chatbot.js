import React, { useState } from "react";

const Chatbot = ({ id, position, theme }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const positionStyle =
    position === "left" ? { left: "20px" } : { right: "20px" };
  const themeStyle =
    theme === "dark"
      ? { backgroundColor: "#333", color: "#fff" }
      : { backgroundColor: "#fff", color: "#333" };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `You said: ${input}`, user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div
      id={id}
      style={{
        position: "fixed",
        bottom: "20px",
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        ...positionStyle,
        ...themeStyle,
      }}
    >
      <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <h2 style={{ margin: 0 }}>Chatbot</h2>
      </div>
      <div style={{ height: "300px", overflowY: "auto", padding: "10px" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.user ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                background: message.user ? "#007bff" : "#f1f1f1",
                color: message.user ? "white" : "black",
                padding: "5px 10px",
                borderRadius: "10px",
                display: "inline-block",
              }}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          style={{ width: "70%", padding: "5px" }}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          style={{ width: "25%", marginLeft: "5%", padding: "5px" }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
