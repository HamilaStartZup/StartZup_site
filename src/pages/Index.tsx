import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";
import whatsappImage from "@/assets/WhatsApp.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        
        {/* Section Image WhatsApp */}
        <section className="pt-4 pb-4 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <img 
                src={whatsappImage} 
                alt="Équipe Start Zup" 
                className="w-full h-auto object-cover rounded-lg"
              />
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
