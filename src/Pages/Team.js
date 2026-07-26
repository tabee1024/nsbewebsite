import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/main.css";
import "./Team.css";

import eboardPhoto from "../images/eboardPHOTO.jpg";
import tabby2526 from "../images/tabby_ceb2526.jpg";
import sherry2526 from "../images/sherry_ceb2526.jpg";

const executiveBoards = [
  {
    id: "2025-26",
    label: "2025-2026",
    members: [
      {
        id: "tabitha-sulaiman",
        name: "Tabitha Sulaiman",
        position: "President",
        image: tabby2526,
      },
      {
        id: "sherifat-sole",
        name: "Sherifat Solebo",
        position: "Academic Excellence (A.E.X.) Chair",
        image: sherry2526,
      },
    ],
  },
];

function OfficerCard({ officer }) {
  return (
    <article className="officer-card">
      <img
        className="officer-image"
        src={officer.image}
        alt={`${officer.name}, ${officer.position}`}
        loading="lazy"
      />

      <div className="officer-information">
        <h3>{officer.name}</h3>
        <p>{officer.position}</p>
      </div>
    </article>
  );
}

function Team() {
  const [selectedYear, setSelectedYear] = useState("2025-26");

  const selectedBoard = executiveBoards.find(
    (board) => board.id === selectedYear
  );

  return (
    <div className="team-page">
      <header id="header">
        <h1>
          <Link to="/">Home</Link>
        </h1>

        <nav className="links" aria-label="Primary navigation">
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
      </header>

      <main className="team-main">
        <section className="team-heading-section team-container">
          <h1>Meet Our Executive Board</h1>
        </section>

        <section className="team-photo-section team-container">
          <img
            className="team-group-photo"
            src={eboardPhoto}
            alt="CSUN NSBE executive board"
          />
        </section>

        <section className="board-selector-section team-container">
          <label htmlFor="board-year">
            Select Executive Board Year:
          </label>

          <select
            id="board-year"
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
          >
            {executiveBoards.map((board) => (
              <option key={board.id} value={board.id}>
                {board.label} E-Board
              </option>
            ))}
          </select>
        </section>

        <section className="executive-board-section team-container">
          <h2>
            Chapter Executive Board{" "}
            <span>{selectedBoard.label}</span>
          </h2>

          <div className="officer-grid">
            {selectedBoard.members.map((officer) => (
              <OfficerCard key={officer.id} officer={officer} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Team;