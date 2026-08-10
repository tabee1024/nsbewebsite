import React from "react";
import "../assets/css/main.css"; // Reference your main UI styling
import "../assets/css/fontawesome-all.min.css"; // Reference your noscript styling
import csunlandscape from "../images/FORNSBEcsunlandscapepic.jpg"
import eboard from "../images/eboardPHOTO.jpg"

function Home() {
  return (
    <div id="wrapper" className="is-preload">
      <div id="main">
        <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
          <img
            src={csunlandscape}
            alt="CSUN NSBE Landscape"
            style={{
              width: "100vw",
              maxWidth: "100vw",
              height: "auto",
              display: "block",
              margin: 0,
              padding: 0,
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2em",
              fontWeight: "bold",
              textShadow: "4px 4px 8px rgba(0,0,0,0.9)",
              textAlign: "center",
              width: "90%",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                color: "gold",
                fontSize: "1.5em",
                fontWeight: "bold",
                marginBottom: "0.5em",
                marginTop: "-7em",
              }}
            >
              California State University - Northridge Chapter
            </p>
            <h1
              style={{
                color: "white",
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: "2.6em",
                fontWeight: "bold",
                marginTop: 0,
                textTransform: "none",
                letterSpacing: "normal",
              }}
            >
              National Society of Black Engineers
            </h1>
          </div>
        </div>

        <h2 style={{ marginTop: "5em", fontSize: "2em" }}>Our Mission</h2>
        <div style={{ display: "flex", alignItems: "stretch", width: "100%", minHeight: "260px" }}>
          <div
            style={{
              flex: "1 1 40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "2em",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.5em" }}>
              The National Society of Black Engineers (NSBE), is a 501(c)(3) nonprofit organization that is owned and
              managed by its members. With more than 30,000 members around the world, NSBE is one of the largest
              student-governed organizations based in the United States.
              <br />
              <br />
              NSBE's mission is "to increase the number of culturally responsible Black engineers who excel academically,
              succeed professionally, and positively impact the community."
            </p>
          </div>
          <div
            style={{
              flex: "1 1 60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={eboard}
              alt="NSBE E-Board"
              style={{
                width: "100%",
                maxWidth: "50vw",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
        <ul className="actions">
          <li>
            <a href="Vision.html" className="button" style={{ fontSize: ".7em", marginTop: "1em" }}>
              Learn More
            </a>
          </li>
        </ul>

        <div className="mini-posts"></div>
      </div>
    </div>
  );
}

export default Home;