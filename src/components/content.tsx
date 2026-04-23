import Contact from "./contact"
import About from "./about"
//import Experience from "./experience"
import Projects from "./projects"
import Skills from "./skills"
import Hero from "./ui/hero"

export const Content = () => {
  return (
    <main className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </main>
  )
}