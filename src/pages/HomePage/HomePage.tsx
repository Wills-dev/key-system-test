import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import OurOfferings from "../../components/OurOfferings";
import PartnersSlider from "../../components/PartnersSlider";
import WhyChooseUs from "../../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen h-full bg-[#05071E]">
      <Header />
      <main>
        <HeroSection />
        <PartnersSlider />
        <WhyChooseUs />
        <OurOfferings />
      </main>
    </div>
  );
};

export default HomePage;
