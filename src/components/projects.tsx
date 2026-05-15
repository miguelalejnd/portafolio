import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { GithubLogo } from "@/components/ui/icons";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

/* images for projects */

// 1. sgc:
import loginSGC from "@/assets/project-carousel-images/sgc/login.png";

// 2. csg:
import loginCSG from "@/assets/project-carousel-images/csg/login.png";
import allPurchases from "@/assets/project-carousel-images/csg/all-purchases.png";
import newPurchases from "@/assets/project-carousel-images/csg/new-purchase.png";
import allSales from "@/assets/project-carousel-images/csg/all-sales.png";
import newSale1 from "@/assets/project-carousel-images/csg/new-sale1.png";
import newSale2 from "@/assets/project-carousel-images/csg/new-sale2.png";
import newSale3 from "@/assets/project-carousel-images/csg/new-sale3.png";
import detailsSale from "@/assets/project-carousel-images/csg/details-sale.png";
import allItems from "@/assets/project-carousel-images/csg/all-items.png";
import allCustomers from "@/assets/project-carousel-images/csg/all-customers.png";
import newCustomer from "@/assets/project-carousel-images/csg/new-customer.png";

const carouselImages: string[] = [loginSGC, ];

const csgImages: string[] = [
  loginCSG,
  allPurchases,
  newPurchases,
  allSales,
  newSale1,
  newSale2,
  newSale3,
  detailsSale,
  allItems,
  allCustomers,
  newCustomer,
];

type ProjectCardProps = {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  functionalities?: string[];
  learning?: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

type ProjectCardPropsWitthExtras = ProjectCardProps & {
  setSelectedProject: (project: ProjectCardProps | null) => void;
  setOpen: (open: boolean) => void;
}

const projects = [
  {
    title: "Sistema de gestión de contrataciones",
    description:
      "Plataforma para automatizar el proceso de contratación de docentes en la FIA-UES.",
    problem:
      "El proceso de contratación de docentes era manual, ineficiente y propenso a errores, lo que resultaba en retrasos y dificultades para gestionar las solicitudes.",
    solution:
      "Desarrollo de una plataforma web que automatiza el proceso de contratación, permitiendo a los docentes postularse en línea, a los administradores revisar y gestionar las solicitudes de manera eficiente.",
    impact:
      "Reduje el tiempo de contratación y mejoré la satisfacción tanto de los docentes como de los administradores al proporcionar una experiencia más fluida y transparente.",
    functionalities: ["Gestión de solicitudes", "Revisión y aprobación", "Notificaciones automáticas"],
    learning: 
      "Aprendí a diseñar e implementar un sistema completo utilizando React para el frontend y Laravel para el backend, además de mejorar mis habilidades en gestión de proyectos y comunicación con stakeholders.",
    images: carouselImages,
    technologies: ["React", "TypeScript", "React Router", "Redux", "Laravel", "PostgreSQL"],
  },
  {
    title: "Sistema de inventario, compras y ventas para empresa CSGARAGE",
    description:
      "Plataforma de gestión de inventario PEPS, registro de compras y ventas que reflejan costos reales y utilidades precisas al momento.",
    problem: 
      "La empresa enfrentaba dificultades para gestionar su inventario, realizar un seguimiento de las compras y ventas, y calcular los costos y beneficios de manera precisa, lo que afectaba su eficiencia operativa y rentabilidad.",
    solution:
      "Desarrollo de un app web que permita a los usuarios gestionar el inventario, registrar compras y ventas, y calcular automáticamente los costos y beneficios utilizando el método de valuación de inventario PEPS.",
    impact:
      "La herramienta mejoró la eficiencia operativa de la empresa ya que facilitó la gestión del inventario y las transacciones, lo que resultó en una mejor toma de decisiones y aumento de la rentabilidad.",
    functionalities: ["Gestión de inventario.", "Registro de compras y ventas.", "Cálculo automático de costos y beneficios.", "Gestión de catalogos.", "Gestión de usuarios."],
    learning: 
      "Reforzamiento mi conocimiento de Spring Boot para el backend y aprendí el uso de Thymeleaf para el frontend, además de mejorar mis habilidades en gestión de proyectos y comunicación con stakeholders.",
    images: csgImages,
    technologies: ["Spring Boot", "Spring MVC", "Spring Security", "Spring JPA", "Thymeleaf", "PostgreSQL"],
    liveUrl: "https://example.com",
    //githubUrl: "https://github.com/username/ai-taskmanager",
  },
];

const ProjectCard = ({
  title,
  description,
  problem,
  solution,
  impact,
  functionalities,
  learning,
  images,
  technologies,
  liveUrl,
  githubUrl,
  setSelectedProject,
  setOpen,
}: ProjectCardPropsWitthExtras) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent">
      {/* Project Image */}
      <div className="relative h-64">
        <img
          src={images[0]}
          alt={title}
          className="object-cover w-full h-full"
        />
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
        <div className="flex flex-col gap-3 mt-auto">
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            onClick={() => {
              setSelectedProject({ title, description, images, technologies, liveUrl, githubUrl, problem, solution, impact, learning, functionalities })
              setOpen(true)
            }}
          >
            Ver detalles
          </Button>
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
                <GithubLogo />
                Ver c&oacute;digo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

  return (
    <>
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
              <ProjectCard key={index} setSelectedProject={setSelectedProject} setOpen={setOpen} {...project} />
            ))}
          </div>
        </div>
      </section>
      {/* Full-screen lightbox */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className='flex flex-col justify-center p-0 gap-0 h-[calc(100vh-4rem)] min-w-[calc(100vw-1rem)] xl:min-w-[calc(100vw-4rem)]'>

            <div className="grid grid-cols-1 items-center xl:grid-cols-3 gap-4 p-4 pt-12 xl:pt-4 overflow-auto">
              {/* <div className="flex items-center xl:col-span-2 p-0"> */}
                <ProjectCarousel images={selectedProject?.images as string[]} />
              {/* </div> */}
              <div className='[&_strong]:text-foreground h-fit space-y-4 [&_strong]:font-semibold'>
                <div className='space-y-1 text-lg'>
                  <p>
                    <strong>{selectedProject?.title}</strong>
                  </p>
                </div>

                <div className='space-y-1'>
                  <p>
                    <strong>Descripci&oacute;n:</strong>
                  </p>
                  <p>
                    {selectedProject?.description as string}
                  </p>
                </div>
                <div className='space-y-1'>
                  <p>
                    <strong>Problema / Contexto:</strong>
                  </p>
                  <p>
                    {selectedProject?.problem as string}
                  </p>
                </div>
                <div className='space-y-1'>
                  <p>
                    <strong>Soluci&oacute;n propuesta:</strong>
                  </p>
                  <p>
                    {selectedProject?.solution as string}
                  </p>
                </div>
                <div className='space-y-1'>
                  <p>
                    <strong>Resultados:</strong>
                  </p>
                  <p>
                    {selectedProject?.impact as string}
                  </p>
                </div>
                <div className='space-y-1'>
                  <p>
                    <strong>Caracter&iacute;sticas principales:</strong>
                  </p>
                  <ul>
                    {selectedProject?.functionalities?.map((func, index) => (
                      <li key={index}>{func}</li>
                    ))}
                  </ul>
                </div>
                <div className='space-y-1'>
                  <p>
                    <strong>Desaf&iacute;os y aprendizajes:</strong>
                  </p>
                  <p>
                    {selectedProject?.learning as string}
                  </p>
                </div>
                <div className='space-y-1'>
                  <p>
                    <strong>Stack tecnol&oacute;gico:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject?.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
  );
};

export default Projects;