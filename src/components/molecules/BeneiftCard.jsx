/* eslint-disable react/prop-types */
import { Appcaption, Appfont } from "../../theme/typo";

function BenefitCard({ imageUrl, title, description }) {
  return (
    <div style={{ marginBottom: 30, ...converted }}>
      <img src={imageUrl} loading="lazy" alt="" className="img-benefits" />
      <Appcaption className="h3 is-centered">{title}</Appcaption>
      <Appfont className="txt">{description}</Appfont>
    </div>
  );
}

export default BenefitCard;

const converted = {
  gridColumnGap: "16px",
  gridRowGap: "16px",
  backgroundColor: "#141824",
  borderRadius: "24px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  display: "flex",
};
