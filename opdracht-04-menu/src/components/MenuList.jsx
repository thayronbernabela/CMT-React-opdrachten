import React, { useState } from "react";
import menu from "../data.js";         
import MenuItem from "./MenuItem.jsx";

function MenuList() {
  const [gerechten, setGerechten] = useState(menu);

  return (
    <section className="menu-container">
      {gerechten.map((gerecht) => (
        <MenuItem
          key={gerecht.id}
          title={gerecht.title}
          price={gerecht.price}
          img={gerecht.img}
          desc={gerecht.desc}
        />
      ))}
    </section>
  );
}

export default MenuList;