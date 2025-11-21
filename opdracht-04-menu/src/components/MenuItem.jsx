import React from "react";

function MenuItem({ title, price, img, desc }) {
  return (
    <article className="menu-item">
      <img className="menu-item__image" src={img} alt={title} />
      <div className="menu-item__content">
        <header className="menu-item__header">
          <h2 className="menu-item__title">{title}</h2>
          <h3 className="menu-item__price">€ {price}</h3>
        </header>
        <p className="menu-item__desc">{desc}</p>
      </div>
    </article>
  );
}

export default MenuItem;
