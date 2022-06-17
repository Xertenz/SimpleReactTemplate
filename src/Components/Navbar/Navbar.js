import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/style.css";
import "./navbar.css";

const Navbar = () => {
  const [showSideBar, setShownSideBar] = useState(false);
  const [navActive, setNavActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  });

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: navActive ? "#000" : "transparent",
      }}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div
          className="nav-menu"
          style={{ right: showSideBar ? "0px" : "-14rem" }}
        >
          <div className="hamburger" onClick={() => setShownSideBar(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setShownSideBar(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
