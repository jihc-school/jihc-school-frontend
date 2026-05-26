import React from 'react';

const HistoricalTimeline = () => {
  const journey = [
    {
      year: "1995",
      title: "The Foundation",
      desc: "Novus Horizon School started its humble journey with a handful of students and a vision for excellence.",
      badge: "Inception",
      align: "md:text-right"
    },
    {
      year: "2005",
      title: "Expanding Horizons",
      desc: "Moved to our current state-of-the-art campus, introducing advanced labs and digital facilities.",
      badge: "Campus Expansion",
      align: "md:text-left"
    },
    {
      year: "2015",
      title: "Academic Milestone",
      desc: "Achieved the 'Best School Award' for consecutive 100% board results and extracurricular success.",
      badge: "National Award",
      align: "md:text-right"
    },
    {
      year: "2026",
      title: "Digital Revolution",
      desc: "Launched AI-integrated smart learning and global partnership programs for 21st-century skills.",
      badge: "Modern Era",
      align: "md:text-left"
    }
  ];

  return (
    <section className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-base-content tracking-tighter uppercase mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Legacy</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-1 w-8 bg-primary rounded-full"></span>
            <p className="text-base-content/60 font-bold uppercase tracking-widest text-sm">Since 1995</p>
            <span className="h-1 w-8 bg-secondary rounded-full"></span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {journey.map((item, index) => (
              <li key={index} className="group">
                <div className="timeline-middle">
                  <div className="w-10 h-10 rounded-2xl bg-base-100 border-4 border-primary shadow-[0_0_20px_rgba(var(--p),0.3)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'} mb-16 px-6`}>
                  {/* Card with Gradient Border Effect */}
                  <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                    <div className="bg-base-200 rounded-[2rem] p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <time className="font-mono text-4xl font-black text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                        {item.year}
                      </time>
                      <h3 className="text-2xl font-bold mt-2 text-base-content">{item.title}</h3>
                      <div className="badge badge-primary badge-sm my-3 font-bold px-4 py-3">{item.badge}</div>
                      <p className="text-base-content/70 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
                {index !== journey.length - 1 && <hr className="bg-gradient-to-b from-primary to-secondary w-1 opacity-20" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HistoricalTimeline;