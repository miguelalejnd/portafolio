import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import type { HTMLAttributes } from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <Badge variant="secondary" className="my-4 mx-auto block">
          Sobre m&iacute;
        </Badge>
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            {/* <Badge variant="secondary" className="mb-4 mx-auto">
              About Me
            </Badge> */}
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Apasionado por la creaci&oacute;n de software que sirva a las personas.
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              En mi carrera profesional me he enfocado en el desarrollo
              de aplicaciones empresariales optimas.
              Mi experiencia incluye Spring Boot, React y arquitectura en la nube.
              Me apasiona crear soluciones elegantes a problemas complejos,
              adquirir y compartir conocimientos con la comunidad de desarrolladores.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <a href="http://github.com/miguelalejnd"  target="_blank"> Ver Github</a>
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download />
                <a href="CV-MiguelLopez-2026.pdf" target="_blank" download="CV-MiguelLopez-2026.pdf">Descargar CV</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      image
    </div>
  </div>
);
export default About;