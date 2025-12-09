import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";
import { CheckCircle } from "lucide-react";

const POC = () => {
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
                Donnez vie à vos idées grâce à un POC.
              </h1>
            </div>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-20 bg-white reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-2xl text-black leading-relaxed text-center">
                Chez Start-Zup, nous vous aidons à transformer votre concept en un POC solide, pertinent et opérationnel.
              </p>
            </div>
          </div>
        </section>

        {/* Nous mettons à votre disposition */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Nous mettons à votre disposition :
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors">Un accompagnement personnalisé</h3>
                  <p className="text-lg md:text-2xl text-black group-hover:text-white/90 transition-colors">Pour clarifier votre besoin et structurer votre idée.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors">Une équipe de talents formés</h3>
                  <p className="text-lg md:text-2xl text-black group-hover:text-white/90 transition-colors">Data, IA, développement, cybersécurité pour concevoir un POC qui répond à vos enjeux.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors">Un suivi méthodologique</h3>
                  <p className="text-lg md:text-2xl text-black group-hover:text-white/90 transition-colors">Pour vous guider à chaque étape, de l'idéation à la mise en test.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white group hover:border-transparent" style={{ 
                background: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, hsl(350 86% 64%), hsl(18 95% 58%))';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = '';
              }}>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors">Des conseils stratégiques</h3>
                  <p className="text-lg md:text-2xl text-black group-hover:text-white/90 transition-colors">Pour analyser les résultats, ajuster votre projet et préparer la suite (MVP, développement complet, présentation à des investisseurs, etc.).</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Notre objectif */}
        <section className="py-16 lg:py-20 bg-white reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-4">Notre objectif</h2>
                      <p className="text-black leading-relaxed text-lg">
                        Notre objectif est simple : vous permettre de valider rapidement votre solution, d'accélérer votre innovation et de sécuriser vos décisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-20 bg-slate-50 text-center reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg md:text-2xl text-black leading-relaxed mb-8 max-w-3xl mx-auto">
              Prêt à concrétiser votre idée ? Nous sommes là pour vous accompagner.
            </p>
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

export default POC;
