import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <nav className="links">
        <ul>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/vision">Vision</Link>
          </li>
          <li>
            <Link to="/sponsorship">Sponsorship</Link>
          </li>
        </ul>
      </nav>
      <nav className="main">
        <ul>
          <li className="search">
            <a className="fa-search" href="#search">
              Search
            </a>
            <form id="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </li>
          <li className="menu">
            <a className="fa-bars" href="#menu">
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;