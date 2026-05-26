import React from "react";
import { FaLaptopCode, FaBusAlt, FaFlask } from "react-icons/fa"; // React Icons

const KeyFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Digital Classrooms",
      description:
        "Smart boards and interactive learning tools in every classroom for an enhanced educational experience.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop", // placeholder image
      icon: <FaLaptopCode />,
      iconBg: "bg-indigo-600",
    },
    {
      id: 2,
      title: "Safe Transport",
      description:
        "GPS-enabled buses with trained drivers ensuring safe and comfortable transportation for students.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop", // placeholder image
      icon: <FaBusAlt />,
      iconBg: "bg-amber-500",
    },
    {
      id: 3,
      title: "Science Labs",
      description:
        "Well-equipped physics, chemistry, and biology labs for hands-on practical learning.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop", // placeholder image
      icon: <FaFlask />,
      iconBg: "bg-sky-500",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-384 mx-auto @[1580px]:px-0 px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content">
            Key Features
          </h2>
          <p className="max-w-2xl text-base-content/70 font-medium">
            We provide world-class facilities to ensure the best learning
            environment for our students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-base-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-200"
            >
              {/* Image Container with Icon Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating Icon */}
                <div
                  className={`absolute bottom-6 left-6 ${feature.iconBg} text-white p-4 rounded-2xl text-2xl shadow-lg z-10`}
                >
                  {feature.icon}
                </div>
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base-content/60 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
