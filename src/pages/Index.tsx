import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        
        {/* Section Vidéo YouTube */}
        <section className="pt-4 pb-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/E75tr_xLRfw"
                  title="Start Zup Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
