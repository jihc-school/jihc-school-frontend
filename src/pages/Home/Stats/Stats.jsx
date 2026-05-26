import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFlask,
  FaAward,
} from "react-icons/fa";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      label: "Total Students",
      value: "1200+",
      icon: <FaUserGraduate className="text-3xl text-primary" />,
      description: "Growing every year",
    },
    {
      id: 2,
      label: "Expert Teachers",
      value: "45+",
      icon: <FaChalkboardTeacher className="text-3xl text-secondary" />,
      description: "Highly qualified",
    },
    {
      id: 3,
      label: "Modern Labs",
      value: "12+",
      icon: <FaFlask className="text-3xl text-accent" />,
      description: "Practical learning",
    },
    {
      id: 4,
      label: "Success Rate",
      value: "100%",
      icon: <FaAward className="text-3xl text-success" />,
      description: "In Board Exams",
    },
  ];

  return (
    <section className="py-16 bg-base-100 @[1580px]:px-0 px-4 md:px-6 lg:px-8">
      <div className="max-w-384 mx-auto ">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-base-content">
          Our School at a <span className="text-primary">Glance</span>
        </h2>

        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="card rounded-[2.5rem] bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
            >
              <div className="card-body items-center text-center">
                <div className="p-4 bg-base-100 rounded-full shadow-inner mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-base-content">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-primary/80 uppercase tracking-wide">
                  {stat.label}
                </p>
                <div className="text-xs opacity-60 italic mt-1">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
