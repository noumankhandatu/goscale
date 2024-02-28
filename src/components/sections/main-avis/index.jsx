import { Appfont, Appheading } from "../../../theme/typo";
import AppButton from "../../atoms/AppButton";

const MainAvis = () => {
  return (
    <div style={mainsection}>
      <div style={divAvis}>
        <img
          src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e92076e5f319cf627684_Rectangle%204.svg"
          loading="lazy"
          width={296}
          alt=""
          className="jo"
        />
        <div style={divCsStyle}>
          <div style={starsSivStyle}>
            <img
              src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e2538f5ea365cddc043b_Star%201.svg"
              loading="lazy"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e2538f5ea365cddc043b_Star%201.svg"
              loading="lazy"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e2538f5ea365cddc043b_Star%201.svg"
              loading="lazy"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e2538f5ea365cddc043b_Star%201.svg"
              loading="lazy"
              alt=""
            />
            <img
              src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e2538f5ea365cddc043b_Star%201.svg"
              loading="lazy"
              alt=""
            />
          </div>
          <Appheading>
            <strong>
              Endorsed by Experts: Jonathan Ecom Trusts Us for his Facebook Ads Success
            </strong>
          </Appheading>
          <Appfont>
            Jonathan Ecom, a renowned e-commerce YouTuber, has made our service a key part of his
            strategy to generate over 7 figures with his e-commerce stores &amp; brands.
          </Appfont>
          <AppButton />
        </div>
      </div>
    </div>
  );
};

export default MainAvis;

const mainsection = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "0",
  paddingBottom: "0",
  display: "flex",
};

const divAvis = {
  width: "100%",
  height: "auto",
  maxWidth: "1200px",
  gridColumnGap: "24px",
  gridRowGap: "24px",
  backgroundColor: "#141824",
  backgroundImage:
    "url(https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e9010d28dc50fb74cbe8_Group%2011.svg)",
  backgroundPosition: "100% 0",
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",
  border: "2px #0c6cfb",
  borderRadius: "24px",
  padding: "40px",
  display: "flex",
};
const divCsStyle = {
  width: "605px",
  gridColumnGap: "24px",
  gridRowGap: "24px",
  flexDirection: "column",
  alignItems: "flex-start",
  display: "flex",
};

const starsSivStyle = {
  display: "flex",
  width: "auto",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};
