import { Appfont, Appheading } from "../../../theme/typo";
import AppButton from "../../atoms/AppButton";
import "./style.css";

const MainAvis = () => {
  return (
    <div className="main-avis-section">
      <div className="div-avis ">
        <div className="dv-img">
          <img
            src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e92076e5f319cf627684_Rectangle%204.svg"
            loading="lazy"
            width={296}
            alt=""
            className="jo"
          />
        </div>
        <div className="div-cs">
          <div className="stars-siv">
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
