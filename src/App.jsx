import Beneiftis from "./components/sections/benefits";
import HeroSection from "./components/sections/hero";
import MainAvis from "./components/sections/main-avis";

const App = () => {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <MainAvis />
      <Beneiftis />
    </div>
  );
};

export default App;
