import { useState } from "react";
import "./navLists.css";
import todo from "/images/icon-todo.svg";
import calendar from "/images/icon-calendar.svg";
import reminders from "/images/icon-reminders.svg";
import planning from "/images/icon-planning.svg";
import arrowUp from "/images/icon-arrow-up.svg";
import arrowDown from "/images/icon-arrow-down.svg";

export default function NavLists() {
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  console.log(isFeaturesOpen);
  return (
    <ul className="list-container">
      <li
        className="list-item dropdown"
        onMouseEnter={() => setFeaturesOpen(true)}
        onMouseLeave={() => setFeaturesOpen(false)}
      >
        <div
          className="menu-item"
          onClick={() => setFeaturesOpen(!isFeaturesOpen)}
        >
          Features
          <img
            className="icon-nav"
            src={isFeaturesOpen ? arrowUp : arrowDown}
            alt={isFeaturesOpen ? "open icon" : "close icon"}
          />
        </div>
        {isFeaturesOpen && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <img src={todo} alt="todo" />
              <h5>Todo List</h5>
            </li>
            <li className="dropdown-item">
              <img src={calendar} alt="calendar" />
              <h5>Calender</h5>
            </li>
            <li className="dropdown-item">
              <img src={reminders} alt="reminder" />
              <h5>Reminders</h5>
            </li>
            <li className="dropdown-item">
              <img src={planning} alt="planning" />
              <h5>Planning</h5>
            </li>
          </ul>
        )}
      </li>

      <li
        className="list-item dropdown"
        onMouseEnter={() => setCompanyOpen(true)}
        onMouseLeave={() => setCompanyOpen(false)}
      >
        <div
          onClick={() => setCompanyOpen(!isCompanyOpen)}
          className="menu-item"
        >
          Company
          <img
            className="icon-nav"
            src={isCompanyOpen ? arrowUp : arrowDown}
            alt={isCompanyOpen ? "open icon" : "close icon"}
          />
        </div>
        {isCompanyOpen && (
          <ul className="dropdown-menu">
            <li className="dropdown-item-company">History</li>
            <li className="dropdown-item-company">Our Team</li>
            <li className="dropdown-item-company">Blog</li>
            <li>vase kole omr khandehat pelane</li>
          </ul>
        )}
      </li>

      <li className="list-item">Careers</li>
      <li className="list-item">About</li>
    </ul>
  );
}
