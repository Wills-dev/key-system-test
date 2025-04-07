import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen h-full bg-[#05071E]">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default HomePage;
