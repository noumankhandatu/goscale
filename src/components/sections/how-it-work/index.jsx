/* eslint-disable react/no-unescaped-entities */
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { primary } from "../../../theme/colors";
import { Appcaption, Appfont, Appheading } from "../../../theme/typo";
import AppButton from "../../atoms/AppButton";
import "./style.css";
const HowItWorkSection = () => {
  return (
    <div>
      <section id="how-it-works" className="hiw-section">
        <Grid container>
          <Grid xs={6} className="column-left w-col w-col-6">
            <div className="header-container center left-align no-bottom w-container">
              <p style={{ color: primary }} className="txt is-preheading">
                How it works
              </p>
              <Appheading className="h1">Our Fast 4 Step Setup</Appheading>
              <Appfont className="txt-2 is-left invi">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore <br />
                magna aliqua. Ut enim ad minim veniam, quis nostrud
              </Appfont>
              <AppButton />
            </div>
          </Grid>
          <Grid xs={6} className="column-right w-col w-col-6">
            <div className="">
              <div className="div-process" />
              <div className="">
                <div className="div-expla">
                  <div className="div-nb">
                    <img
                      src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6566eb8c294db1e103cafecf_Frame%20109.svg"
                      loading="lazy"
                      alt=""
                      className="nb"
                    />
                  </div>
                  <div className="div-txt-process">
                    <Appcaption className="h3 is-centered">Purchase a GoScale pack</Appcaption>
                    <Appfont className="txt is-left">
                      Upon selecting one of our packages, you'll receive an invitation to join the
                      GoScale Slack channel and setup your assets within 24 hours.
                    </Appfont>
                  </div>
                </div>
                <div className="div-expla">
                  <div className="div-nb">
                    <img
                      src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6566ebfe3b36a4ccecf5a742_Frame%20111.svg"
                      loading="lazy"
                      alt=""
                      className="nb"
                    />
                  </div>
                  <div className="div-txt-process">
                    <Appcaption className="h3 is-centered">Join us on Slack</Appcaption>
                    <Appfont className="txt is-left">
                      We’ll provide you with excellent support, making it a seamless and effortless
                      ride for you, as a team.
                    </Appfont>
                  </div>
                </div>
                <div className="div-expla">
                  <div className="div-nb">
                    <img
                      src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6566ec123b36a4ccecf5b2ca_Frame%20112.svg"
                      loading="lazy"
                      alt=""
                      className="nb"
                    />
                  </div>
                  <div className="div-txt-process">
                    <Appcaption className="h3">Walkthroughs and guidelines delivery</Appcaption>
                    <Appfont className="txt is-left">
                      You'll get an easy setup installation guide. Once you've downloaded our
                      software for accessing profiles via residential proxies, simply follow the Dos
                      and Don'ts of the setup.
                    </Appfont>
                  </div>
                </div>
                <div className="div-expla">
                  <div className="div-nb">
                    <img
                      src="https://assets-global.website-files.com/6561683d7688a3e476387de2/6566ec1c530ad70f85e339f0_Frame%20110.svg"
                      loading="lazy"
                      alt=""
                      className="nb"
                    />
                  </div>
                  <div className="div-txt-process">
                    <Appcaption className="h3 is-centered">Increase ROAS</Appcaption>
                    <Appfont className="txt is-left">
                      Start scaling your business without any concerns about your advertising
                      assets. Run&nbsp;Ads confidently, knowing that your account is safe from harm!
                    </Appfont>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default HowItWorkSection;
