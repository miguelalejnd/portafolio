import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

type MyNavigationMenuProps = NavigationMenuProps & {
  closeSheet?: (open: boolean) => void;
};

export const NavMenu = ({ className, closeSheet, ...props }: MyNavigationMenuProps) => (
  <NavigationMenu
    className={cn("data-[orientation=vertical]:items-start", className)}
    {...props}
  >
    <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#about" onClick={() => closeSheet && closeSheet(false)}>
            Sobre m&iacute;
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#skills" onClick={() => closeSheet && closeSheet(false)}>
            Habilidades
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#experience" onClick={() => closeSheet && closeSheet(false)}>
            Experiencia
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem> */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#projects" onClick={() => closeSheet && closeSheet(false)}>
            Proyectos
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#contact" onClick={() => closeSheet && closeSheet(false)}>
            Contacto
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);