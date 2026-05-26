import React from "react";
import { Link } from "react-router";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const LatestNews = () => {
  const newsList = [
    {
      id: 1,
      title: "Science Exhibition Success",
      date: "December 22, 2024",
      image:
        "https://images.unsplash.com/photo-1564910443496-5fd2d76b47fa?q=80&w=1000",
      description:
        "Students showcased innovative projects at the annual science exhibition, impressing judges and visitors alike.",
      tag: "Latest",
    },
    {
      id: 2,
      title: "New Computer Lab Inauguration",
      date: "December 18, 2024",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
      description:
        "State-of-the-art computer lab with 50 new systems inaugurated by the Education Minister.",
      tag: "Latest",
    },
    {
      id: 3,
      title: "Inter-School Debate Victory",
      date: "December 15, 2024",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000",
      description:
        "Our debate team secured first position in the District Level Inter-School Debate Competition.",
      tag: "Latest",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="md:flex md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Stay Informed
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content">
              Latest News
            </h2>
          </div>

          {/* View All Button */}
          <Link
            to="/news"
            className="hidden md:flex btn btn-primary btn-outline gap-2 rounded-full border-2"
          >
            View All News <FaArrowRight />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="bg-base-100 rounded-[2.5rem] overflow-hidden border border-base-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-lg">
                  {news.tag}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center gap-2 text-sm text-base-content/50 font-medium">
                  <FaCalendarAlt className="text-primary" />
                  {news.date}
                </div>

                <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors leading-tight">
                  {news.title}
                </h3>

                <p className="text-base-content/60 leading-relaxed font-medium line-clamp-3">
                  {news.description}
                </p>

                <div className="pt-4 mt-auto">
                  <Link
                    to={`/news/${news.id}`}
                    className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all Button for Mobile */}
        <Link
          to="/news"
          className="mt-8 md:hidden btn btn-primary btn-outline gap-2 rounded-full border-2"
        >
          View All News <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;
