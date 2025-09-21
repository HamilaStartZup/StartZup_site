import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, GraduationCap, Shield, Headphones, Gamepad2 } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "IA",
      description: "Solutions d'intelligence artificielle sur mesure",
      subSolutions: [
        {
          title: "Consulting IA",
          description: "Identifiez vos cas d'usage IA avec nos experts. Du diagnostic au projet pilote, nous vous aidons à intégrer l'IA efficacement et en toute sécurité.",
          link: "/consulting-ia"
        },
        {
          title: "Formation IA",
          description: "Passez de spectateur à acteur de l'IA. Des formations concrètes et pratiques pour comprendre, utiliser et déployer l'IA dans votre métier.",
          link: "/formation-ia"
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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--cyan)) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'brightness(1.2) contrast(1.1)' }}>
            Nos solutions
          </h2>
          <p className="text-lg text-cyan max-w-3xl mx-auto">
            Découvrez nos services modulaires conçus pour transformer votre entreprise avec les technologies de demain
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* IA Block - Special layout */}
          <Card className="md:col-span-2 gradient-card shadow-card hover:shadow-hero transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-warm-gradient text-glow">Intelligence Artificielle</CardTitle>
              <CardDescription className="text-lg text-cyan">
                Solutions d'IA complètes pour transformer votre entreprise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {solutions[0].subSolutions.map((subSolution, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-6 bg-card/50">
                    <h4 className="font-semibold text-lg mb-3 text-primary">{subSolution.title}</h4>
                    <p className="text-cyan mb-4">{subSolution.description}</p>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      En savoir plus
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other solutions */}
          {solutions.slice(1).map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="gradient-card shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-cyan mb-6 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Découvrir
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
