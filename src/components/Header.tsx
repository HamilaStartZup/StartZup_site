import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const nosOffres = [
    { name: "Expertise", href: "/expertise" },
    { name: "Formation", href: "/formation" },
    { name: "POC", href: "/poc" },
  ];

  const nosOffresColorClassesByHref = (href: string) => {
    if (href === "/expertise" || href === "/formation" || href === "/poc") {
      return {
        text: "text-blue-600",
        hoverBg: "hover:bg-blue-50",
        border: "bg-blue-500",
        highlightBg: "data-[highlighted]:bg-blue-50",
        highlightText: "data-[highlighted]:text-blue-700",
      };
    }
    return { text: "text-black", hoverBg: "hover:bg-gray-50", border: "bg-gray-500", highlightBg: "", highlightText: "" };
  };





  return (
    <header className="relative sticky top-0 z-50" style={{ backgroundColor: '#1F2937' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex flex-col items-center">
              <img src={logo} alt="Start-zup" className="h-8 w-auto mb-1" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Start-zup</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="transition-colors relative text-white hover:text-gray-200">
              Accueil
              {currentPath === "/" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center transition-colors relative text-white hover:text-gray-200">
                Nos offres
                <ChevronDown className="ml-1 h-4 w-4 text-white" />
                {nosOffres.some(s => s.href === currentPath) && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {nosOffres.map((offre) => {
                  const c = nosOffresColorClassesByHref(offre.href);
                  return (
                    <DropdownMenuItem key={offre.name} asChild>
                      <a
                        href={offre.href}
                        className={`w-full ${c.text} ${c.hoverBg} ${c.highlightBg} ${c.highlightText} hover:text-current`}
                      >
                        {offre.name}
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/engager-entreprise" className="transition-colors relative text-white hover:text-gray-200">
              Engagez votre entreprise
              {currentPath === "/engager-entreprise" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
            </a>

            <a href="/campus-partenaire" className="transition-colors relative text-white hover:text-gray-200">
              Campus partenaire
              {currentPath === "/campus-partenaire" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
            </a>

            <a href="/board" className="transition-colors relative text-white hover:text-gray-200">
              Board
              {currentPath === "/board" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
            </a>

            <a href="/a-propos" className="transition-colors relative text-white hover:text-gray-200">
              Notre manifeste
              {currentPath === "/a-propos" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
            </a>

            <a href="/temoignage" className="transition-colors relative text-white hover:text-gray-200">
              Témoignages
              {currentPath === "/temoignage" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild variant="accent" size="sm" className="gradient-accent text-accent-foreground shadow-hero border-0">
              <a href="/contact">Contactez-nous</a>
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
            <div className="space-y-3">
              <a href="/" className="block w-full py-2 transition-colors relative text-white hover:text-gray-200">
                Accueil
                {currentPath === "/" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </a>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-white py-2">Nos offres</p>
                {nosOffres.map((offre) => {
                  const c = nosOffresColorClassesByHref(offre.href);
                  return (
                    <a
                      key={offre.name}
                      href={offre.href}
                      className={`block w-full pl-4 py-2 text-white hover:text-gray-200 transition-colors relative ${offre.href === currentPath ? 'font-semibold' : ''}`}
                    >
                      {offre.name}
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 ${c.border}`}></span>
                    </a>
                  );
                })}
              </div>

              <a href="/engager-entreprise" className="block w-full py-2 transition-colors relative text-white hover:text-gray-200">
                Engagez votre entreprise
                {currentPath === "/engager-entreprise" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </a>

              <a href="/campus-partenaire" className="block w-full py-2 transition-colors relative text-white hover:text-gray-200">
                Campus partenaire
                {currentPath === "/campus-partenaire" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </a>

              <a href="/board" className="block w-full py-2 transition-colors relative text-white hover:text-gray-200">
                Board
                {currentPath === "/board" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </a>

              <a href="/a-propos" className="block w-full py-2 transition-colors relative text-white hover:text-gray-200">
                Notre manifeste
                {currentPath === "/a-propos" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </a>

              <a href="/temoignage" className="block w-full py-2 transition-colors relative text-white hover:text-gray-200">
                Témoignages
                {currentPath === "/temoignage" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>}
              </a>
              
              <Button asChild variant="accent" className="w-full mt-4 gradient-accent text-accent-foreground shadow-hero border-0">
                <a href="/contact">Contactez-nous</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;