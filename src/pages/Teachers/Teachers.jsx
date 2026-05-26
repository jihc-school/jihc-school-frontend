import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import PageBanner from "../../components/Shared/PageBanner/PageBanner";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <PageBanner></PageBanner>

      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="group relative bg-base-200 rounded-[3rem] p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border border-transparent hover:border-primary/20"
              >
                {/* Teacher Image */}
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden">
                  <img
                    src={teacher.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={teacher.name}
                  />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                    {teacher.qual}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                    {teacher.name}
                  </h3>
                  <p className="text-primary font-bold uppercase text-xs tracking-widest mt-1 mb-6">
                    {teacher.role}
                  </p>

                  {/* Details Button */}
                  <Link
                    to={`/teachers/${teacher.id}`}
                    className="inline-flex items-center gap-3 bg-base-100 px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md"
                  >
                    View Full Profile <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
