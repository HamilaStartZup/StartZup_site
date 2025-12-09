import { Separator } from "@/components/ui/separator";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const solutions = [
    { name: "Nos offres", href: "/expertise", color: "#0a84ff" },
    { name: "Engager votre entreprise", href: "/engager-entreprise", color: "#0a84ff" },
    { name: "Campus partenaire", href: "/campus-partenaire", color: "#0a84ff" },
  ];

  return (
    <footer className="bg-slate-800" style={{ backgroundColor: '#1F2937' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Start-Zup</div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@start-zup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Paris - Mantes-la-Jolie - Trappes <br /> France</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Nos offres</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a 
                    href={solution.href} 
                    className="text-gray-300 transition-colors"
                    style={{
                      '--hover-color': solution.color
                    } as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = solution.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <a href="/a-propos" className="text-gray-300 hover:text-accent transition-colors">
                  Notre manifeste
                </a>
              </li>
              <li>
                <a href="/board" className="text-gray-300 hover:text-accent transition-colors">
                  Board
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                  RGPD / Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 <span style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Start-zup</span>. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/mentions-legales" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
              RGPD / Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;