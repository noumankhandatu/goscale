import { primary } from "../../../theme/colors";
import { Appcaption, Appfont, Appheading } from "../../../theme/typo";
import AppButton from "../../atoms/AppButton";
import "./style.css";

const ObjectiveSection = () => {
  return (
    <div>
      <section className="objections-section">
        <div className="div-objec">
          <div className="side">
            <div style={{ color: primary }}>
              <em>Scale Smarter with GoScale</em>
            </div>
            <Appheading>
              <strong>Ad Success Unlocked</strong>
            </Appheading>
            <Appfont>
              GoScale offers you verified Business Managers and continuous support, it's time to
              scale.
            </Appfont>
            <AppButton />
            <div className="seperator obj" />
            <div className="w-layout-grid _2x2">
              <ObjectItem
                iconSrc="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565ece7605096c5d04d5229_Frame%20114.svg"
                title="A clear offer"
                description="Transparent, Reliable Account Solutions"
              />
              <ObjectItem
                iconSrc="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565ed975ec08a525083fc31_Frame%20114%20(2).svg"
                title="Verified business managers"
                description="Peak Performance, Verified Accounts"
              />
              <ObjectItem
                iconSrc="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565eda2c4fc30241aeb8e92_Frame%20114%20(3).svg"
                title="Responsive service"
                description="Swift Support, 24/7 Assistance"
              />
              <ObjectItem
                iconSrc="https://assets-global.website-files.com/6561683d7688a3e476387de2/656814adaf393aa82e21ebe5_Frame%20114%20(4).svg"
                title="Unlimited BM"
                description="Unlimited Access, Endless Possibilities"
              />
            </div>
          </div>
          <div className="side is-r">
            <img
              src="https://assets-global.website-files.com/6561683d7688a3e476387de2/656644d431213f234777b394_Group%2035543%20(1).svg"
              loading="lazy"
              alt=""
              className="asset-obj"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObjectiveSection;
const ObjectItem = ({ iconSrc, title, description }) => {
  const objecStyle = {
    display: "flex",
    alignItems: "center",
    textAlign: "start",
    color: "white",
  };

  const objecIconStyle = {
    marginBottom: "16px",
    color: "white",
  };

  return (
    <div className="objec" style={objecStyle}>
      <div className="objec-icon" style={objecIconStyle}>
        <img src={iconSrc} loading="lazy" alt="" className="icon-obj" />
      </div>
      <div className="txt-obj-div">
        {title && <h3 className="h3">{title}</h3>}
        <div className="txt is-left">{description}</div>
      </div>
    </div>
  );
};
