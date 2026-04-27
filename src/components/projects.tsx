import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectCarousel } from "./carousel";
// images
import robin from "@/assets/project-carousel-images/robin.jpg";
import gorrion from "@/assets/project-carousel-images/gorrion.jpg";

const carouselImages: string[] = [robin, gorrion];

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  images,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <ProjectCarousel images={images}/>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <p className="mr-1 h-4 w-4" />github
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Gestión de contrataciones",
      description:
        "Plataforma para automatizar el proceso de contratación de docentes en la facultad de inegiería y arquitectura de la UES.",
      images: carouselImages,
      technologies: ["React", "TypeScript", "React Router", "Redux", "Laravel", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "Inventario, compras y ventas para centro de servicios para motocicletas",
      description:
        "Una app web que gestiona inventario, compras y ventas aplicando valuación de inventario PEPS proporcionando cálculo de costos y beneficios de ventas al momento.",
      images: carouselImages,
      technologies: ["Spring Boot", "Spring MVC", "Spring Security", "Spring JPA", "Thymeleaf", "PostgreSQL"],
      liveUrl: "https://ai-taskmanager.com",
      githubUrl: "https://github.com/username/ai-taskmanager",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="my-4">
            Proyectos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Proyectos destacados

          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Revise algunos de mis proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;