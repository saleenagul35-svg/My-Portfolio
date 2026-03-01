import React from "react";
export default function Education() {
  const educationData = [
    {
      title: "MERN Stack Web Development",
      institute: "PNY Trainings – Arfa Tower, Lahore",
      duration: "Starting: 21 August 2025 – Present",
      description:
        "Currently advancing my frontend expertise and building strong backend & database development skills.",
    },
    {
      title: "Bachelor of Science in Computer Science (BSCS)",
      institute: "7th Semester (2023 – Present)",
      duration: "CGPA: 3.71",
      description:
        "Focused on software development, data structures, web technologies, and problem-solving.",
    },
    {
      title: "Intermediate",
      institute: "Zakriya Girls College, Alipur",
      duration: "2021 – 2022 | 90.3%",
      description:
        "Completed intermediate education with distinction and strong academic performance.",
    },
    {
      title: "Matriculation",
      institute:
        "Government Girls High School Nalka Adda (Muzaffargarh)",
      duration: "2019 – 2020 | 96.6%",
      description:
        "Achieved excellent academic results with strong foundations in science subjects.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-black text-white py-20 px-6 md:px-16 overflow-x-clip relative "
    >
      {/* 🔥 Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-yellow-500/10 blur-[120px] rounded-full"></div> {/* ← Removed the extra bracket */}

      {/* Heading */}
      <div className="text-center mb-20 relative z-10 ">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Education
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 shadow-[0_0_15px_#facc15]"></div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-yellow-500/40 space-y-12 z-10">
        {educationData.map((item, index) => (
          <div key={index} className="ml-10 relative group py-6">
            {/* 🔥 Glowing Dot */}
            <span className="absolute -left-10 top-3 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black shadow-[0_0_20px_#facc15]"></span> {/* ← Changed -left-10.5 to -left-10 */}

            {/* Card with Glow */}
            <div className="relative bg-linear-to-br from-gray-900 to-black border border-yellow-500/20 p-6 rounded-2xl transition duration-500 hover:scale-[1.03] hover:border-yellow-500 shadow-lg hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]">

              {/* Card Inner Glow */}
              <div className="absolute inset-0 rounded-2xl bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-yellow-500">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-1">
                  {item.institute}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {item.duration}
                </p>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}