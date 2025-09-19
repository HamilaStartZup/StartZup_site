import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
