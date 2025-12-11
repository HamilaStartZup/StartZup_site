import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import youtubeImage from "@/assets/youtube.jpg";

const Temoignage = () => {
  useReveal();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 gradient-hero reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-acidgrotesk text-black-no-gradient -mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 8px rgba(56,189,248,0.25), 0 0 16px rgba(56,189,248,0.15), 0 0 24px rgba(56,189,248,0.1)' }}>
              Témoignages
            </h1>
          </div>
        </section>

        {/* Témoignages vidéos */}
        <section className="py-16 lg:py-20 bg-white reveal-left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fEXVW-0MPhI?start=4"
                    title="Témoignage 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YHGu-2wuPe4"
                    title="Témoignage 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/INkZDnOfgMs"
                    title="Témoignage 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/OFJ8X3QNKoY"
                    title="Témoignage 4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/gVf8Lo_37mE"
                    title="Témoignage 5"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fiRGMD43SeE"
                    title="Témoignage 6"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HZhL77ILIBs"
                    title="Formation Start Zup 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/7gsY7SYxick?start=1"
                    title="Formation Start Zup 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/uwkJNPBe5Po?start=1"
                    title="Formation Start Zup 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-4 mt-10">
              <div className="px-6 py-4 rounded-lg relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.6), rgba(139, 92, 246, 0.6), transparent)' }}>
                <div className="absolute inset-0 bg-white/80 z-0"></div>
                <div className="relative z-10">
                  <a 
                    href="https://www.youtube.com/@StartZup/shorts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <span className="text-black font-semibold text-lg">Plus de vidéos sur notre chaîne Youtube</span>
                  </a>
                </div>
              </div>
              <a 
                href="https://www.youtube.com/@StartZup/shorts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src={youtubeImage} 
                  alt="Voir plus de vidéos sur YouTube" 
                  className="h-auto max-w-[120px] cursor-pointer bg-transparent"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Temoignage;

