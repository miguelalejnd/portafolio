import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/navbar/nav-menu.tsx";
import { NavigationSheet } from "@/components/navbar/navigation-sheet.tsx";
import { GithubLogo, LinkedInLogo } from "@/components/ui/icons";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <ModeToggle />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a href="https://www.linkedin.com/in/alejnd/" target="_blank">
              <LinkedInLogo />
            </a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a href="https://github.com/miguelalejnd" target="_blank">
              <GithubLogo />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;