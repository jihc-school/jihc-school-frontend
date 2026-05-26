import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

const VirtualTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  const videos = [
    {
      id: "Qj-tirIeDKo",
      thumb: "https://i.ytimg.com/vi/oK26yR0wCwI/maxresdefault.jpg",
    },
    {
      id: "H03wb1cZCSQ",
      thumb:
        "https://fileserver.teachstarter.com/thumbnails/37467-classroom-theme-ideas-thumbnail-0-600x400.png",
    },
    {
      id: "dAu_S8cO5Fk",
      thumb:
        "https://i.pinimg.com/736x/a2/7c/45/a27c4517e43aa4943ca923f11a10ae84.jpg",
    },
  ];

  const openVideo = (id) => {
    setActiveVideoId(id);
    setIsVideoOpen(true);
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-[1536px]">
        {/* Header Content */}
        <div className="mb-12 space-y-4">
          <div className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
            VIRTUAL EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-base-content">
            Explore Our <span className="text-primary">Campus</span>
          </h2>
        </div>

        {/* Video Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[650px]">
          {/* Left Side: Main Large Video */}
          <div className="lg:col-span-2 relative group h-full">
            {/* Background Glow Animation */}
            <div className="absolute -inset-4 bg-primary/15 rounded-[3rem] blur-2xl group-hover:bg-primary/25 transition duration-500"></div>

            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer">
              <img
                src={videos[0].thumb}
                alt="Main Campus Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                onClick={() => openVideo(videos[0].id)}
                className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
              >
                <div className="relative flex items-center justify-center">
                  {/* The Ping Animation Circle */}
                  <div className="absolute w-24 h-24 bg-primary/50 rounded-full animate-ping"></div>
                  <button className="relative w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Two Smaller Videos */}
          <div className="flex flex-col gap-8 h-full">
            {videos.slice(1).map((video, index) => (
              <div
                key={index}
                className="relative group flex-1 h-full min-h-[250px]"
              >
                <div className="relative h-full rounded-[2rem] overflow-hidden shadow-xl cursor-pointer">
                  <img
                    src={video.thumb}
                    alt={`Small Tour ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    onClick={() => openVideo(video.id)}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
                  >
                    <button className="relative w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <FaPlay className="ml-0.5 text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[2001] p-2 bg-white/10 rounded-full"
          >
            <FaTimes size={30} />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Campus Virtual Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VirtualTour;
