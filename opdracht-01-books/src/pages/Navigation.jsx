import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <nav className="nav">
        <span className="nav__logo">BookStore</span>
        <div className="nav__links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
