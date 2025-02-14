import { useState } from "react";
import NavLists from "../../Components/nav-lists/NavLists";
import "./headerLayout.css";
import close from "/images/icon-close-menu.svg";
import iconMenu from "/images/icon-menu.svg";

export default function HeaderLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="header-layout">
      <h1 className="header-title">snap</h1>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={close} alt="" />
          ) : (
            <img src={iconMenu} alt="" />
          )}
        </div>

        <div className={`nav-content ${isMenuOpen ? "show" : ""}`}>
          <NavLists />
          <div className="nav-buttons">
            <button className="login-button button">Login</button>
            <button className="register-button button">Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
