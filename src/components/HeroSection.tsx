import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import whatsappImage from "@/assets/WhatsApp.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center py-8 sm:py-12 md:py-16 lg:py-24">
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
            <h1 className="font-bold mb-4 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px] w-full leading-tight uppercase" style={{ letterSpacing: '0', fontFamily: 'monospace' }}>
              L'ascenseur social par la tech et l'IA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-6 text-center">
              Créer. Innover. Inclure.
            </p>
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