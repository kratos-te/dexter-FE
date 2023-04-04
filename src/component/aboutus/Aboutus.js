import React from "react";
import Footer from "../footer/Footer";
import FooterMobile from "../footer/FooterMobile";
import FooterTypeTwo from "../footer/FooterTypeTwo";
import FooterTypeTwoMobile from "../footer/FooterTypeTwoMobile";
import "./aboutus.css";
export default function Aboutus() {
  return (
    <div className="animate__animated animate__fadeInLeft about-us-page">
      <div className="col-mob-about-us">
        <div className="title-mob-about-us">About Us</div>
        <div className="description-about-us-mob">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like)
        </div>
      </div>
      <div className="about-first-row">
        <div className="col-one-about-first-row">
          <div className="profile-card">
            <img
              src={"https://i.imgur.com/lByRdPz.png"}
              alt=""
              className="profile-image-aboutus-page"
            />
            <div className="profile-description-here">
              <span className="name-profile-name">Desmond joel</span>
              <span className="name-profile-tag-line">
                Senior Product Designer
              </span>
              <div className="star-row-and-massage">
                <div className="stars-row-desktop">
                  <img
                    src={"https://i.imgur.com/paDnIFq.png"}
                    alt=""
                    className="star-img"
                  />
                  <img
                    src={"https://i.imgur.com/paDnIFq.png"}
                    alt=""
                    className="star-img"
                  />
                  <img
                    src={"https://i.imgur.com/paDnIFq.png"}
                    alt=""
                    className="star-img"
                  />
                  <img
                    src={"https://i.imgur.com/paDnIFq.png"}
                    alt=""
                    className="star-img"
                  />
                  <img
                    src={"https://i.imgur.com/6MX5sp5.png"}
                    alt=""
                    className="star-img"
                  />
                </div>
                <div className="stars-row-mob">
                  <img
                    src={"https://i.imgur.com/GKujXne.png"}
                    alt=""
                    className="star-img-mob"
                  />
                  <img
                    src={"https://i.imgur.com/GKujXne.png"}
                    alt=""
                    className="star-img-mob"
                  />
                  <img
                    src={"https://i.imgur.com/GKujXne.png"}
                    alt=""
                    className="star-img-mob"
                  />
                  <img
                    src={"https://i.imgur.com/GKujXne.png"}
                    alt=""
                    className="star-img-mob"
                  />
                  <img
                    src={"https://i.imgur.com/OAzYjEl.png"}
                    alt=""
                    className="star-img-mob"
                  />
                </div>

                <span className="star-massage">Massage</span>
                <div className="star-row-and-massage-two-mob">
                  <img src={"https://i.imgur.com/C6UkwRu.png"} alt="" />
                  <img src={"https://i.imgur.com/1YBiJB0.png"} alt="" />
                  <img src={"https://i.imgur.com/EBkhLuK.png"} alt="" />
                  <img src={"https://i.imgur.com/VnZBhR1.png"} alt="" />
                </div>
              </div>
              <div className="star-row-and-massage">
                {" "}
                <span className="profile-title-two">Profile :</span>
                <button type="button" className="connect-button-mobile">
                  Connect
                </button>
              </div>

              <span className="profile-title-two-details">
                Detail-oriented also a stakeholder-oriented UI/UX designer. Over
                5 years experience in doing customer-centered design. Years'
                experience of working in different companies keeps me updated
                and foreseen what is the current trend and what will be the
                future trend in this market. Rapid prototyping are strong
                points.
              </span>
              <div className="star-row-and-massage-two">
                <img src={"https://i.imgur.com/KmWNgA1.png"} alt="" />
                <img src={"https://i.imgur.com/m75VIuE.png"} alt="" />
                <img src={"https://i.imgur.com/9f3iyru.png"} alt="" />
                <img src={"https://i.imgur.com/uEhdYCB.png"} alt="" />
              </div>
              <button type="button" className="connect-button">
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="col-two-about-first-row">
          <div className="first-row-col-two-about-first-row">
            <div className="profile-card-second-col">
              <img
                src="https://i.imgur.com/aIlklfq.png"
                alt=""
                className="profile-card-second-col-img"
              />
              <div className="profile-card-second-col-details">
                <span className="profile-card-second-col-details-name">
                  mark zuckerberg
                </span>
                <span className="profile-card-second-col-details-title">
                  Senior Product Designer
                </span>
              </div>
            </div>
            <div className="profile-card-second-col">
              <img
                src="https://i.imgur.com/xlABoAK.png"
                alt=""
                className="profile-card-second-col-img"
              />
              <div className="profile-card-second-col-details">
                <span className="profile-card-second-col-details-name">
                  Bill gates
                </span>
                <span className="profile-card-second-col-details-title">
                  Senior Product Designer
                </span>
              </div>
            </div>
            <div className="profile-card-second-col">
              <img
                src="https://i.imgur.com/gv7FK3z.png"
                alt=""
                className="profile-card-second-col-img"
              />
              <div className="profile-card-second-col-details">
                <span className="profile-card-second-col-details-name">
                  Elon Musk
                </span>
                <span className="profile-card-second-col-details-title">
                  Senior Product Designer
                </span>
              </div>
            </div>
          </div>
          <span className="about-us-topic-header">About Us</span>
          <span
            style={{ fontSize: "16px" }}
            className="about-us-topic-header-details"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </span>
        </div>
      </div>
      <FooterMobile />
      <FooterTypeTwo />
    </div>
  );
}
