import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, GraduationCap, Shield, Headphones, Gamepad2 } from "lucide-react";

// Fonction pour retourner le texte sans modification
const italicizeLastWord = (text: string) => {
  return text;
};

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "IA",
      description: "Solutions d'intelligence artificielle sur mesure",
      subSolutions: [
        {
          title: "ENGAGEZ VOTRE ENTREPRISE",
          description: "",
          link: "/engager-entreprise"
        },
        {
          title: "START-ZUP EXPERTISE",
          description: "",
          link: "/expertise"
        },
        {
          title: "CAMPUS PARTENAIRE",
          description: "",
          link: "/campus-partenaire"
        },
        {
          title: "DONNEZ VIE À VOS IDÉES GRÂCE À UN POC",
          description: "",
          link: "/poc"
        }
      ]
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protégez votre activité comme un grand compte. Une cybersécurité accessible : surveillance 24/7, détection en temps réel, alertes claires et accompagnement humain.",
      link: "/cybersecurite"
    },
    {
      icon: Headphones,
      title: "Support IT & Infogérance",
      description: "Votre service informatique à la demande. Helpdesk réactif, maintenance préventive, gestion cloud et réseaux, tout pour assurer la continuité de votre activité.",
      link: "/support-it"
    },
    {
      icon: Gamepad2,
      title: "VR & 3D",
      description: "Valorisez vos projets grâce à la 3D et à la réalité virtuelle. Visites immersives, animations vidéo, maquettes interactives : offrez une expérience qui fait la différence.",
      link: "/vr-3d"
    }
  ];

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-10">
          <h2
            className="title-acidgrotesk text-black-no-gradient heading-style-cards-service"
            style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)', letterSpacing: '-1px', lineHeight: '1.1', marginBottom: '-6rem', fontSize: '4.375rem' }}
          >
            Nos solutions
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto text-justify">
            Découvrez nos services modulaires conçus pour transformer votre entreprise {""}
            <span className="typewriter typewriter-31">avec les technologies de demain</span>
          </p>
        </div> */}

        <div className="space-y-8">
          {/* IA Block - Special layout */}
          <Card className="shadow-card bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold heading-style-cards-service" style={{ color: '#0a84ff' }}>
                
              </CardTitle>
              
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {solutions[0].subSolutions.map((subSolution, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-4 sm:p-6 shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer hover-tilt-outline flex flex-col aspect-[4/3] relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
                    <div className="absolute inset-0 bg-white/80 z-0"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <h4 className="font-bold mb-3 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px]" style={{ textAlign: 'center', letterSpacing: '0', wordSpacing: '-0.1em', fontFamily: 'monospace' }}>{italicizeLastWord(subSolution.title)}</h4>
                      {subSolution.description && (
                        <p className="mb-0 text-black text-justify">{italicizeLastWord(subSolution.description)}</p>
                      )}
                      <div className={subSolution.title === "CAMPUS PARTENAIRE" || subSolution.title === "ENGAGEZ VOTRE ENTREPRISE" || subSolution.title === "START-ZUP EXPERTISE" ? "mt-20 text-center" : "mt-8 text-center"}>
                        <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transition-colors">
                      <a href={subSolution.link}>Découvrir</a>
                    </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
            </CardContent>
          </Card>

          {/* Grille des 3 autres cartes */}
  
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
