import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import { CheckCircle2 } from "lucide-react";
  
const Formation = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative flex items-center justify-center -mb-4">
              <h1 className="title-acidgrotesk text-black-no-gradient -mb-24 text-3xl sm:text-4xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
                Formation
            </h1>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 text-center">
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
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">
                  Vous souhaitez former les collaborateurs de votre entreprise à l'IA ?
                </h2>
                <p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-8">
                  Des formations adaptées à tous les niveaux :
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-lg font-semibold text-gray-800">
                      Comprendre l'IA générative et décisionnel
                  </p>
                </div>
              </div>
              
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-lg font-semibold text-gray-800">
                      Utiliser les IA métiers au quotidien
                    </p>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl border border-pink-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                    <p className="text-lg font-semibold text-gray-800">
                      Créer des prompts professionnels
                    </p>
                  </div>
              </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-lg font-semibold text-gray-800">
                      Concevoir une automatisation de A à Z
                </p>
              </div>
                </div>
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

