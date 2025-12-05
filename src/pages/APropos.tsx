import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";

const APropos = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-6" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              Notre manifeste
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl -mb-8 sm:-mb-16 mx-auto text-center px-4">
              Nous réunissons des spécialistes en IA, cybersécurité, IT et réalité virtuelle pour transformer vos projets en réussites concrètes.
            </p>
            
            {/* Section d'espacement comme les autres pages */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
            <div className="mt-4 sm:mt-8">
              <Button asChild variant="accent" size="lg" className="gradient-accent text-accent-foreground shadow-hero w-full sm:w-auto">
                <a href="/contact">Prendre rendez-vous avec nos experts</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Notre mission */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-black leading-relaxed text-justify">
                Start Zup agit au cœur des Quartiers Prioritaires de la Ville (QPV) pour accompagner les talents dans les métiers du numérique et de l'IA depuis 2022, avec une offre complète allant de la formation aux services spécialisés. Nous sommes nous-mêmes issus de ces territoires, avec des expériences reconnues et valorisées en France comme à l'international. Nous croyons que ce vivier de talents représente une opportunité pour tous, pour faire émerger de nouvelles réussites et dynamiser l'innovation en France.
              </p>
              <p className="text-base md:text-lg text-black leading-relaxed text-justify mt-4">
                Alors que la tech et l'intelligence artificielle connaissent une croissance rapide, nous ouvrons ces opportunités aux habitant(e)s des QPV afin de les connecter pleinement à cette dynamique de croissance économique. De nombreux talents dans la tech et l'IA issus des QPV réussissent et rayonnent dans leurs domaines, en France comme à l'étranger, montrant l'impact concret de ces parcours. Mais nous voulons aller plus loin : élargir l'accès à ces métiers, multiplier les réussites et créer un véritable écosystème d'expertise et d'innovation dans les QPV, où formation, accompagnement et services se conjuguent pour transformer durablement le futur numérique et de l'IA.
              </p>
            </div>
          </div>
        </section>

        {/* Notre expertise */}
        <section className="py-12 lg:py-16 bg-slate-50 reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Notre expertise</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:border-l-8 transition-all duration-300 cursor-pointer">
                <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-black font-medium">Intelligence artificielle & automatisation</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 hover:border-l-8 transition-all duration-300 cursor-pointer">
                <div className="w-3 h-3 bg-red-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-black font-medium">Cybersécurité (SOC sur-mesure)</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 hover:border-l-8 transition-all duration-300 cursor-pointer">
                <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-black font-medium">Support IT & Infogérance</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 hover:border-l-8 transition-all duration-300 cursor-pointer">
                <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-black font-medium">Réalité virtuelle & 3D</span>
              </div>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-inter text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Start Zup, un écosystème d'expertise et d'innovation</h2>
            
            {/* Timeline container */}
            <div className="relative">              
              {/* Team members with timeline dots and connecting lines */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
                {/* Placeholders for team members; replace with real portraits later */}
                <div className="border border-border/50 rounded-lg p-6 bg-card/50 relative group hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:border-2 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full hidden lg:block group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  {/* Vertical line from card */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 hidden lg:block group-hover:w-2 transition-all duration-300"></div>
                  <p className="font-semibold text-black"></p>
                  <p className="text-black">Expert IA</p>
                </div>
                
                <div className="border border-border/50 rounded-lg p-6 bg-card/50 relative group hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 hover:border-2 hover:border-red-500 transition-all duration-300 cursor-pointer">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full hidden lg:block group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  {/* Vertical line from card */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 w-1 h-full bg-red-500 hidden lg:block group-hover:w-2 transition-all duration-300"></div>
                  <p className="font-semibold text-black"></p>
                  <p className="text-black">Responsable cybersécurité</p>
                </div>
                
                <div className="border border-border/50 rounded-lg p-6 bg-card/50 relative group hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 hover:border-2 hover:border-green-500 transition-all duration-300 cursor-pointer">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full hidden lg:block group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  {/* Vertical line from card */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500 hidden lg:block group-hover:w-2 transition-all duration-300"></div>
                  <p className="font-semibold text-black"></p>
                  <p className="text-black">Responsable IT</p>
                </div>
                
                <div className="border border-border/50 rounded-lg p-6 bg-card/50 relative group hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 hover:border-2 hover:border-purple-500 transition-all duration-300 cursor-pointer">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full hidden lg:block group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  {/* Vertical line from card */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500 hidden lg:block group-hover:w-2 transition-all duration-300"></div>
                  <p className="font-semibold text-black"></p>
                  <p className="text-black">Spécialiste VR</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre vision business */}
        <section className="py-12 lg:py-16 bg-slate-50 reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Notre vision business</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-card hover:shadow-hero transition-all duration-300 border-2" style={{ background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)' }}>
                <CardContent className="p-6 md:p-8">
                  <p className="text-black text-center text-lg leading-relaxed">
              Une transformation digitale réussie repose sur expertise technique, pédagogie et fiabilité.
            </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 lg:py-16 bg-white text-center reveal">
          <Button asChild variant="accent" size="lg" className="gradient-accent text-accent-foreground shadow-hero">
            <a href="/contact">Prendre rendez-vous avec un expert</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;


