import Compliance from "../../components/Compliance";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import OurOfferings from "../../components/OurOfferings";
import OurProcess from "../../components/OurProcess";
import PartnersSlider from "../../components/PartnersSlider";
import TrustUs from "../../components/TrustUs";
import WhatWeRepresent from "../../components/WhatWeRepresent";
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
        <WhatWeRepresent />
        <Compliance />
        <TrustUs />
        <OurProcess />
      </main>
    </div>
  );
};

export default HomePage;
