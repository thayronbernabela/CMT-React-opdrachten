import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";

function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "De zeven zussen",
      author: "Lucinda Riley",
      img: "/images/book-1.png",
    },
    {
      id: 2,
      title: "Harry Potter en de Steen der Wijzen",
      author: "J.K. Rowling",
      img: "/images/book-2.png",
    },
    {
      id: 3,
      title: "Het diner",
      author: "Herman Koch",
      img: "/images/book-3.png",
    },
  ]);

  return (
    <section className="books">
      {/* opdracht: totaal aantal boeken tonen */}
      <BookCounter aantal={books.length} />

      {/* opdracht: alle boeken uit de array tonen */}
      <div className="books__grid">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            img={book.img}
          />
        ))}
      </div>
    </section>
  );
}

export default BookList;
