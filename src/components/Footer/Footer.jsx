import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane 
} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#05070a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-xl">
                <img src="/school-logo-white.png" alt="Logo" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight">Novus Horizon School</h3>
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Excellence in Education</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nurturing young minds since 1995. We believe in holistic education that prepares students for the challenges of tomorrow while instilling values that last a lifetime.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Admission Process', 'Result Portal', 'Fee Structure', 'Academic Calendar', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-400 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2 text-sm">
                    <span className="text-primary">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">123 Education Lane, Knowledge City,<br />State - 123456, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm">
                <FaPhoneAlt className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm">
                <FaEnvelope className="text-primary shrink-0" />
                <span>info@novushorizoneschool.edu</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 text-sm">
                <FaClock className="text-primary shrink-0" />
                <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe to our newsletter for updates on events, admissions, and more.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 pr-14 text-sm focus:outline-none focus:border-primary transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg hover:bg-primary-focus transition-all">
                <FaPaperPlane />
              </button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4">By subscribing, you agree to our Privacy Policy.</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Novus Horizon School. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;