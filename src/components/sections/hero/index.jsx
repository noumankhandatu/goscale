import { AppMainheading, Appfont } from "./../../../theme/typo";
import AppDiv from "./../../atoms/AppDiv";
import "./style.css";
import AppButton from "../../atoms/AppButton";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <AppMainheading sx={{ textAlign: "center" }}>
        Rent Premium Facebook Business Accounts
      </AppMainheading>
      <Appfont sx={{ textAlign: "center" }}>
        Premium & Verified Facebook profiles and Business managers to boost your ROAS without
        violating Meta Policies. <br /> We keep your ads flowing seamlessly 24/7!
      </Appfont>
      <AppDiv sx={{ textAlign: "center", mt: 5 }}>
        <AppButton />
      </AppDiv>
    </div>
  );
};

export default HeroSection;
