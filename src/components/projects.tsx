import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { GithubLogo } from "@/components/ui/icons";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { projects } from "@/const/projects";
import type { ProjectProps } from "@/types/projects";

type ProjectCardProps = {
  project: ProjectProps;
  setSelectedProject: (project: ProjectProps) => void;
  setOpen: (open: boolean) => void;
}

const ProjectCard = ({
  project,
  setSelectedProject,
  setOpen,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent">
      {/* Project Image */}
      <div className="relative h-64">
        <img
          src={project.images[0]}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
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
              setSelectedProject(project);
              setOpen(true);
            }}
          >
            Ver detalles
          </Button>
          {project.liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
  const [selectedProject, setSelectedProject] = useState<ProjectProps| undefined>(undefined);

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
              <ProjectCard key={index} setSelectedProject={setSelectedProject} setOpen={setOpen} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* Full-screen lightbox */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className='flex flex-col justify-center p-0 gap-0 h-[calc(100vh-4rem)] min-w-[calc(100vw-1rem)] xl:min-w-[calc(100vw-4rem)]'>
            <DialogTitle className="sr-only" />

            <DialogDescription className="sr-only" />

            <div className="grid grid-cols-1 items-center xl:grid-cols-3 gap-4 p-4 pt-12 xl:pt-4 overflow-auto">
              <ProjectCarousel images={selectedProject?.images as string[]} />

              <div className='[&_strong]:text-foreground h-fit space-y-4 [&_strong]:font-semibold'>
                <div className='space-y-1 text-lg'>
                  <p className="font-semibold">{selectedProject?.title}</p>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Descripci&oacute;n:</p>
                  <p>
                    {selectedProject?.description as string}
                  </p>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Problema / Contexto:</p>
                  <p>
                    {selectedProject?.problem as string}
                  </p>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Soluci&oacute;n propuesta:</p>
                  <p>
                    {selectedProject?.solution as string}
                  </p>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Resultados:</p>
                  <p>
                    {selectedProject?.impact as string}
                  </p>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Caracter&iacute;sticas principales:</p>
                  <ul>
                    {selectedProject?.functionalities.map((func, index) => (
                      <li key={index}>{func}</li>
                    ))}
                  </ul>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Desaf&iacute;os y aprendizajes:</p>
                  <p>
                    {selectedProject?.learning as string}
                  </p>
                </div>

                <div className='space-y-1'>
                  <p className="font-semibold">Stack tecnol&oacute;gico:</p>
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