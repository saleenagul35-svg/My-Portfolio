import React from "react";
import Image from "next/image";
import Link from "next/link"
const About = () => {
  return (
    <>
      <section className="min-h-screen bg-black text-white overflow-x-clip relative " id="about">

        {/* Background Glow Effects */}
        <div className="absolute -top-20 -right-20 w-150 h-150 bg-yellow-600/20 blur-[180px] rounded-full"></div> {/* ← Changed -top-25 to -top-20, -right-25 to -right-20 */}
        <div className="absolute -bottom-20 -left-20 w-125 h-125 bg-yellow-500/10 blur-[150px] rounded-full"></div> {/* ← Changed -bottom-50 to -bottom-20, -left-50 to -left-20 */}


        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 tracking-wide">
              SALEENA GUL
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-200">
              MERN Stack Developer
            </h2>

            <div className="w-24 h-1 bg-yellow-500 mt-4 mb-6"></div>

            <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
              MERN Stack Developer and BS Computer Science (7th Semester) student
              with strong foundations in HTML, CSS, JavaScript, responsive web design,
              React.js, and Next.js. Currently expanding backend and database expertise
              through advanced Full-Stack Web Development. Passionate about
              building modern, user-focused, and performance-optimized web applications
              with clean design and scalable architecture.
            </p>

            <button className="mt-8 bg-linear-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition duration-300"><Link href="/projects">
              View My Work →
            </Link>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center items-center">

            {/* Golden Glow Circle */}
            <div className="absolute w-105 h-105 rounded-full border-[6px] border-yellow-500 shadow-[0_0_60px_rgba(234,179,8,0.7)]"></div>

            {/* Sparkle Glow */}
            <div className="absolute w-130 h-130 bg-yellow-500/10 rounded-full blur-[120px]"></div>

            {/* Image */}
            <div className="relative w-100 h-100 rounded-full overflow-hidden border-4 border-yellow-500">
              <Image
                src="/pics/saleena.jpg"
                alt="Saleena Gul"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

        </section>
      </section>
    </>
  )
}
export default About