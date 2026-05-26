import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

    const stats = [
        { id: 1, count: 25, suffix: "+", label: "Years of Legacy" },
        { id: 2, count: 1500, suffix: "+", label: "Global Alumni" },
        { id: 3, count: 50, suffix: "+", label: "Smart Classrooms" },
        { id: 4, count: 100, suffix: "%", label: "Board Success" },
    ];

  return (
    <section ref={ref} className="bg-[#0a1128] py-20 px-4"> 
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item) => (
            <div key={item.id} className="text-center space-y-4">
              {/* Counter Number */}
              <div className="text-4xl md:text-6xl font-black text-amber-500">
                {inView ? (
                  <CountUp end={item.count} duration={2.5} />
                ) : (
                  "0"
                )}
                {item.suffix}
              </div>

              {/* Label */}
              <p className="text-white text-sm md:text-lg font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;