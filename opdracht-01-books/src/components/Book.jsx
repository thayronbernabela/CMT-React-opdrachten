import { useState } from "react";

function Book({ title, author, img }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  function verhoogTeller() {
    setAantalKeerGelezen((prev) => prev + 1);
  }

  return (
    <article className="book">
      <img className="book__image" src={img} alt={title} />
      <h2 className="book__title">{title}</h2>
      <p className="book__author">{author}</p>

      <button className="book__button" onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </article>
  );
}

export default Book;
