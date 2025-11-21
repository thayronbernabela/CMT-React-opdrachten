import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  );
}

export default MessageList;