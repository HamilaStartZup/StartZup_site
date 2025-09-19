import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const solutions = [
    { name: "Consulting IA", href: "/consulting-ia" },
    { name: "Formation IA", href: "/formation-ia" },
    { name: "Cybersécurité", href: "/cybersecurite" },
    { name: "Support IT & Infogérance", href: "/support-it" },
    { name: "VR & 3D", href: "/vr-3d" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">Start IA</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformez vos processus avec l'IA : gagnez du temps, automatisez vos tâches et 
              formez vos équipes aux outils de demain.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@start-ia.fr</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nos solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a 
                    href={solution.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <a href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/politique-rgpd" className="text-muted-foreground hover:text-primary transition-colors">
                  Politique RGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Start IA. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/mentions-legales" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Mentions légales
            </a>
            <a href="/politique-rgpd" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              RGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;