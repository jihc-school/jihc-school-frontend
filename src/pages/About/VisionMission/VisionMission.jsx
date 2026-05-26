import React from 'react';
import { FaEye, FaBullseye, FaLightbulb } from 'react-icons/fa';

const VisionMission = () => {
  const data = [
    {
      id: 1,
      title: "Our Vision",
      icon: <FaEye />,
      desc: "To be a premier educational institution known for academic excellence and developing compassionate, responsible global citizens.",
      bgColor: "bg-primary",
      textColor: "text-primary-content",
      dotColor: "text-primary"
    },
    {
      id: 2,
      title: "Our Mission",
      icon: <FaBullseye />,
      desc: "To provide a dynamic learning environment that encourages curiosity, creativity, and critical thinking in every student.",
      bgColor: "bg-secondary",
      textColor: "text-secondary-content",
      dotColor: "text-secondary"
    },
    {
      id: 3,
      title: "Our Philosophy",
      icon: <FaLightbulb />,
      desc: "We believe in a holistic approach where values and technology go hand-in-hand to prepare students for the 21st century.",
      bgColor: "bg-accent",
      textColor: "text-accent-content",
      dotColor: "text-accent"
    }
  ];

  return (
    <section className="relative z-20 -mt-20 pb-20 @[1580px]:px-0 px-4 md:px-6 lg:px-8">
      <div className="max-w-384 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div 
              key={item.id}
              className="bg-base-100 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-3 group border border-base-200"
            >
              {/* Icon Box - DaisyUI Theme Colors */}
              <div className={`${item.bgColor} ${item.textColor} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-base-content mb-3 uppercase tracking-tight">
                {item.title}<span className={item.dotColor}>.</span>
              </h3>
              
              {/* Custom Accent Line */}
              <div className={`w-12 h-1.5 ${item.bgColor} rounded-full mb-6 opacity-80`}></div>
              
              {/* Description */}
              <p className="text-base-content/70 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;