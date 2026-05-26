import React from 'react';
import { FaGraduationCap, FaHandsHelping, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      title: "Academic Excellence",
      desc: "We strive to provide the highest quality of education, ensuring every student reaches their full potential.",
      icon: <FaGraduationCap />,
      color: "text-primary",
      borderColor: "border-primary",
      bgColor: "bg-primary/5"
    },
    {
      title: "Moral Integrity",
      desc: "Our focus is to build individuals with strong character, honesty, and deep-rooted moral values.",
      icon: <FaShieldAlt />,
      color: "text-secondary",
      borderColor: "border-secondary",
      bgColor: "bg-secondary/5"
    },
    {
      title: "Innovative Mindset",
      desc: "Encouraging creative thinking and leveraging technology to prepare students for the 21st-century challenges.",
      icon: <FaLightbulb />,
      color: "text-accent",
      borderColor: "border-accent",
      bgColor: "bg-accent/5"
    },
    {
      title: "Student Growth",
      desc: "We provide personalized care and guidance to nurture the unique talents of every individual student.",
      icon: <FaHandsHelping />,
      color: "text-info",
      borderColor: "border-info",
      bgColor: "bg-info/5"
    }
  ];

  return (
    <section className="py-24 bg-base-100 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            What we stand for
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-base-content mt-3 mb-4 uppercase">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, index) => (
            <div 
              key={index} 
              className={`group p-8 ${v.bgColor} rounded-[2.5rem] border-b-8 ${v.borderColor} shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500`}
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-2xl bg-base-100 shadow-md flex items-center justify-center text-3xl ${v.color} mb-8 group-hover:rotate-12 transition-transform duration-300`}>
                {v.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-base-content">
                {v.title}
              </h3>
              <p className="text-base-content/70 leading-relaxed font-medium italic">
                "{v.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;