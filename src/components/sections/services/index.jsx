import "./style.css";
import { Appfont, Appheading } from "../../../theme/typo";
import { primary } from "../../../theme/colors";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const SerivesSection = () => {
  return (
    <div>
      <section id="services" className="services-section">
        <div>
          <p style={{ color: primary, textAlign: "center" }}>
            Unlock Your Facebook Advertising Potential
          </p>
          <Appheading sx={{ textAlign: "center", mt: 3, mb: 3 }}>
            Unlimited scaling solutions
          </Appheading>
          <Appfont sx={{ textAlign: "center", mb: 5, mt: 3 }}>
            Boost your Ad Campaigns with GoScale Verified Business Managers.
          </Appfont>
        </div>
        <div className="services-div">
          <Grid container spacing={3}>
            <Grid xs={4}>
              <img
                src="https://assets-global.website-files.com/6561683d7688a3e476387de2/656642131b32f24b36283a9d_PROFILES.svg"
                loading="lazy"
                id="w-node-_084c1f68-26aa-9004-9f26-3cb91bfb2a33-76387de5"
                alt=""
                className="asset-services"
              />
            </Grid>
            <Grid xs={4}>
              <img
                src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6566425b1d4278e1ca45b269_BM%20VERIFIED.svg"
                loading="lazy"
                id="w-node-_3a9f5be6-82b1-9ee8-57df-2a27aa85f69e-76387de5"
                alt=""
                className="asset-services"
              />
            </Grid>
            <Grid xs={4}>
              <img
                src="https://assets-global.website-files.com/6561683d7688a3e476387de2/656642659df284e1d27b887a_FAN%20PAGES.svg"
                loading="lazy"
                id="w-node-_26d9541c-b0f9-941b-6ed1-ae2d35f2f4b8-76387de5"
                alt=""
                className="asset-services"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid xs={6}>
              <img
                src="https://assets-global.website-files.com/6561683d7688a3e476387de2/656642843c00fb39c7c84606_PROBLEME%20SOLVING.svg"
                loading="lazy"
                id="w-node-_7a75d294-05c9-1592-a574-9b76b01d24a7-76387de5"
                alt=""
                className="asset-services"
              />
            </Grid>
            <Grid xs={6}>
              <img
                src="https://assets-global.website-files.com/6561683d7688a3e476387de2/656642b200ff3e92e03c5314_PROXY.png"
                loading="lazy"
                id="w-node-c3cc8d1c-216e-4774-004b-5598fb5248a4-76387de5"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 92vw, (max-width: 1919px) 100vw, 1200px"
                alt=""
                srcSet="https://assets-global.website-files.com/6561683d7688a3e476387de2/656642b200ff3e92e03c5314_PROXY-p-500.png 500w, https://assets-global.website-files.com/6561683d7688a3e476387de2/656642b200ff3e92e03c5314_PROXY-p-800.png 800w, https://assets-global.website-files.com/6561683d7688a3e476387de2/656642b200ff3e92e03c5314_PROXY-p-1080.png 1080w, https://assets-global.website-files.com/6561683d7688a3e476387de2/656642b200ff3e92e03c5314_PROXY.png 1180w"
                className="asset-services"
              />
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default SerivesSection;
