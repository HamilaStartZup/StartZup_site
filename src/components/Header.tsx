import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const solutions = [
    { name: "Consulting IA", href: "/consulting-ia" },
    { name: "Formation IA", href: "/formation-ia" },
    { name: "Cybersécurité", href: "/cybersecurite" },
    { name: "Support IT & Infogérance", href: "/support-it" },
    { name: "VR & 3D", href: "/vr-3d" },
  ];

  return (
    <header className="relative bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              Start IA
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Nos solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {solutions.map((solution) => (
                  <DropdownMenuItem key={solution.name} asChild>
                    <a href={solution.href} className="w-full">
                      {solution.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/a-propos" className="text-foreground hover:text-primary transition-colors">
              À propos
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="accent" size="sm" className="gradient-warm text-cyan shadow-glow border-0">
              Prendre rendez-vous
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="space-y-4">
              <a href="/" className="block text-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Nos solutions</p>
                {solutions.map((solution) => (
                  <a
                    key={solution.name}
                    href={solution.href}
                    className="block pl-4 text-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </a>
                ))}
              </div>

              <a href="/a-propos" className="block text-foreground hover:text-primary transition-colors">
                À propos
              </a>
              <a href="/contact" className="block text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              
              <Button variant="accent" className="w-full mt-4 gradient-warm text-cyan shadow-glow border-0">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;