const tiers = [
  {
    name: "Bronze",
    price: "$500+",
    benefits: ["Logo on website", "Social media shoutout"],
  },
  {
    name: "Silver",
    price: "$1,000+",
    benefits: ["Logo on website", "Social media shoutout", "Event recognition"],
  },
  {
    name: "Gold",
    price: "$2,500+",
    benefits: [
      "Logo on website",
      "Social media shoutout",
      "Event recognition",
      "Speaking opportunity",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "$5,000+",
    benefits: [
      "Logo on website",
      "Social media shoutout",
      "Event recognition",
      "Speaking opportunity",
    ],
  },
];

const otherWaysToPartner = [
  { title: "Mentorship", description: "Guide and inspire our members." },
  { title: "Internships", description: "Provide real-world experience." },
  { title: "Workshops", description: "Share knowledge and skills." },
  { title: "Donations", description: "Directly support our programs and events." },
];

function Sponsorship() {
  return (
    <div>
      <section className="bg-black px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold">Partner With Purpose</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Invest in the future of Black engineers. Your support empowers students and
          strengthens communities.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-8 text-center text-2xl font-bold text-maroon">Sponsorship Tiers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? "rounded-lg border-2 border-gold bg-white p-6 shadow-lg"
                  : "rounded-lg border border-gray-200 bg-white p-6"
              }
            >
              <h3 className="text-lg font-bold text-maroon">{tier.name}</h3>
              <p className="mb-4 text-2xl font-extrabold">{tier.price}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="text-maroon">&#10003;</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-maroon">Other Ways to Partner</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherWaysToPartner.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-5 text-center shadow-sm">
                <h3 className="mb-1 font-semibold text-maroon">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maroon px-6 py-10 text-center text-white">
        <h2 className="mb-4 text-xl font-bold">Let&apos;s build the future together.</h2>
        
          <a href="mailto:csun.nsbe@my.csun.edu"
          className="inline-block rounded bg-white px-6 py-3 font-semibold text-maroon hover:bg-gray-100 transition-colors"
        >
          Become a Sponsor
        </a>
      </section>
    </div>
  );
}

export default Sponsorship;