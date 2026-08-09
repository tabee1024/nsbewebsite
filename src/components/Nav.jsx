import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/team", label: "Team" },
  { to: "/vision", label: "Vision" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  return (
    <header id="header">
      <h1>
        <Link to="/">Home</Link>
      </h1>

      <nav className="links" aria-label="Primary navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                style={({ isActive }) => (isActive ? { color: "maroon" } : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;