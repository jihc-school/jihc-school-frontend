
const PageBanner = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-slate-900">
      
      {/* Dynamic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "https://epe.brightspotcdn.com/4a/7d/a0c5cd4e47c38228548a26d1782b/private-school-elementary-students-042025-2175339358.jpg"} 
          alt={title} 
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        {/* Gradient overlay to blend with the page content */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-black/20 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* Page Title & Subtitle */}
          <div className="space-y-4">
            {/* Title with a small primary color dot for a modern look */}
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              {title}<span className="text-primary">.</span>
            </h1>
            
            {/* Simple Accent Line */}
            <div className="w-20 h-2 bg-primary rounded-full"></div>
            
            <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-base-100 to-transparent"></div>
    </div>
  );
};

export default PageBanner;