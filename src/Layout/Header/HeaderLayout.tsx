import { useState } from "react";
import NavLists from "../../Components/nav-lists/NavLists";
import "./headerLayout.css";

type Props = {};

export default function HeaderLayout({}: Props) {
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
            <img src="/public/images/icon-close-menu.svg" alt="" />
          ) : (
            <img src="/public/images/icon-menu.svg" alt="" />
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
