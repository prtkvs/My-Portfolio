import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SKILL AI",
    description:
      "A responsive AI-powered career assistant that generates tailored resumes, cover letters, interview prep, and industry insights based on user input and real-time Gemini AI integration.",
    image: "/skillai.png",
    tags: [
      "Next.js",
      "MongoDB",
      "Prisma",
      "Gemini AI API",
      "Shadcn UI",
      "Inngest",
      "Clerk",
      "Tailwind",
    ],
    demoUrl: "https://prtk-skill-ai.vercel.app/",
    githubUrl: "https://github.com/prtkvs/AI-Career-Coach",
  },
  {
    id: 2,
    title: "Commerce Craft",
    description:
      "A full-stack e-commerce platform with seller dashboards, optimized image uploads, secure payments, automated order handling, and hybrid SSR/SSG rendering.",
    image: "/CommerceCraft.png",
    tags: [
      "Next.js 15",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "Inngest",
      "Clerk",
      "Mongoose",
      "Tailwind",
    ],
    demoUrl: "https://commerce-craft.vercel.app/",
    githubUrl: "https://github.com/prtkvs/Commerce-Craft",
  },
  {
    id: 3,
    title: "Note AI",
    description:
      "A secure, AI-powered note-taking platform built with Express and JWT authentication, featuring bcrypt-encrypted credentials, MongoDB-backed REST APIs, and a modern Next.js interface, enabling intelligent note creation, summarization, and retrieval while ensuring reliable, validated, and scalable request handling.",
    image: "/Note-AI.png",
    tags: [
      "Express.js",
      "Next.js",
      "Shadcn UI",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind",
      "Gemini AI API",
    ],
    demoUrl: "https://note-ai-flame.vercel.app/",
    githubUrl: "https://github.com/prtkvs/Note-AI",
  },
  {
    id: 4,
    title: "Contact Manager App",
    description:
      "A secure, full-stack contact management system built on Express with JWT authentication, bcrypt-encrypted credentials, efficient PostgreSQL–Prisma APIs, and a Shadcn-powered Next.js interface that improves task flow while enforcing validated, monitored, and highly reliable request handling.",
    image: "/contact_manager.png",
    tags: [
      "Express.js",
      "Next.js",
      "Shadcn UI",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Tailwind",
    ],
    demoUrl: "https://contact-manager-app-flame.vercel.app/",
    githubUrl: "https://github.com/prtkvs/Contact-Manager-App",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">


          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/prtkvs"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
