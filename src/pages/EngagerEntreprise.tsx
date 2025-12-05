import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";
import { Users, Target, Award, Briefcase, Lightbulb, Shield, TrendingUp, Heart } from "lucide-react";

const EngagerEntreprise = () => {
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
                Engager votre entreprise
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl -mb-8 sm:-mb-16 mx-auto text-center px-4 font-semibold">
              Recruter un talent formé par Start Zup
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
              <p className="text-lg md:text-xl text-black leading-relaxed text-center">
                Notre association d'intérêt général forme des talents issus des QPV aux compétences recherchées par les entreprises.
              </p>
              
              <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                Notre approche repose sur une logique simple et efficace : identifier des profils à fort potentiel, les préparer aux compétences techniques et opérationnelles que vous recherchez, puis vous proposer des candidats immédiatement employables.
              </p>
              
              <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                En mettant la formation au cœur du processus, nous garantissons une parfaite adéquation entre les compétences développées et les exigences de vos projets. Vous bénéficiez ainsi d'un recrutement plus rapide, plus fiable et mieux adapté à vos enjeux.
              </p>
              
              {/* Phrase mise en valeur */}
              <div className="mt-8 pt-8 border-t-2 border-blue-500">
                <p className="text-2xl md:text-3xl font-bold text-center text-black leading-relaxed">
                  Faites de vos recrutements un levier à la fois <span className="text-blue-600">performant</span> et <span className="text-purple-600">inclusif</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre approche - 3 étapes */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Notre approche en 3 étapes</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">1. Identifier</h3>
                  <p className="text-gray-700">Des profils à fort potentiel issus des QPV</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">2. Former</h3>
                  <p className="text-gray-700">Aux compétences techniques et opérationnelles recherchées</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">3. Proposer</h3>
                  <p className="text-gray-700">Des candidats immédiatement employables</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formation financée */}
        <section className="py-16 lg:py-20 bg-white reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-black mb-4">Formation financée et accompagnement complet</h2>
                      <p className="text-black leading-relaxed mb-4">
                        Les formations sont financées par un organisme tiers et incluent un accompagnement complet de <strong>450 heures</strong> ou de <strong>600 heures</strong> jusqu'à la prise de poste.
                      </p>
                      <p className="text-black leading-relaxed font-semibold">
                        Vous vous engagez à recruter la personne à l'issue de la formation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Un avantage supplémentaire */}
        <section className="py-16 lg:py-20 bg-slate-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
                Un avantage supplémentaire : un projet dédié pour votre entreprise
              </h2>
              
              <p className="text-lg text-black text-center mb-8">
                Durant son parcours, l'apprenant peut travailler sur :
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <Lightbulb className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-black mb-2">Un projet spécifique</h3>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <Target className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-black mb-2">Une recherche ou étude exploratoire</h3>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <Briefcase className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-black mb-2">Un POC aligné avec vos besoins</h3>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-lg text-black text-center mt-8 font-semibold">
                Nous apportons des solutions. Vous gagnez des compétences et une dynamique d'innovation.
              </p>
            </div>
          </div>
        </section>

        {/* En collaborant avec nous */}
        <section className="py-16 lg:py-20 bg-white reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              En collaborant avec nous, vous :
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">Sécurisez vos recrutements</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">Accédez à des talents motivés et opérationnels</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">Optimisez votre performance RH et votre engagement territorial</h3>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <Heart className="w-10 h-10 text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">Renforcez votre stratégie RSE sans complexité administrative</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Témoignages vidéos */}
        <section className="py-16 lg:py-20 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>
              Témoignages
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Espace pour 6 témoignages vidéos */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-video bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">Témoignage vidéo {index}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 lg:py-20 bg-slate-50 text-center reveal">
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

export default EngagerEntreprise;

