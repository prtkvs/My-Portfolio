import { useState, useRef, useEffect } from "react";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a software developer who enjoys solving complex problems and building clean, scalable solutions. I work across the stack, with a strong focus on backend systems, APIs, data flow, and scalable application architecture, while building responsive and accessible web interfaces.
            </p>

            <p className="text-muted-foreground">
              I’ve worked on production systems and AI-powered applications, from CRM platforms and authentication workflows to automated testing and full-stack products. Alongside development, I consistently strengthen my problem-solving skills through DSA and CS fundamentals, with a focus on writing reliable software and continuously learning through real-world engineering challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Resume Dropdown */}
<div className="relative inline-block" ref={dropdownRef}>
  <button
    onClick={() => setOpen(!open)}
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    Resume
  </button>

  {open && (
    <div className="absolute mt-2 w-40 flex flex-col gap-2 z-10">
      <a
        href="/PRATEEK_VERMA_SDE_v4.pdf"
        download
        className="cosmic-button text-center"
      >
        Download CV
      </a>
      <a
        href="https://drive.google.com/file/d/1r_kwsZlu0G5nF_6gp12z20fDooXZjx8r/view"
        target="_blank"
        rel="noopener noreferrer"
        className="cosmic-button text-center"
      >
        View CV
      </a>
    </div>
  )}
</div>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                   Building scalable web applications across the frontend, backend, APIs, and database layers using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend & System Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing reliable backend systems, APIs, and data flows with a focus on scalability, maintainability, and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Structures & Algorithms</h4>
                  <p className="text-muted-foreground">
                    Solving complex problems with efficient algorithms and strengthening the foundation behind scalable software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
