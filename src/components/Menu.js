import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Menu() {
  return (
    <section id="menu">
      {/* Search */}
      <section>
        <form className="search" method="get" action="#">
          <input type="text" name="query" placeholder="Search" />
        </form>
      </section>

      {/* Links */}
      <section>
        <ul className="links">
          <li>
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <h3>Team</h3>
              <p>Learn more about the brains behind this!</p>
            </Link>
          </li>
          <li>
            <Link to="/vision">
              <h3>Vision</h3>
            </Link>
          </li>
          <li>
            <Link to="/sponsorship">
              <h3>Sponsorship</h3>
            </Link>
          </li>
        </ul>
      </section>

      {/* Actions */}
      <section>
        <ul className="actions stacked">
          <li>
            <a href="#" className="button large fit">
              Donate Now
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Menu;