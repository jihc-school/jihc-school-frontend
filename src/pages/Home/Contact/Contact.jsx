import React from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 space-y-2">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-base-content">
            Contact <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-384 mx-auto">
          
          {/* Left Side: Contact Form */}
          <div className="p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-base-content">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Full Name</span>
                  </label>
                  <input type="text" placeholder="Your name" className="input input-bordered w-full bg-base-200 focus:border-primary rounded-xl" />
                </div>
                
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input type="email" placeholder="your@email.com" className="input input-bordered w-full bg-base-200 focus:border-primary rounded-xl" />
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Phone Number</span>
                </label>
                <input type="text" placeholder="+91 98765 43210" className="input input-bordered w-full bg-base-200 focus:border-primary rounded-xl" />
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-32 bg-base-200 focus:border-primary rounded-xl w-full" placeholder="Your message..."></textarea>
              </div>

              {/* Submit Button */}
              <button className="btn btn-primary w-full rounded-xl text-lg font-bold gap-3 shadow-lg shadow-indigo-500/30">
                <FaPaperPlane /> Send Message
              </button>
            </form>

            {/* Quick Info Below Form */}
            <div className="mt-10 space-y-6 pt-8 border-t border-base-200">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-base-content/40 tracking-widest">Address</p>
                  <p className="font-bold">123 Education Lane, Knowledge City</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-base-content/40 tracking-widest">Phone</p>
                  <p className="font-bold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-base-content/40 tracking-widest">Email</p>
                  <p className="font-bold">info@novushorizonschool.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="h-full min-h-[500px] lg:min-h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d901.5124863508782!2d88.934522!3d25.336105!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIwJzEwLjAiTiA4OMKwNTYnMDYuNiJF!5e0!3m2!1sen!2sbd!4v1778329266839!5m2!1sen!2sbd" 
              className="w-full h-full min-h-[600px]"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;