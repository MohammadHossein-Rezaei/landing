import { useState } from "react";
import "./navLists.css";

type Props = {};

export default function NavLists({}: Props) {
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
            src={
              isFeaturesOpen
                ? "/images/icon-arrow-up.svg"
                : "/images/icon-arrow-down.svg"
            }
            alt={isFeaturesOpen ? "open icon" : "close icon"}
          />
        </div>
        {isFeaturesOpen && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <img src="/images/icon-todo.svg" alt="" />
              <h5>Todo List</h5>
            </li>
            <li className="dropdown-item">
              <img src="/images/icon-calendar.svg" alt="" />
              <h5>Calender</h5>
            </li>
            <li className="dropdown-item">
              <img src="/images/icon-reminders.svg" alt="" />
              <h5>Reminders</h5>
            </li>
            <li className="dropdown-item">
              <img src="/images/icon-planning.svg" alt="" />
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
            src={
              isCompanyOpen
                ? "/images/icon-arrow-up.svg"
                : "/images/icon-arrow-down.svg"
            }
            alt={isCompanyOpen ? "open icon" : "close icon"}
          />
        </div>
        {isCompanyOpen && (
          <ul className="dropdown-menu">
            <li className="dropdown-item-company">History</li>
            <li className="dropdown-item-company">Our Team</li>
            <li className="dropdown-item-company">Blog</li>
          </ul>
        )}
      </li>

      <li className="list-item">Careers</li>
      <li className="list-item">About</li>
    </ul>
  );
}
