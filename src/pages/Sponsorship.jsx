import React from "react";

function Sponsorship() {
     return (
          <div className="sponsorship-page">
               <main className="sponsorship-main">
                    {/* Hero Section */}
                    <header
                         className="hero"
                         style={{
                              background:
                                   "url('assets/images/banner.jpg') center/cover no-repeat",
                              color: "white",
                              textAlign: "center",
                              padding: "6rem 1rem",
                         }}
                    >
                         <h1
                              style={{
                                   color: "maroon",
                                   fontSize: "3rem",
                                   marginBottom: "1rem",
                              }}
                         >
                              Sponsor CSUN NSBE
                         </h1>

                         <p
                              style={{
                                   color: "maroon",
                                   fontSize: "1.2rem",
                                   maxWidth: "700px",
                                   margin: "0 auto",
                              }}
                         >
                              Empowering the next generation of Black engineers through
                              education, exposure, and leadership.
                         </p>
                    </header>

                    {/* Why Sponsor */}
                    <section className="section">
                         <h2>Why Sponsor Us?</h2>

                         <p style={{ color: "maroon", fontSize: "1.1rem" }}>
                              By sponsoring the CSUN Chapter of NSBE, you’re directly investing
                              in a brighter future. Your support helps fund student scholarships,
                              national conferences, STEM outreach, and professional development
                              workshops.
                         </p>
                    </section>

                    {/* Sponsorship Tiers */}
                    <section className="section">
                         <h2>Sponsorship Tiers</h2>

                         <div className="cards">
                              <div className="card bronze-tier">
                                   <h3>Bronze</h3>
                                   <ul>
                                        <li>Logo on website</li>
                                        <li>Social media mention</li>
                                   </ul>
                                   <strong>$250+</strong>
                              </div>

                              <div className="card silver-tier">
                                   <h3>Silver</h3>
                                   <ul>
                                        <li>All Bronze benefits</li>
                                        <li>Logo on event materials</li>
                                        <li>Invitation to events</li>
                                   </ul>
                                   <strong>$500+</strong>
                              </div>

                              <div className="card gold-tier">
                                   <h3>Gold</h3>
                                   <ul>
                                        <li>All Silver benefits</li>
                                        <li>Featured sponsor at events</li>
                                        <li>Present to NSBE members</li>
                                   </ul>
                                   <strong>$1000+</strong>
                              </div>
                         </div>
                    </section>

                    {/* Become a Sponsor */}
                    <section className="section">
                         <h2>Become a Sponsor</h2>

                         <p>
                              Want to support us? Reach out at
                              <a href="mailto:nsbecsun@gmail.com">
                                   {" "}
                                   nsbecsun@gmail.com
                              </a>{" "}
                              or donate below.
                         </p>

                         <div className="cta">
                              <a href="#" className="button-maroon">
                                   Donate Now
                              </a>
                         </div>
                    </section>

                    {/* Sponsors */}
                    <section className="section">
                         <h2>Thank You to Our Sponsors</h2>

                         <p>
                              We are incredibly grateful to our partners who make our mission
                              possible.
                         </p>
                    </section>
               </main>
          </div>
     );
}

export default Sponsorship;