import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaFilePdf, FaBookOpen, FaTimes, FaBullhorn, FaArrowRight } from 'react-icons/fa';

const LatestNotice = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      title: "Final Examination Schedule 2026",
      date: "02 Jan, 2026",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      content: ""
    },
    {
      id: 2,
      title: "Special Instructions for Winter Vacation",
      date: "28 Dec, 2025",
      pdfUrl: null,
      content: "The decision of the students and the public of our school is that the winter vacation will begin on January 5th. Please contact the school for detailed information. Thank you."
    },
    {
      id: 3,
      title: "Admission Open for Session 2026",
      date: "20 Dec, 2025",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      content: ""
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="md:flex md:flex-row justify-between items-end mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs">
              <FaBullhorn className="animate-bounce" />
              <span>Stay Updated</span>
            </div>
            <h2 className="text-4xl font-black text-base-content">Latest Notices</h2>
          </div>
          {/* View All Button for Desktop */}
          <Link to="/notices" className="hidden md:flex btn btn-primary btn-outline gap-2 rounded-full border-2">
            View All Notices <FaArrowRight />
          </Link>
        </div>

        {/* Notice List Container */}
        <div className="grid gap-4">
          {notices.map((notice) => (
            <div 
              key={notice.id} 
              className="bg-base-100 p-5 rounded-[2rem] shadow-sm border border-base-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-5">
                {/* Date Icon Style */}
                <div className="bg-primary/10 text-primary p-3 rounded-[20px] text-center min-w-[70px]">
                  <p className="text-xs font-bold uppercase">{notice.date.split(' ')[1]}</p>
                  <p className="text-xl font-black">{notice.date.split(' ')[0]}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-base-content group-hover:text-primary transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-xs opacity-50 font-medium">Published: {notice.date}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                {notice.pdfUrl ? (
                  <a href={notice.pdfUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary gap-2 rounded-full">
                    <FaFilePdf /> Open PDF
                  </a>
                ) : (
                  <button onClick={() => setSelectedNotice(notice)} className="btn btn-sm btn-secondary btn-outline gap-2 rounded-full">
                    <FaBookOpen /> Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button for Mobile */}
        <div className="mt-8 md:hidden">
          <Link to="/notices" className="btn btn-primary btn-outline gap-2 rounded-full border-2">
            View All Notices <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* --- Read More Modal --- */}
      {selectedNotice && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-base-100 w-full max-w-lg rounded-3xl shadow-2xl animate-in zoom-in duration-200">
            <div className="p-6 border-b border-base-200 flex justify-between items-center">
              <h3 className="text-xl font-bold">Notice Details</h3>
              <button onClick={() => setSelectedNotice(null)} className="btn btn-sm btn-circle btn-ghost">
                <FaTimes />
              </button>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-2 text-primary">{selectedNotice.title}</h4>
              <p className="text-sm opacity-50 mb-6 italic">Date: {selectedNotice.date}</p>
              <div className="text-base-content text-lg leading-relaxed whitespace-pre-line">
                {selectedNotice.content}
              </div>
            </div>
            <div className="p-4 bg-base-200 rounded-b-3xl text-right">
              <button onClick={() => setSelectedNotice(null)} className="btn btn-primary px-10 rounded-full">Got It</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestNotice;