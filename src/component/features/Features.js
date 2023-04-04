import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import FooterMobile from "../footer/FooterMobile";
import FooterTypeTwo from "../footer/FooterTypeTwo";
import FooterTypeTwoMobile from "../footer/FooterTypeTwoMobile";
import ParticleCreator from "../Particles/ParticleCreator";
import "./features.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="animate__animated animate__fadeInLeft features-page">
      {/* <ParticleCreator/> */}
      <div className="features-page-first-row">
        {" "}
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 g-0">
              <div className="left">
                {/* <h1>
                  Astra <span>.</span>
                </h1> */}
                <img
                  src="https://i.imgur.com/sBoEolL.png"
                  alt=""
                  className="imageFeature"
                />
                <h2>
                  World className Automated & <br /> Algorthmic trading
                </h2>
                <p style={{ fontSize: "16px" }}>
                  Predictive analytics by combining highly sophisticated
                  statistical and mathematical <br />
                  modeling to determine doze price action trends and patterns
                </p>
              </div>
            </div>
            <div className="col-md-6 g-0">
              <div className="right">
                <img src="https://i.imgur.com/JT5e9VK.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-page-second-row-desktop">
        <div className="container-fluid">
          <div
            className="row"
            id="features-page-second-row-desktop"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className="col">
              <h2>
                <img src="https://i.imgur.com/UCd5Vd5.png" alt="" />
                Risk Management
              </h2>
              <p style={{ fontSize: "16px" }}>
                Predictive analytics by combining highly sophisticated
                statistical and mathematical modeling to determine price action
                trends and patterns
              </p>
            </div>
            <div className="col">
              <h2>
                <img src="https://i.imgur.com/mzcoN7Q.png" alt="" /> 24/7
                Trading
              </h2>
              <p style={{ fontSize: "16px" }}>
                DEXtre’s software works for you every minute of every day, 365
                days a year allowing you to set it, forget it and go live your
                life.
              </p>
            </div>
            <div className="col">
              <h2>
                <img src="https://i.imgur.com/ETDyeh1.png" alt="" /> High
                Security
              </h2>
              <p style={{ fontSize: "16px" }}>
                DEXtre CANNOT withdraw your funds from your wallet, nor will you
                ever store funds with DEXtre. Add to this 2FA, machine learning
                intrusion detection system, and anti-ransomware software and you
                can see we take your security very seriously.
              </p>
            </div>
            <div className="col">
              <h2>
                <img src="https://i.imgur.com/Oii9lqf.png" alt="" />
                Market Analysis
              </h2>
              <p style={{ fontSize: "16px" }}>
                DEXtre CANNOT withdraw your funds from your wallet, nor will you
                ever store funds with DEXtre. Add to this 2FA, machine learning
                intrusion detection system, and anti-ransomware software and you
                can see we take your security very seriously.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="features-page-second-row-mobile"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div
          id="carouselContent-second-row"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="container">
            <div className="carousel-inner" id="carousel-inner-secondRow">
              <div className="carousel-item active" id="features-carousel-item">
                <h2>
                  <img src="https://i.imgur.com/UCd5Vd5.png" alt="" />
                  Risk Management
                </h2>
                <p style={{ fontSize: "16px" }}>
                  Predictive analytics by combining highly sophisticated
                  statistical and mathematical modeling to determine price
                  action trends and patterns
                </p>
              </div>
              <div className="carousel-item" id="features-carousel-item">
                <h2>
                  <img src="https://i.imgur.com/mzcoN7Q.pngg" alt="" /> 24/7
                  Trading
                </h2>
                <p style={{ fontSize: "16px" }}>
                  DEXtre’s software works for you every minute of every day, 365
                  days a year allowing you to set it, forget it and go live your
                  life.
                </p>
              </div>
              <div className="carousel-item" id="features-carousel-item">
                <h2>
                  <img src="https://i.imgur.com/ETDyeh1.png" alt="" /> High
                  Security
                </h2>
                <p style={{ fontSize: "16px" }}>
                  DEXtre CANNOT withdraw your funds from your wallet, nor will
                  you ever store funds with DEXtre. Add to this 2FA, machine
                  learning intrusion detection system, and anti-ransomware
                  software and you can see we take your security very seriously.
                </p>
              </div>
              <div className="carousel-item" id="features-carousel-item">
                <h2>
                  <img src="https://i.imgur.com/Oii9lqf.png" alt="" />
                  Market Analysis
                </h2>
                <p style={{ fontSize: "16px" }}>
                  DEXtre CANNOT withdraw your funds from your wallet, nor will
                  you ever store funds with DEXtre. Add to this 2FA, machine
                  learning intrusion detection system, and anti-ransomware
                  software and you can see we take your security very seriously.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselContent-second-row"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              id="carousel-control-prev-icon-second-row"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselContent-second-row"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              id="carousel-control-next-icon-second-row"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        className="features-page-third-row"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div
          id="carouselContent-third-row"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="container">
            <div className="carousel-inner" id="carousel-inner-third-row">
              <div className="carousel-item active">
                <div className="row g-0">
                  <div className="col-md-6 g-0">
                    <div className="left-third-row-left">
                      <h1>
                        <img src="https://i.imgur.com/closYt8.png" alt="" />
                        Portfolio & Performance
                      </h1>
                      <p style={{ fontSize: "16px" }}>
                        DEXtre CANNOT withdraw your funds from your wallet, nor
                        will you ever store funds with DEXtre. Add to this 2FA,
                        machine learning intrusion detection system, and
                        anti-ransomware software and you can see we take your
                        security very seriously.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 g-0">
                    <div className="right-third-row-right">
                      <img src="https://i.imgur.com/erhOi8u.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row g-0">
                  <div className="col-md-6 g-0">
                    <div className="left-third-row-left">
                      <h1>
                        <img src="https://i.imgur.com/closYt8.png" alt="" />
                        Portfolio & Performance
                      </h1>
                      <p style={{ fontSize: "16px" }}>
                        DEXtre CANNOT withdraw your funds from your wallet, nor
                        will you ever store funds with DEXtre. Add to this 2FA,
                        machine learning intrusion detection system, and
                        anti-ransomware software and you can see we take your
                        security very seriously.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 g-0">
                    <div className="right-third-row-right">
                      <img src="https://i.imgur.com/erhOi8u.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row g-0">
                  <div className="col-md-6 g-0">
                    <div className="left-third-row-left">
                      <h1>
                        <img src="https://i.imgur.com/closYt8.png" alt="" />
                        Portfolio & Performance
                      </h1>
                      <p style={{ fontSize: "16px" }}>
                        DEXtre CANNOT withdraw your funds from your wallet, nor
                        will you ever store funds with DEXtre. Add to this 2FA,
                        machine learning intrusion detection system, and
                        anti-ransomware software and you can see we take your
                        security very seriously.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 g-0">
                    <div className="right-third-row-right">
                      <img src="https://i.imgur.com/6sZ31uf.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row g-0">
                  <div className="col-md-6 g-0">
                    <div className="left-third-row-left">
                      <h1>
                        <img src="https://i.imgur.com/closYt8.png" alt="" />
                        Portfolio & Performance
                      </h1>
                      <p style={{ fontSize: "16px" }}>
                        DEXtre CANNOT withdraw your funds from your wallet, nor
                        will you ever store funds with DEXtre. Add to this 2FA,
                        machine learning intrusion detection system, and
                        anti-ransomware software and you can see we take your
                        security very seriously.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 g-0">
                    <div className="right-third-row-right">
                      <img src="https://i.imgur.com/8kuowla.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselContent-third-row"
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
            data-bs-target="#carouselContent-third-row"
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

      <FooterTypeTwoMobile />
      <Footer />
    </div>
  );
}
