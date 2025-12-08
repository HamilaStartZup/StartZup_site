import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import photoImage from "@/assets/PHOTO.jpeg";

const Formation = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
          <div className="absolute inset-0 bg-white/80 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="relative flex items-center justify-center -mb-4">
              <h1 className="title-acidgrotesk text-black-no-gradient -mb-24 text-3xl sm:text-4xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
                Formation
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl -mb-8 sm:-mb-16 mx-auto text-center px-4 font-semibold">
              Formez vos collaborateurs à l'IA
            </p>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-20 bg-white reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <img 
                  src={photoImage} 
                  alt="Formation entreprise IA" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-20 bg-white text-center reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Prêts à former vos équipes ?
            </h2>
            <Button 
              asChild
              variant="accent" 
              size="lg" 
              className="gradient-accent text-accent-foreground shadow-hero"
            >
              <a href="/contact">Contactez-nous !</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Formation;

