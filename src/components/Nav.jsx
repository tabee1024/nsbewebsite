import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/team", label: "Team" },
  { to: "/vision", label: "Vision" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-wide">
          <span className="text-gold">CSUN</span>
          <span>&bull; NSBE</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gold border-b-2 border-gold pb-1"
                      : "text-white/90 hover:text-gold transition-colors pb-1"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              {/* TODO: point this to a real donation link/processor once one is set up */}
              <Link
                to="/sponsorship"
                className="rounded bg-maroon px-4 py-2 font-semibold hover:bg-maroon-light transition-colors"
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;