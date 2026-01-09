import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function addTodo() {
    if (input.trim() === '') return

    setTodos([...todos, input])
    setInput('')
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="max-w-md w-full p-6 bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Opdracht 8 - To Do
      </h1>

      {/* Input + knop */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nieuwe taak..."
          className="flex-1 p-2 rounded bg-gray-700 text-white outline-none"
        />
        <button
          onClick={addTodo}
          className="px-4 bg-blue-600 rounded hover:bg-blue-700"
        >
          Voeg toe
        </button>
      </div>

      {/* Lijst */}
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 mb-2 bg-gray-700 rounded"
          >
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-400 hover:text-red-500"
            >
              Verwijder
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
