import { useState } from "react";

function Books() {
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Harry Potter en de Steen der Wijzen" },
    { id: 2, title: "De Hobbit" },
    { id: 3, title: "Het Achterhuis" },
    { id: 4, title: "The Hunger Games" },
    { id: 5, title: "De Da Vinci Code" },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Boeken</h1>

      <input
        type="text"
        placeholder="Zoek op titel..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
      />

      <ul>
        {filteredBooks.length === 0 && <p>Geen boeken gevonden.</p>}

        {filteredBooks.map((book) => (
          <li key={book.id} style={{ marginBottom: "8px" }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
