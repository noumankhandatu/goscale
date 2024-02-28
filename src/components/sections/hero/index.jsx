import { AppMainheading, Appfont } from "./../../../theme/typo";
import AppDiv from "./../../atoms/AppDiv";
import AppButton from "../../atoms/AppButton";

const HeroSection = () => {
  return (
    <div style={mainDiv}>
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

const mainDiv = {
  backgroundImage:
    'url("https://assets-global.website-files.com/6561683d7688a3e476387de2/6566e9c75ea27b18ff3c5d73_64878f1ef909d40a40634088_Group%2047563%20(2).png")',
  backgroundPosition: "100% 100%",
  backgroundSize: "auto",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "160px",
  paddingBottom: "80px",
  display: "flex",
};
