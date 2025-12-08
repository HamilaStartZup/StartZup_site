import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";
import whatsappImage from "@/assets/WhatsApp2.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        
        {/* Section Image WhatsApp */}
        <section className="pt-4 pb-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <img 
                src={whatsappImage} 
                alt="Équipe Start Zup" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-sm text-gray-600 text-left mt-2 italic">
                Rencontre L'Oréal- Start-Zup - Session 2025
              </p>
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
