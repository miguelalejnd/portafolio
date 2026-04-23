//import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button";
//import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      /> */}
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Fullstack Web Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            &iexcl;Bienvenido!
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Hola, soy Miguel, un desarrollador web Full-Stack con Java y Spring; React y JavaScript/TypeScript. Poseo conocimientos en gestión de infraestructura cloud, contenerización con Docker, Podman, Kubernetes, y administración de sistemas Linux.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <a href="#about">M&aacute;s sobre m&iacute; <CircleArrowDown className="!h-5.5 !w-5.5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;