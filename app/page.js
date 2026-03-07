
import About from "./about/page";
// import Contact from ;
// import Education from ;
// import Projects from ;
// import Skills from ;
import dynamic from "next/dynamic";
const Contact = dynamic(()=> import("./contact/page"))
const Projects = dynamic(()=>import("./projects/page"))
const Education = dynamic(()=>import("./education/page"))
const Skills = dynamic(()=>import("./skills/page"))
export default function Home() {
  return (
  <>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    
    </>
  );
}
