import React from 'react';
import { FaRobot, FaMicrophoneAlt, FaRunning, FaPalette, FaGlobe, FaChess } from 'react-icons/fa';

const ClubsAndActivities = () => {
  const clubs = [
    {
      id: 1,
      name: "Robotics Club",
      description: "Exploring the future of AI and mechanical engineering through hands-on projects.",
      icon: <FaRobot />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Debate Society",
      description: "Honing public speaking skills and critical thinking through competitive debating.",
      icon: <FaMicrophoneAlt />,
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Sports Academy",
      description: "Developing teamwork and physical fitness through football, cricket, and athletics.",
      icon: <FaRunning />,
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "Arts & Crafts",
      description: "Unleashing creativity through painting, sculpture, and traditional design.",
      icon: <FaPalette />,
      color: "bg-pink-500",
    },
    {
      id: 5,
      name: "Science Explorer",
      description: "Conducting fun experiments and discovering the wonders of the universe.",
      icon: <FaGlobe />,
      color: "bg-cyan-500",
    },
    {
      id: 6,
      name: "Chess Club",
      description: "Mastering strategy and concentration in a competitive yet friendly environment.",
      icon: <FaChess />,
      color: "bg-amber-600",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
            Holistic Development
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content">
            Beyond <span className="text-primary">Academics</span>
          </h2>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club) => (
            <div 
              key={club.id} 
              className="group bg-base-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-base-300 flex flex-col items-start"
            >
              {/* Icon Circle */}
              <div className={`${club.color} text-white p-5 rounded-[20px] text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                {club.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                {club.name}
              </h3>
              <p className="text-base-content/60 leading-relaxed font-medium">
                {club.description}
              </p>

              {/* Subtle Learn More Link */}
              <button className="mt-6 text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsAndActivities;