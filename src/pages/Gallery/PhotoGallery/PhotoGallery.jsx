import React, { useState } from 'react';
import { FaExpandAlt, FaTimes, FaCameraRetro, FaFilter } from 'react-icons/fa';

const PhotoGallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['all', 'campus', 'academic', 'sports', 'events'];

  const photos = [
    { id: 1, cat: 'academic', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', title: 'Interactive Learning' },
    { id: 2, cat: 'campus', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', title: 'Main Plaza View' },
    { id: 3, cat: 'sports', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b', title: 'Annual Athletics' },
    { id: 4, cat: 'academic', url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120', title: 'Innovation Lab' },
    { id: 5, cat: 'events', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', title: 'Award Ceremony' },
    { id: 6, cat: 'sports', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77', title: 'Football Match' },
    { id: 7, cat: 'campus', url: 'https://images.unsplash.com/photo-1541339906194-e1620f95f6ad', title: 'Campus Greenery' },
    { id: 8, cat: 'events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865', title: 'Cultural Night' },
    { id: 9, cat: 'academic', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6', title: 'School Library' },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.cat === filter);

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Upper Section: Title & Filter --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs mb-3">
              <FaCameraRetro className="text-lg" /> Excellence in Focus
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none italic">
              Our <span className="text-primary">Gallery</span>
            </h2>
          </div>

          {/* Premium Filter UI */}
          <div className="flex items-center gap-4 bg-base-200/50 backdrop-blur-xl p-2 rounded-[2rem] border border-base-300 shadow-xl">
            <div className="hidden md:flex items-center gap-2 px-4 text-base-content/40 border-r border-base-300">
              <FaFilter size={12}/> <span className="text-[10px] font-black uppercase tracking-widest">Filter</span>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest transition-all duration-500
                  ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'hover:bg-base-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Main Image Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              onClick={() => setSelectedImg(photo)}
              className="group relative h-[480px] rounded-[3.5rem] overflow-hidden cursor-pointer shadow-2xl border border-base-200 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image with slow-zoom effect */}
              <img 
                src={photo.url} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                alt={photo.title} 
              />
              
              {/* Premium Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-7 rounded-[2.5rem] flex justify-between items-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                  <div className="max-w-[70%]">
                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-1 block">{photo.cat}</span>
                    <h3 className="text-white text-2xl font-black uppercase italic leading-none">{photo.title}</h3>
                  </div>
                  <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <FaExpandAlt size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-32 border-2 border-dashed border-base-300 rounded-[4rem]">
             <p className="text-2xl font-black text-base-content/20 uppercase tracking-widest italic">No moments found in this category</p>
          </div>
        )}
      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImg && (
        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
          <button 
            onClick={() => setSelectedImg(null)} 
            className="absolute top-10 right-10 text-white bg-primary p-5 rounded-full hover:rotate-90 transition-all duration-500 z-[1000] shadow-2xl shadow-primary/40"
          >
            <FaTimes size={25}/>
          </button>
          <div className="relative group max-w-6xl w-full flex flex-col items-center">
            <img 
              src={selectedImg.url} 
              className="max-w-full max-h-[75vh] rounded-[3rem] shadow-2xl border-4 border-white/10 object-contain" 
              alt="Preview" 
            />
            <div className="mt-8 text-center bg-white/5 backdrop-blur-md px-10 py-5 rounded-full border border-white/10">
                <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">{selectedImg.title}</h2>
                <div className="badge badge-primary font-bold mt-2 px-4 py-3 uppercase text-[10px]">{selectedImg.cat}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;