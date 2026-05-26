import React, { useState } from 'react';
import { FaPlay, FaTimes, FaVideo, FaClock, FaCalendarAlt } from 'react-icons/fa';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoData = [
    {
      id: "dQw4w9WgXcQ",
      title: "Virtual Campus Tour 2026",
      desc: "Explore our state-of-the-art infrastructure and digital classrooms from the comfort of your home.",
      thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      duration: "05:15",
      date: "Jan 12, 2026"
    },
    {
      id: "7e90RfHu6L0",
      title: "Annual Sports Day Highlights",
      desc: "Relive the energy and spirit of our students during the inter-school athletics meet.",
      thumb: "https://images.unsplash.com/photo-1577891742292-45a55620191f",
      duration: "04:20",
      date: "Feb 05, 2026"
    },
    {
      id: "jNQXAC9IVRw",
      title: "Science & Innovation Fair",
      desc: "Showcasing the creative minds of our young scientists and their groundbreaking projects.",
      thumb: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
      duration: "03:45",
      date: "Dec 20, 2025"
    }
  ];

  return (
    <section className="py-24 bg-base-200/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 rotate-3">
            <FaVideo size={24} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none">
              Cinema <span className="text-primary font-outline-2">Highlights</span>
            </h2>
            <p className="text-base-content/50 font-bold uppercase text-[10px] tracking-[0.3em] mt-2 ml-1">The Motion Picture Archives</p>
          </div>
        </div>

        {/* --- Main Dashboard --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Featured Large Video Card */}
          <div 
            onClick={() => setSelectedVideo(videoData[0])}
            className="lg:col-span-8 group relative h-[500px] md:h-[600px] rounded-[4rem] overflow-hidden cursor-pointer shadow-2xl border-4 border-base-100 transition-all duration-500 hover:border-primary/50"
          >
            <img src={videoData[0].thumb} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-primary/90 text-white rounded-full flex items-center justify-center pl-2 backdrop-blur-md shadow-[0_0_50px_rgba(var(--p),0.5)] group-hover:scale-110 transition-transform duration-500">
                <FaPlay size={35} />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="badge badge-primary font-black px-4 py-3 uppercase text-[10px]">Featured</span>
                <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                  <FaClock /> {videoData[0].duration}
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">{videoData[0].title}</h3>
              <p className="text-white/60 font-medium max-w-xl leading-relaxed hidden md:block">{videoData[0].desc}</p>
            </div>
          </div>

          {/* Side Playlist List */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {videoData.slice(1).map((v) => (
              <div 
                key={v.id}
                onClick={() => setSelectedVideo(v)}
                className="group bg-base-100 p-6 rounded-[3rem] flex flex-col gap-4 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-base-300 cursor-pointer"
              >
                <div className="relative h-44 rounded-[2.5rem] overflow-hidden">
                  <img src={v.thumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center pl-1 shadow-xl"><FaPlay /></div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-3 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                    <FaCalendarAlt /> {v.date}
                  </div>
                  <h4 className="text-xl font-black uppercase italic leading-tight group-hover:text-primary transition-colors">{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Cinema Modal Player --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[999] bg-black/98 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-8 right-8 text-white bg-primary p-4 rounded-full hover:rotate-90 transition-all duration-500 z-[1000]"
          >
            <FaTimes size={25} />
          </button>
          
          <div className="w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(var(--p),0.2)] border-2 border-white/10 bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title="Player"
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

export default VideoGallery;