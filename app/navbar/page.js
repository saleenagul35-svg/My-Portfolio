import Link from "next/link";
import React from "react";
const Navbar = () =>{
    return(
        <>
                <section className="bg-black text-white overflow-x-clip relative ">
        {/* Background Glow Effects */}
      <div className="absolute -top-20 -right-20 w-150 h-150 bg-yellow-600/20 blur-[180px] rounded-full"></div> {/* ← Changed -top-25 to -top-20, -right-25 to -right-20 */}
      <div className="absolute -bottom-20 -left-20 w-125 h-125 bg-yellow-500/10 blur-[150px] rounded-full"></div> {/* ← Changed -bottom-50 to -bottom-20, -left-50 to -left-20 */}

              {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 border-b border-yellow-600/20">
        <h1 className="text-xl font-semibold text-yellow-500 flex items-center gap-2">
          <span className="text-2xl font-bold">S</span> Saleena Gul
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="hover:text-yellow-500 cursor-pointer transition"><a href="/">Home</a> </li>
          <li className="hover:text-yellow-500 cursor-pointer transition"><a href="#about">About</a></li>
          <li className="hover:text-yellow-500 cursor-pointer transition"><a href="#education">Education</a></li>
           <li className="hover:text-yellow-500 cursor-pointer transition"><a href="#skills">Skills</a></li>
          <li className="hover:text-yellow-500 cursor-pointer transition"><a href="#projects">Projects</a></li>
        </ul>

        <a href="#contact" className="bg-linear-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-md font-medium shadow-lg hover:scale-105 transition">
          Contact Me →
        </a>
      </nav>
      </section>
        </>
    )
}
export default Navbar