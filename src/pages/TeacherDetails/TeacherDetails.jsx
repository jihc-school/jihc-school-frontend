import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { 
  FaGraduationCap, FaEnvelope, FaPhoneAlt, FaAward, 
  FaArrowLeft, FaLinkedin, FaTwitter, FaQuoteLeft, FaBook 
} from 'react-icons/fa';

const TeacherDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Public folder theke data fetch
    fetch('/teachers.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.id === id);
        setTeacher(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center bg-base-100"><span className="loading loading-spinner loading-lg text-primary"></span></div>;
  
  if (!teacher) return <div className="h-screen flex items-center justify-center text-2xl font-black uppercase">Teacher Not Found</div>;

  return (
    <div className="min-h-screen bg-base-100 pb-20 overflow-hidden">
      
      {/* --- Top Animated Header --- */}
      <div className="h-[30vh] bg-gradient-to-br from-primary/10 via-base-200 to-base-100 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <Link to="/teachers" className="group flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.3em] bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-primary hover:text-white transition-all duration-500">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform"/> Back to Faculty
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- Left Column: Identity Card --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-10">
              <div className="bg-base-100 rounded-[4rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-base-200">
                <div className="relative group">
                  <div className="h-[450px] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl ring-8 ring-base-200">
                    <img src={teacher.image} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt={teacher.name} />
                  </div>
                  <div className="absolute -bottom-4 right-8 bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/30 rotate-12 group-hover:rotate-0 transition-transform">
                    <FaAward size={25} />
                  </div>
                </div>

                <div className="space-y-4 mt-12">
                  <div className="flex items-center gap-5 p-5 bg-base-200/50 rounded-3xl border border-transparent hover:border-primary/20 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <FaEnvelope size={18} />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">Email Address</p>
                      <p className="font-bold text-sm truncate">{teacher.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 bg-base-200/50 rounded-3xl border border-transparent hover:border-primary/20 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">Direct Contact</p>
                      <p className="font-bold text-sm">{teacher.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6 mt-10">
                  <a href="#" className="w-12 h-12 rounded-full border border-base-300 flex items-center justify-center text-base-content/40 hover:text-primary hover:border-primary transition-all"><FaLinkedin size={20}/></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-base-300 flex items-center justify-center text-base-content/40 hover:text-primary hover:border-primary transition-all"><FaTwitter size={20}/></a>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Deep Details --- */}
          <div className="lg:col-span-8 lg:pt-24 pb-10">
            {/* Main Title & Role */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-primary"></div>
                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">{teacher.role}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-base-content mb-6">
                {teacher.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "" : "text-primary font-outline-2 block"}>{word} </span>
                ))}
              </h1>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-3 bg-base-200 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest italic">
                  <FaGraduationCap className="text-primary text-lg" /> {teacher.qual}
                </div>
                <div className="flex items-center gap-3 bg-base-200 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest italic">
                  <FaBook className="text-primary text-lg" /> Specialist in {teacher.subject}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-20">
              
              {/* Bio Section */}
              <section className="relative">
                <FaQuoteLeft className="text-primary/10 text-8xl absolute -top-10 -left-10" />
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-6 relative z-10">Professional Vision</h3>
                <p className="text-2xl font-medium text-base-content/70 italic leading-relaxed tracking-tight relative z-10">
                  "{teacher.bio}"
                </p>
              </section>

              {/* Grid: Education & Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Academic Timeline */}
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-8 border-l-4 border-primary pl-4 tracking-tighter">Academic Journey</h3>
                  <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-base-300">
                    {teacher.education.map((edu, i) => (
                      <div key={i} className="relative pl-10 group">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-base-200 border-2 border-base-300 group-hover:border-primary group-hover:bg-primary transition-all duration-500 z-10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-base-content group-hover:bg-white transition-all"></div>
                        </div>
                        <p className="font-black text-sm uppercase opacity-70 group-hover:opacity-100 transition-opacity tracking-tight leading-snug">{edu}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Honors */}
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-8 border-l-4 border-primary pl-4 tracking-tighter">Honors & Awards</h3>
                  <div className="space-y-4">
                    {teacher.achievements.map((ach, i) => (
                      <div key={i} className="bg-base-200/50 p-5 rounded-[2rem] border border-transparent hover:border-primary/20 transition-all flex items-start gap-4">
                        <FaAward className="text-primary mt-1 shrink-0" />
                        <p className="font-bold text-xs uppercase italic opacity-70 tracking-wide">{ach}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;