import React from 'react';

const PrincipalMessage = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-384 mx-auto @[1580px]:px-0 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-base-100">
          
          {/* Left Side: Principal's Image */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-lg group-hover:bg-primary/20 transition-all duration-500"></div>
              
              {/* Actual Image */}
              <img 
                src="https://i.ibb.co.com/1GR3LQzH/principal.jpg"
                alt="Principal of Novus Horizon School" 
                className="relative rounded-[2.5rem] shadow-2xl w-full h-100 sm:h-130 md:h-190 object-cover"
              />
            </div>
          </div>

          {/* Right Side: Message Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                Message From
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content leading-tight">
                Principal's Desk
              </h2>
            </div>

            {/* Message with Quote marks */}
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-7xl text-primary/10 font-serif leading-none">“</span>
              <p className="text-base-content/80 text-lg leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                Welcome to <span className="text-primary font-bold">Novus Horizon School</span>, where we believe that every child is unique and has the potential to achieve greatness. Our mission is to nurture not just academic excellence, but also character, creativity, and compassion.
              </p>
              <p className="text-base-content/80 text-lg leading-relaxed mt-4">
                With state-of-the-art facilities, dedicated teachers, and a curriculum designed for holistic development, we prepare our students to become responsible global citizens ready to face the challenges of the 21st century.
              </p>
            </div>

            {/* Signature Section */}
            <div className="pt-4 border-t border-base-200 flex flex-col gap-1">
              <h4 className="text-xl font-bold text-base-content">Dr. Rajesh Sharma</h4>
              <p className="text-sm font-medium text-secondary tracking-wide uppercase">
                M.Ed., Ph.D. | Principal
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;