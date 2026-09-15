import matador from "../images/admitted-day-matadors-banner-Web2.png";
import "../assets/css/fontawesome-all.min.css";

const goals = [
  { icon: "fa-users", title: "Ensure strong chapter representation at the NSBE Convention", desc: "through early planning, outreach, and logistical support." },
  { icon: "fa-briefcase", title: "Prepare members professionally", desc: "with resume workshops, mock interviews, and convention-readiness sessions." },
  { icon: "fa-dollar-sign", title: "Secure funding for convention participation", desc: "via fundraising, sponsorships, and campus partnerships." },
  { icon: "fa-user-graduate", title: "Strengthen connections with alumni", desc: "through mentorship programs, networking events, and professional panels." },
  { icon: "fa-chalkboard-teacher", title: "Expand career development resources", desc: "by offering workshops, resume reviews, and interview prep." },
  { icon: "fa-lightbulb", title: "Host more intentional, intricate, and engaging events", desc: "that offer deeper value and memorable experiences for members." },
  { icon: "fa-child", title: "Inspire the next generation of Black engineers", desc: "by mentoring NSBE Jr., hosting STEM outreach, and fostering early exposure to engineering." },
];

function Vision() {
  return (
    <div>
      <section
        className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.75)), url(${matador})`,
        }}
      >
        <div>
          <h1 className="text-4xl font-extrabold">Our Vision</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            To be a leading force in empowering Black engineers to build a better future.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 text-center">
        <h2 className="mb-3 text-2xl font-bold text-maroon">Our Mission</h2>
        <p className="mb-10 text-gray-600">
          NSBE&apos;s mission is &ldquo;to increase the number of culturally responsible Black
          engineers who excel academically, succeed professionally, and positively impact the
          community.&rdquo;
        </p>

        <h2 className="mb-3 text-2xl font-bold text-maroon">About CSUN-NSBE Chapter</h2>
        <p className="mb-10 text-gray-600">
          Founded in 1977, CSUN-NSBE is the preeminent organization for Black students pursuing
          STEM degrees at our college. CSUN-NSBE is a proud affiliate of Region Six, which spans
          over 13 states and is home to over 30 chapters. With over 15 active members, CSUN-NSBE
          accounts for about 33 members in total. Through the support of the national
          organization, the Andrew J. Anagnost College of Engineering and Computer Science, and
          corporate sponsorship, CSUN-NSBE supports Black STEM students by helping them develop
          socially, academically, and professionally.
        </p>

        <h2 className="mb-3 text-2xl font-bold text-maroon">Our Vision</h2>
        <p className="text-gray-600">
          In the spirit of excellence, NSBE envisions a world where Black engineers are
          recognized as leaders in their fields, driving innovation and creating positive change
          in their communities. As a greater part of this vision, the CSUN-NSBE Chapter is
          focused on the following goals:
        </p>
      </section>

      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <div key={goal.title} className="rounded-lg bg-white p-6 text-center shadow-sm">
              <i className={`fas ${goal.icon} mb-3 text-3xl text-maroon`} aria-hidden="true"></i>
              <p className="mb-1 font-semibold text-maroon">{goal.title}</p>
              <p className="text-sm text-gray-600">{goal.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Vision;