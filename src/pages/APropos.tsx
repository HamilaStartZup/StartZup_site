import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
            
            {/* Section d'espacement comme les autres pages */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Notre mission */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-xl md:text-2xl text-black text-justify pl-6" style={{ lineHeight: '1.8' }}>
                  <span className="font-bold" style={{ color: 'hsl(251 146 60)' }}>Start-Zup</span> agit au cœur des <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>Quartiers Prioritaires de la Ville (QPV)</span> pour accompagner les talents dans les métiers du <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>numérique et de l'IA</span> depuis <span className="font-bold" style={{ color: 'hsl(251 146 60)' }}>2022</span>, avec une offre complète allant de la formation aux services spécialisés. Nous sommes nous-mêmes issus de ces territoires, avec des expériences reconnues et valorisées en <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>France</span> comme à l'<span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>international</span>. Nous croyons que ce <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>vivier de talents</span> représente une opportunité pour tous, pour faire émerger de nouvelles réussites et dynamiser l'innovation en France.
                </p>
              </div>
              
            <div className="relative">              
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <p className="text-xl md:text-2xl text-black text-justify pl-6" style={{ lineHeight: '1.8' }}>
                  Alors que la <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>tech et l'intelligence artificielle</span> connaissent une croissance rapide, nous ouvrons ces opportunités aux habitant(e)s des QPV afin de les connecter pleinement à cette dynamique de croissance économique. De nombreux <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>talents dans la tech et l'IA</span> issus des QPV réussissent et rayonnent dans leurs domaines, en France comme à l'étranger, montrant l'impact concret de ces parcours. Mais nous voulons aller plus loin : <span className="font-bold" style={{ color: 'hsl(251 146 60)' }}>élargir l'accès à ces métiers, multiplier les réussites</span> et créer un véritable <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>écosystème d'expertise et d'innovation</span> dans les QPV, où <span className="font-semibold" style={{ color: 'hsl(251 146 60)' }}>formation, accompagnement et services</span> se conjuguent pour transformer durablement le futur numérique et de l'IA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 lg:py-16 bg-white text-center reveal">
          <Button asChild variant="accent" size="lg" className="gradient-accent text-accent-foreground shadow-hero">
            <a href="/contact">Contactez-nous</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;


