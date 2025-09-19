import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-white">
            <div className="flex items-center mb-6">
              <Sparkles className="h-6 w-6 text-cyan mr-2" />
              <span className="text-cyan font-medium">Innovation • Performance • Futur</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-hero-effect">
              Booster votre performance avec{" "}
              <span className="text-warm-gradient text-glow">l'IA</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Transformez vos processus avec l'IA : gagnez du temps, automatisez vos tâches et 
              formez vos équipes aux outils de demain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="shadow-hero group">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="secondary" size="lg" className="border-2 border-secondary text-secondary-foreground hover:bg-secondary/90">
                Découvrir nos solutions
              </Button>
            </div>
          </div>
          
          {/* Right column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Intelligence artificielle moderne"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;