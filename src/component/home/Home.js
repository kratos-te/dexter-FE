import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import FooterTypeTwoMobile from "../footer/FooterTypeTwoMobile";
import { Link } from "react-router-dom";
import "./home.css";
import FooterMobile from "../footer/FooterMobile";
import Particles from "../Particles/ParticlesApp";
import HomeHeroSection from "./HomeHeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleCreator from "../Particles/ParticleCreator";
import Subhome from "./Subhome";
import HomeBody from "./HomeBody";

export default function Home() {
  const token = window.sessionStorage.getItem("token");

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home_component">
      {/* <div className="home-hero-section">
        <Particles />
        <h1>
          Results driven algorithmic
          <br /> trading software.
        </h1>
        <p>
          Predictive analytics by combining highly sophisticated statistical and
          mathematical modeling to determine price action trends and patterns
        </p>
        {token == undefined ? <button>Login</button> : null}
      </div> */}
      <HomeHeroSection />

      <div
        className="home-second-row-line"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <p>
          DEXtre streamlines everything and every exchange into one place where
          you can take one look at your entire portfolio and trade with one
          simple click no matter where you are in the world.
        </p>
      </div>

      <div
        className="home-getstart"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <img
          src="https://i.imgur.com/qNRnvWq.png"
          alt=""
          className="home-getstart-image"
        />
        <p
          style={{ fontSize: "16px" }}
          className="animate__animated animate__fadeInLeft"
        >
          Get Start
        </p>
        <h1 className="animate__animated animate__fadeInLeft">
          Connect DEXtre to your exchange Quickly & Simply
        </h1>
        <div
          className="connect-astrabit-desktop"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div className="connect-astrabit-desktop-item-1">
            <h1 className="animate__animated animate__fadeInLeft">
              <span>1.</span> &nbsp; Connect DEXtre to your exchange Quickly &
              Simply
            </h1>
            <p
              style={{ fontSize: "16px" }}
              className="animate__animated animate__fadeInLeft"
            >
              DEXtre streamlines everything and every exchange into one place
              where you can take one look at your entire portfolio and trade
              with one simple click no matter where you are in the world.
              <br />
              DEXtre streamlines everything and every exchange into one place
              where you can take one look at your entire portfolio and trade
              with one simple click no matter where you are in the world. DEXtre
              streamlines everything and every exchange into one place w
            </p>
          </div>
          <div
            className="connect-astrabit-desktop-item-second-row"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className="connect-astrabit-desktop-item-second-row-item-1">
              <h1 className="animate__animated animate__fadeInLeft">
                <span>2.</span> &nbsp; Securely set up DEXtre
              </h1>
              <p
                style={{ fontSize: "16px" }}
                className="animate__animated animate__fadeInLeft"
              >
                DEXtre is simple and easy to use with a set up that is made for
                everyone. DEXtre cannot withdraw funds from your wallet nor can
                you deposit funds with DEXtre. Your money remains safely in your
                wallet on your preferred exchange at all times.
              </p>
            </div>
            <div className="connect-astrabit-desktop-item-second-row-item-2">
              <h1 className="animate__animated animate__fadeInLeft">
                <span>3.</span> &nbsp; Let DEXtre work for you.
              </h1>
              <p
                style={{ fontSize: "16px" }}
                className="animate__animated animate__fadeInLeft"
              >
                DEXtre streamlines everything and every exchange into one place
                where you can take one look at your entire portfolio and trade
                with one simple click no matter where you are in the world.
              </p>
            </div>
          </div>
        </div>

        <div className="connect-astrabit-mobile">
          <div
            id="connect-astrabit-mobile"
            className="carousel"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner"
              id="connect-astrabit-mobile-carousel-inner"
            >
              <div className="carousel-item active">
                <span>1.</span> &nbsp;
                <h1 className="animate__animated animate__fadeInLeft">
                  Connect DEXtre to your exchange Quickly & Simply
                </h1>
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  DEXtre streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world.
                  <br />
                  DEXtre streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world. DEXtre streamlines everything and every exchange into
                  one place w
                </p>
              </div>

              <div className="carousel-item">
                <span>2.</span> &nbsp;<h1> Securely set up DEXtre</h1>
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  DEXtre is simple and easy to use with a set up that is made
                  for everyone. DEXtre cannot withdraw funds from your wallet
                  nor can you deposit funds with DEXtre. Your money remains
                  safely in your wallet on your preferred exchange at all times.
                </p>
              </div>
              <div className="carousel-item">
                <span>3.</span> &nbsp;<h1> Let DEXtre work for you.</h1>
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  DEXtre streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
            </div>

            <img src="https://i.imgur.com/qNRnvWq.png" alt="" id="img-1" />

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#connect-astrabit-mobile"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#connect-astrabit-mobile"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="home-benifits"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <p data-aos="fade-right" data-aos-duration="500">
          Benifits
        </p>
        <h1 data-aos="fade-right" data-aos-duration="500">
          Flexibility for Everyone
        </h1>
        <h6 data-aos="fade-right" data-aos-duration="500">
          Set up your bot preferences and you’re off!
        </h6>
        <div className="benifits-row-desktop">
          <div className="benifits-row-left">
            <ul>
              <li
                style={{ fontSize: "16px" }}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                1.&nbsp; DEXtre streamlines everything and every exchange into
                one place where you can take one look at your entire portfolio
                and trade with one simple click no matter where you are in the
                world.
              </li>
              <li
                style={{ fontSize: "16px" }}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                2.&nbsp; DEXtre streamlines everything and every exchange into
                one place where you can take one look at your entire portfolio
                and trade with one simple click no matter where you are in the
                world.
              </li>
              <li
                style={{ fontSize: "16px" }}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                3.&nbsp; DEXtre streamlines everything and every exchange into
                one place where you can take one look at your entire portfolio
                and trade with one simple click no matter where you are in the
                world.
              </li>
              <li
                style={{ fontSize: "16px" }}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                4.&nbsp; DEXtre Nexus provides you with a marketplace of
                strategies from which you are free to choose the strategy(ies)
                that best suits you. Strategies are provided by reputable,
                independent, third party traders and once you subscribe to your
                preferred strategy & bot, or bundle, you are good to go! Please
                be sure to review the bundled solutions as they may give you the
                features you want at better prices.
              </li>
            </ul>
          </div>
          <div className="benifits-row-right">
            <img src="https://i.imgur.com/aeOi21e.png" alt="" />
          </div>
        </div>

        <div
          className="benifits-row-mobile"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <img src="https://i.imgur.com/aeOi21e.png" alt="" />
          <div
            id="benifits-row-mobile"
            className="carousel"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner"
              id="benifits-row-mobile-carousel-inner"
            >
              <div className="carousel-item active">
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  1.&nbsp; DEXtre streamlines everything and every exchange into
                  one place where you can take one look at your entire portfolio
                  and trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
              <div className="carousel-item">
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  2.&nbsp; DEXtre streamlines everything and every exchange into
                  one place where you can take one look at your entire portfolio
                  and trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
              <div className="carousel-item">
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  3.&nbsp; DEXtre streamlines everything and every exchange into
                  one place where you can take one look at your entire portfolio
                  and trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
              <div className="carousel-item">
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  4.&nbsp; DEXtre Nexus provides you with a marketplace of
                  strategies from which you are free to choose the strategy(ies)
                  that best suits you. Strategies are provided by reputable,
                  independent, third party traders and once you subscribe to
                  your preferred strategy & bot, or bundle, you are good to go!
                  Please be sure to review the bundled solutions as they may
                  give you the features you want at better prices.
                </p>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#benifits-row-mobile"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#benifits-row-mobile"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="home-flexibility-desktop"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div>
          <div className="row">
            <div
              className="col-md-6 home-flexibility-col-1"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h3 className="animate__animated animate__fadeInLeft">
                Flexibility for Everyone
              </h3>
              <p
                style={{ fontSize: "16px" }}
                className="animate__animated animate__fadeInLeft"
              >
                DEXtre streamlines everything and every exchange into one place
                where you can take one look at your entire portfolio and trade
                with one simple click no matter where you are in the world.
              </p>
            </div>
            <div
              className="col-md-6 home-flexibility-col-2"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h3 className="animate__animated animate__fadeInLeft">
                Flexibility for Everyone
              </h3>
              <p
                style={{ fontSize: "16px" }}
                className="animate__animated animate__fadeInLeft"
              >
                DEXtre streamlines everything and every exchange into one place
                where you can take one look at your entire portfolio and trade
                with one simple click no matter where you are in the world.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 home-flexibility-col-3"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h3 className="animate__animated animate__fadeInLeft">
                Flexibility for Everyone
              </h3>
              <p
                style={{ fontSize: "16px" }}
                className="animate__animated animate__fadeInLeft"
              >
                DEXtre streamlines everything and every exchange into one place
                where you can take one look at your entire portfolio and trade
                with one simple click no matter where you are in the world.
              </p>
            </div>
            <div
              className="col-md-6 home-flexibility-col-4"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h3 data-aos="fade-right">Flexibility for Everyone</h3>
              <p style={{ fontSize: "16px" }} data-aos-duration="500">
                DEXtre streamlines everything and every exchange into one place
                where you can take one look at your entire portfolio and trade
                with one simple click no matter where you are in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-flexibility-mobile">
        <div
          id="home-flexibility-mobile"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner"
            id="home-flexibility-mobile-carousel-inner"
          >
            <div className="carousel-item active">
              <div data-aos="fade-right" data-aos-duration="500">
                <h3 className="animate__animated animate__fadeInLeft">
                  Flexibility for Everyone
                </h3>
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  DEXtre streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="500">
                <h3 className="animate__animated animate__fadeInLeft">
                  Flexibility for Everyone
                </h3>
                <p
                  style={{ fontSize: "16px" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  DEXtre streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
            </div>
            {/* <div className="carousel-item">
              <div>
                <h3>Flexibility for Everyone</h3>
                <p>
                  AstraBit streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
              <div>
                <h3>Flexibility for Everyone</h3>
                <p>
                  AstraBit streamlines everything and every exchange into one
                  place where you can take one look at your entire portfolio and
                  trade with one simple click no matter where you are in the
                  world.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="home-pricing">
        <img src="https://i.imgur.com/9uRJByb.png" alt="" />
        <p data-aos="fade-right" data-aos-duration="500">
          Pricing
        </p>
        <h1 data-aos="fade-right" data-aos-duration="500">
          DEXtre Marketplace
        </h1>
        <p data-aos="fade-right" data-aos-duration="500">
          DEXtre Nexus provides you with a marketplace of strategies from which
          you are free to choose the strategy(ies) that best suits you. <br />
          Strategies are provided by reputable, independent, third party traders
          and once you subscribe to your preferred strategy & bot, or bundle,
          you are good to go! <br /> Please be sure to review the bundled
          solutions as they may give you the features you want at better prices.
        </p>
        <button data-aos="fade-right" data-aos-duration="500">
          Visit the Marketplace
        </button>
      </div>

      <div className="home-bottomSection">
        <div className="container">
          <h4 data-aos="fade-right" data-aos-duration="500">
            Capital at risk.
          </h4>
          <p data-aos="fade-right" data-aos-duration="500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <FooterTypeTwoMobile />
      <Footer />
    </div>
  );
}
