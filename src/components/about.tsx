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
              Un poco sobre qui&eacute;n soy
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Soy ingeniero de sistemas inform&aacute;ticos con foco en construir soluciones que resuelven problemas reales. En desarrollo me especializo como Full-Stack con Java, Spring Boot y React, y disfruto igualmente del lado DevOps; automatizar despliegues, gestionar infraestructura cloud, mantener sistemas Linux y redes.
            </p>
            <p className="text-muted-foreground mb-6 text-justify">
              Creo que el buen software no es solo el que funciona, sino el que puede entenderse, mantenerse y evolucionar. Por eso me importa escribir código limpio.
            </p>
            <p className="text-muted-foreground mb-6 text-justify">
              Me gusta tabajar en equipo pues permite compartir conocimientos y aprender de otros. Siempre estoy buscando nuevas oportunidades para crecer como profesional.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <a href="http://github.com/miguelalejnd"  target="_blank"> Ver mi Github</a>
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download />
                <a href="CV-MiguelLopez-2026.pdf" target="_blank" download="CV-MiguelLopez-2026.pdf">Descargar mi CV</a>
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