import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import whatsappImage from "@/assets/WhatsApp2.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center py-16 lg:py-24">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${whatsappImage})` }}
      />
      {/* Overlay pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 bg-white/35" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="w-full">
          <div className="text-foreground">
            <h1 className="title-acidgrotesk text-black-no-gradient mb-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              Libérons les talents des Quartiers<br /> Prioritaires
              de la Ville pour façonner<br />
              le futur du numérique et de l'IA.
            </h1>
            <br />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg" className="gradient-accent text-accent-foreground shadow-hero border-0">
                <a href="/a-propos">Notre manifeste</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;