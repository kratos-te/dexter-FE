import React from "react";
import Particles from "../Particles/ParticlesApp";

function HomeHeroSection() {
  const token = window.sessionStorage.getItem("token");

  return (
    <div className="Container">
      <div id="particles">
        <Particles className="paricles" />
      </div>
      <div className="home-hero-section">
        <h1>
          Results driven algorithmic
          <br /> trading software.
        </h1>
        <p>
          Predictive analytics by combining highly sophisticated statistical and
          mathematical modeling to determine price action trends and patterns
        </p>
        {token == undefined ? <button>Login</button> : null}
      </div>
    </div>
  );
}

export default HomeHeroSection;
