import { motion } from "motion/react";
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
      icon: <FaUserGraduate />,
      description: "Growing every year",
    },
    {
      id: 2,
      label: "Expert Teachers",
      value: "45+",
      icon: <FaChalkboardTeacher />,
      description: "Highly qualified",
    },
    {
      id: 3,
      label: "Modern Labs",
      value: "12+",
      icon: <FaFlask />,
      description: "Practical learning",
    },
    {
      id: 4,
      label: "Success Rate",
      value: "100%",
      icon: <FaAward />,
      description: "In Board Exams",
    },
  ];

  return (
    <section className="py-16 bg-base-100 @[1580px]:px-0 px-4 md:px-6 lg:px-8">
      <div className="max-w-384 mx-auto ">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-base-content"
        >
          Our School at a <span className="text-primary">Glance</span>
        </motion.h2>

        {/* Stats Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: false, amount: 0.2 }}
              key={stat.id}
              className="card rounded-[2.5rem] bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
            >
              <div className="card-body items-center text-center">
                <div className="p-4 bg-base-100 rounded-full shadow-inner mb-2 text-secondary text-3xl">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
