import { Appcaption, Appfont } from "../../theme/typo";

function BenefitCard({ imageUrl, title, description }) {
  return (
    <div style={{ marginBottom: 30 }} className="benefits-card">
      <img src={imageUrl} loading="lazy" alt="" className="img-benefits" />
      <Appcaption className="h3 is-centered">{title}</Appcaption>
      <Appfont className="txt">{description}</Appfont>
    </div>
  );
}

export default BenefitCard;
