import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
