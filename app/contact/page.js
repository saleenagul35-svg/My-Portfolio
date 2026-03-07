// components/ContactSection.jsx
"use client"
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="relative bg-black text-white py-20 flex flex-col items-center justify-center overflow-hidden " id="contact">
            {/* Subtle Glow Background Blobs */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-500 rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>

            <div className="relative z-10 max-w-3xl w-full text-center">
                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-500 glow animate-glow mb-4 ">
                    Contact Me
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2 mb-8 shadow-[0_0_15px_#eab308]"></div>
                
                {/* Paragraph with proper space below */}
                <p className="text-white/70 text-lg md:text-xl mb-16">
                    Feel free to reach out via email, phone, or LinkedIn.
                </p>

             
               
                    {/* Email */}
                    <div className="flex flex-col items-center gap-2 mb-16">
                        <FaEnvelope className="text-yellow-500 text-3xl glow animate-glow" />
                        <a
                            href="mailto:saleenagul35@gmail.com"
                            className="text-white hover:text-yellow-500 transition-colors text-lg md:text-xl break-words"
                        >
                            saleenagul35@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center gap-2 mb-16">
                        <FaPhoneAlt className="text-yellow-500 text-3xl glow animate-glow" />
                        <span className="text-white text-lg md:text-xl">0341 7309859</span>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center gap-2  mb-16">
                        <FaMapMarkerAlt className="text-yellow-500 text-3xl glow animate-glow" />
                        <span className="text-white text-lg md:text-xl text-center">
                            Ideal Girls Hostel, Kashmir Block, Iqbal Town, Lahore
                        </span>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col items-center gap-2 mb-16">
                        <FaLinkedin className="text-yellow-500 text-3xl glow animate-glow" />
                        <a
                            href="https://www.linkedin.com/in/saleena-gul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-500 transition-colors text-lg md:text-xl break-words"
                        >
                            linkedin.com/in/saleena-gul
                        </a>
                    </div>
                </div>
         

            {/* Glow Animations */}
            <style jsx>{`
        .glow {
          text-shadow: 0 0 8px #eab308, 0 0 16px #eab308;
        }
        .animate-glow {
          animation: glowPulse 2.5s ease-in-out infinite alternate;
        }
        @keyframes glowPulse {
          0% {
            text-shadow: 0 0 8px #eab308, 0 0 16px #eab308;
          }
          100% {
            text-shadow: 0 0 16px #facc15, 0 0 32px #facc15;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite alternate;
        }
        @keyframes pulseSlow {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;