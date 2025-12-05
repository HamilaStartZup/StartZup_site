import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Building2, ArrowRight, Users, Target } from "lucide-react";

const CampusPartenaire = () => {
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
                Campus partenaire
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl -mb-8 sm:-mb-16 mx-auto text-center px-4 font-semibold">
              Devenez partenaire de START ZUP dans votre ville
            </p>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-20 bg-white reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-black leading-relaxed text-justify">
                Start Zup poursuit son développement dans plusieurs territoires afin de renforcer sa proximité avec les entreprises et les écosystèmes locaux.
              </p>
            </div>
          </div>
        </section>

        {/* Implantations actuelles */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Nos implantations actuelles
            </h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-base md:text-lg text-black leading-relaxed text-justify mb-8">
                Aujourd'hui, notre programme est implanté dans trois zones : <strong>Mantes-la-Jolie (78)</strong>, <strong>Trappes (78)</strong> et <strong>Paris 19 ème (75)</strong>. Ces implantations nous permettent de former des talents au plus près des besoins économiques et de créer des passerelles directes entre les apprenants et les entreprises locales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">Mantes-la-Jolie</h3>
                  <p className="text-gray-600">78</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">Trappes</h3>
                  <p className="text-gray-600">78</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">Paris 19 ème</h3>
                  <p className="text-gray-600">75</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projets 2026 */}
        <section className="py-16 lg:py-20 bg-white reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-4">En 2026, Start Zup ouvrira de nouveaux lieux</h2>
                      <p className="text-black leading-relaxed mb-4">
                        Afin d'élargir sa capacité d'accueil, d'augmenter son vivier de talents et de répondre à la demande croissante de partenaires souhaitant collaborer avec nous.
                      </p>
                      <p className="text-black leading-relaxed font-semibold">
                        Notre ambition : offrir des solutions concrètes aux entreprises tout en structurant un réseau territorial solide et cohérent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg bg-white">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start space-x-4">
                    <ArrowRight className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg md:text-xl text-black leading-relaxed">
                        Vous souhaitez accueillir Start Zup dans votre ville, votre tiers-lieu ou collaborer en tant qu'entreprise ? Contactez-nous pour étudier ensemble l'ouverture d'un site, la mise en place d'un partenariat ou l'intégration de nos solutions sur votre territoire.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-20 bg-white text-center reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Prêts à avancer ensemble ?
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

export default CampusPartenaire;

