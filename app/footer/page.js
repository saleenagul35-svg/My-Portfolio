import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 relative overflow-hidden">

            {/* Glow Background Effects */}
            <div className="absolute -top-10 -left-10 w-96 h-96 bg-yellow-600/10 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-yellow-500/10 blur-[150px] rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-3 gap-12 border-t border-yellow-600/20">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-yellow-500">
                        Saleena Gul
                    </h2>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Passionate MERN stack Developer, building modern, responsive and
                        user-friendly web experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-yellow-500 mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        <li className="hover:text-yellow-500 transition">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-yellow-500 transition">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-yellow-500 transition">
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className="hover:text-yellow-500 transition">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-lg font-semibold text-yellow-500 mb-4">
                        Get In Touch
                    </h3>
                    <p className="text-gray-400 mb-4">
                        saleenagul35@gmail.com
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/saleena-gul/"
                            target="blank"
                            className="hover:text-yellow-500 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/saleenagul35-svg"
                            target="blank"
                            className="hover:text-yellow-500 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-yellow-600/20 mt-10 py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Saleena Gul. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;