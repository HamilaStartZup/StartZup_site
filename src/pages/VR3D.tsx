import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useReveal } from "@/hooks/useReveal";

const VR3D = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-24" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              VR & 3D
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 text-center">
              Visites immersives, maquettes interactives et animations vidéo : mettez en valeur vos projets comme jamais.
            </p>
            
            {/* Section d'espacement */}
            <div className="relative -mb-8 sm:-mb-16 min-h-[80px] sm:min-h-[100px] md:min-h-[200px]">
            </div>
            <div className="mt-4 sm:mt-8">
              <Button 
                asChild
                variant="accent" 
                size="lg" 
                className="gradient-accent text-accent-foreground shadow-hero w-full sm:w-auto"
              >
                <a href="/contact?service=vr-3d">Réserver une démo VR</a>
              </Button>
            </div>
          </div>
        </section>

        {/* La réalité virtuelle */}
        <section className="py-12 lg:py-16 bg-purple-50 reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-center -gap-4">
              <div className="flex-1 lg:order-2 max-w-lg lg:ml-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>La "réalité virtuelle" : le sommet de la qualité visuelle</h2>
                <p className="text-lg text-black text-justify">
                  L'immersion dans le projet à l'aide d'un casque VR permet de voir les intérieurs/extérieurs avec un ressenti des volumes, de l'ambiance et une circulation rigoureusement identique à la réalité.<br /><br /> Bien plus simple à tester qu'à expliquer, je vous invite à prendre rendez-vous avec nous pour essayer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* La création 3D d'animations */}
        <section className="py-12 lg:py-16 bg-white reveal-right">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>La création 3D d'animations</h2>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Animation plus impactante */}
              <Card className="border-2 hover:shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#bf5af2' }}>L'animation plus impactante que le texte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    Les utilisateurs retiennent <strong>95 %</strong> d'un message dans une vidéo, contre seulement <strong>10 %</strong> lorsqu'ils le lisent sous forme de texte.
                  </p>
                </CardContent>
              </Card>

              {/* Animation pour booster l'achat */}
              <Card className="border-2 hover:shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#bf5af2' }}>L'animation, l'outil pour booster l'achat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    <strong>88 %</strong> des personnes affirment qu'une vidéo explicative les a convaincues d'acheter un produit ou un service.
                  </p>
                </CardContent>
              </Card>

              {/* Animation autoroute du cerveau */}
              <Card className="border-2 hover:shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)' }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center" style={{ color: '#bf5af2' }}>L'animation : l'autoroute du cerveau</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-justify">
                    D'après les études, le cerveau humain est capable de traiter les informations visuelles <br/> <strong>60 000 fois</strong> plus vite que le texte.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nos solutions immersives */}
        <section className="py-12 lg:py-16 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-12 font-inter text-center text-black" style={{ fontSize: '2rem', minHeight: 'auto' }}>Nos solutions immersives</h2>
            
            <div className="flex justify-center">
              <div className="w-full max-w-6xl">
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Visites virtuelles interactives */}
                  <Card className="border-2 hover:shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)' }}>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-center" style={{ color: '#bf5af2' }}>Visites virtuelles interactives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-justify">
                        Explorez vos projets comme dans Google Street View.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Maquettes 3D */}
                  <Card className="border-2 hover:shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)' }}>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-center" style={{ color: '#bf5af2' }}>Maquettes 3D</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-justify">
                        Comprenez volumes et ambiances.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Animations vidéo */}
                  <Card className="border-2 hover:shadow-lg hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)' }}>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-center" style={{ color: '#bf5af2' }}>Animations vidéo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-justify">
                        Présentez vos projets avec impact.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA final */}
        <section className="py-12 lg:py-16 bg-white text-center reveal">
          <Button 
            asChild
            variant="accent" 
            size="lg" 
            className="gradient-accent text-accent-foreground shadow-hero"
          >
            <a href="/contact?service=vr-3d">Tester une démo VR avec nous</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VR3D;


