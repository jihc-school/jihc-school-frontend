import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Varun Kumar Thapliyal",
      role: "Parent",
      image: "https://i.pravatar.cc/150?u=1",
      feedback:
        "The academic environment at Sunrise Public School is exceptional. Their commitment to safeguarding student data and ensuring compliance has given us peace of mind. The teachers are highly proactive!",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      role: "Parent",
      image: "https://i.pravatar.cc/150?u=2",
      feedback:
        "Choosing this school was a game changer for our child's growth. The holistic approach and focus on both academics and extracurriculars have built immense trust. Highly recommended!",
    },
    {
      id: 3,
      name: "Rajesh Mehra",
      role: "Guardian",
      image: "https://i.pravatar.cc/150?u=3",
      feedback:
        "Working with the school administration has been seamless. Their expertise in managing student progress is impressive. We've seen a massive positive change in our son's confidence.",
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Alumni Parent",
      image: "https://i.pravatar.cc/150?u=4",
      feedback:
        "The security posture and disciplined environment make it one of the best institutions. They don't just teach subjects; they build character. A truly reliable institution.",
    },
  ];

  return (
    <section className="py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
            Don’t take our word for it! 
          </h4>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Hear what our <span className="text-primary">Parents</span> say
          </h2>
          <p className="mt-4 text-base-content/60 font-medium">
            With over 1000+ satisfied families, here's what they have to say
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative max-w-384 mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            loop={true}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-primary px-10 py-8 rounded-[2.5rem] shadow-xl border border-base-200 h-full flex flex-col transition-all duration-300 hover:shadow-2xl">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-primary/20 text-4xl mb-6" />

                  {/* Feedback Text */}
                  <p className="text-white leading-relaxed italic mb-8 min-h-26 flex-grow">
                    "{item.feedback}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 border-t pt-6 border-base-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-gray-300">{item.name}</h4>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between  z-10 pointer-events-none">
            <button className="prev-btn pointer-events-auto w-10 h-10 rounded-full bg-base-100 shadow-lg border border-base-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
              <FaChevronLeft />
            </button>
            <button className="next-btn pointer-events-auto w-10 h-10 rounded-full bg-base-100 shadow-lg border border-base-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
              <FaChevronRight />
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
