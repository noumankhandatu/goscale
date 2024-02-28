import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Appfont, Appheading } from "../../../theme/typo";
import AppDiv from "../../atoms/AppDiv";
import BenefitCard from "../../molecules/BeneiftCard";

const Beneiftis = () => {
  return (
    <div>
      <section id="benefits" className="benefits-section">
        <AppDiv sx={{ pt: 10, pb: 10 }}>
          <Appheading sx={{ textAlign: "center" }}>No more limits to scaling</Appheading>
          <Appfont sx={{ textAlign: "center" }}>
            GoScale ensures peace of mind with stable &amp;&nbsp;verified accounts to scale fast.
            <br />
            Dedicated support, exclusive insights, and fast problem solving.
          </Appfont>
        </AppDiv>
        <Grid container sx={{ justifyContent: "center", gap: 5, alignItems: "center" }}>
          <Grid xs={3}>
            <BenefitCard
              imageUrl="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e3745b16ea4b409faa2c_Frame%2089.svg"
              title="Peace of mind"
              description="Uninterrupted ad campaigns, stability, and compliance. Grow your business without the fear of unexpected account issues."
            />
            <BenefitCard
              imageUrl="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e38c20fc461bebf85c70_Frame%2089%20(1).svg"
              title="Scaling"
              description="Multiple high-quality accounts allow you to expand your ad reach and grow your presence on Facebook effortlessly."
            />
          </Grid>
          <Grid xs={3}>
            <BenefitCard
              imageUrl="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e3bfedb81e89042db6ce_Frame%2089%20(2).svg"
              title="Speed"
              description="From account setup to issue resolution, our processes are streamlined for efficiency, ensuring your campaigns run without delay."
            />
            <BenefitCard
              imageUrl="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e40654c4afe4b22f18e5_Frame%2089%20(5).svg"
              title="Authentic and Verified Profiles"
              description="Each account is meticulously verified to meet the highest standards, giving your campaigns a foundation of credibility."
            />
          </Grid>
          <Grid xs={3}>
            <BenefitCard
              imageUrl="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e3fa9ce3c8f96be684df_Frame%2089%20(4).svg"
              title="Dedicated Support"
              description="Our expert support team is on standby 24/7. We're here to provide personalized assistance and keep your ads running."
            />
            <BenefitCard
              imageUrl="https://assets-global.website-files.com/6561683d7688a3e476387de2/6565e3ef9d0481f50c2962f1_Frame%2089%20(3).svg"
              title="Exclusive information"
              description="We provide exclusive insights, tips, and insider knowledge that are not commonly available, helping you maximize ROI."
            />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Beneiftis;
