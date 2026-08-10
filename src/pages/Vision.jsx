import matador from "../images/admitted-day-matadors-banner-Web2.png";
import "../index.css";
import "../App.css";
import "../assets/css/main.css"; // Reference your main UI styling
import "../assets/css/fontawesome-all.min.css"; // Reference your noscript styling

function Vision() {
  return (
    <div id="wrapper" className="vision-wrapper">
      {/* Main Banner */}
      <div id="main" style={{ position: "relative", width: "100%" }}>
        <img
          src={matador}
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
            transform: "translateX(-50%)"
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
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            textAlign: "center",
            width: "100%"
          }}
        >
          <h1 style={{
            color: "maroon",
            fontSize: "2.8em",
            fontWeight: "bold",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "0.5em",
            marginTop: "-4em"
          }}>CSUN-NSBE</h1>
          <h2 style={{
            color: "gold",
            fontSize: "1.4em",
            fontWeight: "bold",
            margin: "0 auto",
            width: "40%",
            textAlign: "center",
            marginBottom: "0.5em",
            marginTop: "-1em"
          }}>Our Vision</h2>
        </div>
      </div>

      {/* Mission Section */}
      <section style={{ textAlign: "center", margin: "2em 0" }}>
        <h2 style={{ color: "rgb(89,0,0)", fontSize: "2em" }}>Our Mission</h2>
        <p style={{ color: "maroon", fontSize: "1.5em", maxWidth: "800px", margin: "1em auto" }}>
          NSBE's mission is "to increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community."
        </p>

        <h2 style={{ color: "rgb(89,0,0)", fontSize: "2em", marginTop: "2em" }}>About CSUN-NSBE Chapter</h2>
        <p style={{ color: "maroon", fontSize: "1.5em", maxWidth: "900px", margin: "1em auto" }}>
          Founded in 1977, CSUN-NSBE is the preeminent organization for Black students pursuing STEM degrees at our college. Additionally, CSUN-NSBE is a proud affiliate of Region Six which spans over 13 states and is home to over 30 chapters. With over 15 active members, CSUN-NSBE accounts for about 33 members in total. Through the support of the national organization, the Andrew J. Anagnost College of Engineering and Computer Science at our college, and corporate sponsorship, CSUN-NSBE supports Black STEM students by helping them develop socially, academically, and professionally.
        </p>

        <h2 style={{ color: "maroon", fontSize: "2em", marginTop: "2em" }}>Our Vision</h2>
        <p style={{ color: "maroon", fontSize: "1.5em", maxWidth: "900px", margin: "1em auto" }}>
          In the spirit of excellence, NSBE envisions a world where Black engineers are recognized as leaders in their fields, driving innovation and creating positive change in their communities.
          <br /><br />
          As a greater part of this vision, the CSUN-NSBE Chapter is focused on the following goals:
        </p>
      </section>

      {/* Goals Section */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5em", marginTop: "2em" }}>
        {[
          { icon: "users", title: "Ensure strong chapter representation at the NSBE Convention", desc: "through early planning, outreach, and logistical support." },
          { icon: "briefcase", title: "Prepare members professionally", desc: "with resume workshops, mock interviews, and convention-readiness sessions." },
          { icon: "dollar-sign", title: "Secure funding for convention participation", desc: "via fundraising, sponsorships, and campus partnerships." },
          { icon: "user-graduate", title: "Strengthen connections with alumni", desc: "through mentorship programs, networking events, and professional panels." },
          { icon: "chalkboard-teacher", title: "Expand career development resources", desc: "by offering workshops, resume reviews, and interview prep." },
          { icon: "lightbulb", title: "Host more intentional, intricate, and engaging events", desc: "that offer deeper value and memorable experiences for members." },
          { icon: "child-reaching", title: "Inspire the next generation of Black engineers", desc: "by mentoring NSBE Jr., hosting STEM outreach, and fostering early exposure to engineering." },
        ].map((goal, index) => (
          <div key={index} style={{
            background: "#efe3e3",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
            padding: "1.5em",
            flex: "1 1 300px",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            textAlign: "center"
          }}>
            <i className={`fas fa-${goal.icon}`} style={{ fontSize: "3em", color: "maroon", marginBottom: "0.5em" }}></i>
            <strong style={{ color: "#590000", marginBottom: "0.5em" }}>{goal.title}</strong>
            <span style={{ color: "maroon" }}>{goal.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vision;
