import eboardPhoto from "../images/eboardPHOTO.jpg";
import tabby2526 from "../images/tabby_ceb2526.jpg";
import sherry2526 from "../images/sherry_ceb2526.jpg";
import avatarPlaceholder from "../images/avatar.jpg";

// TODO: swap avatarPlaceholder for real headshots as they're collected.
// Names/roles below are pulled from the 2025-26 Figma board mockup;
// confirm they're still accurate before publishing.
const executiveBoard = [
  { id: "tabitha-sulaiman", name: "Tabitha Sulaiman", role: "President", major: "Computer Science", image: tabby2526 },
  { id: "justin-smith", name: "Justin Smith", role: "External Vice-President", major: "Electrical Engineering", image: avatarPlaceholder },
  { id: "aichetou-camara", name: "Aichetou Camara", role: "Internal Vice-President", major: "Mechanical Engineering", image: avatarPlaceholder },
  { id: "chloe-joy-parker", name: "Chloe Joy Parker", role: "Secretary", major: "Comp. Eng. & Mechanical Eng.", image: avatarPlaceholder },
  { id: "emmanuel-wandji", name: "Emmanuel Wandji", role: "Treasurer", major: "Engineering Management Technology", image: avatarPlaceholder },
  { id: "uche-osuji", name: "Uche Osuji", role: "Marketing Committee Lead / Senator 1", major: "Computer Science", image: avatarPlaceholder },
  { id: "imran-kassim", name: "Imran Kassim", role: "Acting Membership Chair / Parliamentarian / Senator 2", major: "Computer Engineering", image: avatarPlaceholder },
  { id: "junior-munoko", name: "Junior Munoko", role: "Programs Chair", major: "Mechanical Engineering", image: avatarPlaceholder },
  { id: "sherifat-solebo", name: "Sherifat Solebo", role: "Academic Excellence (A.E.X.) Chair", major: "Computer Engineering", image: sherry2526 },
  { id: "naomih-black-gikanga", name: "Naomih Black-Gikanga", role: "Social Media Chair", major: "Computer Science", image: avatarPlaceholder },
];

function OfficerCard({ officer }) {
  return (
    <article className="text-center">
      <img
        className="mx-auto mb-3 h-28 w-28 rounded-full object-cover"
        src={officer.image}
        alt={`${officer.name}, ${officer.role}`}
        loading="lazy"
      />
      <h3 className="font-semibold text-maroon">{officer.name}</h3>
      <p className="text-sm text-gray-600">{officer.role}</p>
      <p className="text-xs text-gray-400">{officer.major}</p>
    </article>
  );
}

function Team() {
  return (
    <div>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold">Meet Our Executive Board</h1>
          <p className="mt-2 text-white/70">2025 - 26</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <img
          src={eboardPhoto}
          alt="CSUN NSBE executive board group photo"
          className="w-full rounded-lg object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {executiveBoard.map((officer) => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>
      </section>

      <section className="bg-maroon px-6 py-10 text-center text-white">
        <h2 className="mb-1 text-xl font-bold">Interested in joining the team?</h2>
        {/* TODO: point this at a real application link/form once one exists */}
        <p className="mb-4 text-white/80">Applications open Fall 2026!</p>
        
          <a href="mailto:csun.nsbe@my.csun.edu"
          className="inline-block rounded bg-white px-6 py-3 font-semibold text-maroon hover:bg-gray-100 transition-colors"
        >
          Join Our Team
        </a>
      </section>
    </div>
  );
}

export default Team;