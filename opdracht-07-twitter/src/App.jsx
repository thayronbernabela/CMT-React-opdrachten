import { useState } from "react";
import CreateMessage from "./components/CreateMessage";
import MessageList from "./components/MessageList";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(newMessage) {
    setMessages([...messages, newMessage]);
  }

  return (
    <div className="app-container">
      <h1>Twieter</h1>

      <CreateMessage addMessage={addMessage} />

      <MessageList messages={messages} />
    </div>
  );
}

export default App;
