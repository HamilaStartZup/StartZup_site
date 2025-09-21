import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Lightbulb, Target } from "lucide-react";

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Expertise reconnue",
      description: "Des experts dans chaque domaine : IA, cybersécurité, support IT, réalité virtuelle."
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Des solutions conçues pour les PME, collectivités et startups : simples, abordables et concrètes."
    },
    {
      icon: Lightbulb,
      title: "Accompagnement humain",
      description: "Pas de jargon compliqué : nous vulgarisons et vous guidons pas à pas."
    },
    {
      icon: Target,
      title: "Résultats concrets",
      description: "Décisions plus rapides, projets mieux valorisés, systèmes plus sécurisés."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pourquoi choisir <span style={{ background: 'linear-gradient(135deg, hsl(59 130 246), hsl(139 92 246))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: '0.7' }}>Start IA</span><span className="text-foreground"> ?</span>
          </h2>
          <p className="text-lg text-cyan max-w-3xl mx-auto">
            Notre expertise et notre approche humaine font la différence dans votre transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="text-center gradient-card shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <IconComponent className="h-8 w-8 text-cyan" />
                  </div>
                  <CardTitle className="text-xl text-primary">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-cyan leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" className="shadow-hero">
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;