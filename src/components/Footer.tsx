import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const solutions = [
    { name: "Expertise", href: "/expertise", color: "#0a84ff" },
    { name: "Cybersécurité", href: "/cybersecurite", color: "#ff2d55" },
    { name: "Support IT & Infogérance", href: "/support-it", color: "#22c55e" },
    { name: "VR & 3D", href: "/vr-3d", color: "#bf5af2" },
  ];

  return (
    <footer className="bg-slate-800" style={{ backgroundColor: '#1F2937' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Start-Zup</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformez vos processus avec l'IA : gagnez du temps, automatisez vos tâches et 
              formez vos équipes aux outils de demain.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@start-zup.fr</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Paris - Mantes-la-Jolie - Trappes <br /> France</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Nos solutions</h3>
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
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/politique-rgpd" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                  Politique RGPD
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
              Mentions légales
            </a>
            <a href="/politique-rgpd" className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
              RGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;