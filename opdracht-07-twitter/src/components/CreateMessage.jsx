import { useState } from "react";

function CreateMessage({ addMessage }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    const newMessage = {
      id: crypto.randomUUID(),
      content: input,
      likes: 0,
    };

    addMessage(newMessage);
    setInput("");
  }

  return (
    <form className="create-message" onSubmit={handleSubmit}>
      <textarea
        placeholder="Wat gebeurt er?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
}

export default CreateMessage;
