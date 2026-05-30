import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const HomeGallery = () => {
  const photos = [
    {
      id: 1,
      title: "Cultural Event",
      image:
        "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=1000",
    },
    {
      id: 2,
      title: "Sports Meet",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000",
    },
    {
      id: 3,
      title: "Library Session",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000",
    },
    {
      id: 4,
      title: "Art & Craft Class",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
    },
    {
      id: 5,
      title: "Computer Lab",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    },
    {
      id: 6,
      title: "Morning Assembly",
      image:
        "https://images.unsplash.com/photo-1523050853051-be991f85a6ad?q=80&w=1000",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="md:flex justify-between items-end mb-10 gap-4">
          <div className="space-y-3">
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Captured Moments
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="max-w-2xl text-base-content/60 font-medium">
              A glimpse into the vibrant life and activities at Sunrise Public
              School.
            </p>
          </div>
          <div className="hidden md:flex">
            <Link to={"/gallery"} className="btn btn-primary btn-outline gap-2 rounded-full border-2">
              View All Photos <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 rounded-[2.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Actual Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                  <div className="w-10 h-1 bg-primary mt-2 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-4 left-6 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold opacity-100 group-hover:opacity-0 transition-opacity">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="md:hidden mt-8">
          <Link to={"/gallery"} className="btn btn-primary btn-outline gap-2 rounded-full border-2">
            View All Photos <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
