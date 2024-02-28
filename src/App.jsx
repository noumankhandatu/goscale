import Beneiftis from "./components/sections/benefits";
import HeroSection from "./components/sections/hero";
import HowItWorkSection from "./components/sections/how-it-work";
import MainAvis from "./components/sections/main-avis";
import ObjectiveSection from "./components/sections/objective";
import Pricing from "./components/sections/pricing";
import SerivesSection from "./components/sections/services";

const App = () => {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <MainAvis />
      <Beneiftis />
      <ObjectiveSection />
      <SerivesSection />
      <HowItWorkSection />
      <Pricing />
    </div>
  );
};

export default App;
