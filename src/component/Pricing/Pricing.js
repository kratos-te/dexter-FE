import React, { useEffect, useState } from "react";
import FooterTypeTwo from "../footer/FooterTypeTwo";
import FooterMobile from "../footer/FooterMobile.js";
import Pricecard from "./Pricecard";
import "./pricing.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing(props) {
  const [discount, setDiscount] = useState(0);
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const userRef = window.sessionStorage.getItem("ref");

    axios
      .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/subcription`, {
        userRef,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data.data.length > 0) {
          setDiscount(0.25);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/bot`)
      .then((results) => {
        setBots(results.data.data);
      });
  }, []);

  return (
    <div className="animate__animated animate__fadeInLeft pricing-page">
      <div className="type-row">
        <div className="button-type-select">Strategies</div>
        <div className="button-type-selects">Bots</div>
      </div>
      <span className="some-text-for-wallet-card">
        Search for strategies and see what fits the best to your financial
        goals.
      </span>
      <div className="div-pricing-card-col-and-row">
        <div className="control-section">
          <div className="control-section-row-section">
            <span className="dropdownmenu-title">Author</span>
            <div className="dropdown">
              <button className="dropbtn">
                Any Author <img src="https://i.imgur.com/EkHjRPq.png" alt="" />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="control-section-row-section">
            <span className="dropdownmenu-title">Rating</span>
            <div className="dropdown">
              <button className="dropbtn">
                All Rating <img src="https://i.imgur.com/EkHjRPq.png" alt="" />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="control-section-row-section">
            <span className="dropdownmenu-title">Compatible Assest</span>
            <div className="dropdown">
              <button className="dropbtn">
                All Assest <img src="https://i.imgur.com/EkHjRPq.png" alt="" />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="control-section-row-section">
            <span className="dropdownmenu-title">Price Range</span>
            <br />
            <form className="multi-range-field my-5 pb-5">
              <input id="multi6" className="multi-range" type="range" />
            </form>
          </div>
        </div>
        {bots.length > 0 &&
          bots.map((bot, index) => (
            <Pricecard
              key={index}
              id={bot?._id}
              url={bot?.image}
              title={bot?.name}
              one={false}
              two={false}
              three={false}
              four={true}
              five={false}
              description={bot?.description}
              price={bot?.price}
              strType={bot?.strategyType}
              discount={discount}
              author={bot?.author}
              monthoryear="month"
              titlemob="Gamma Strategy"
              rate={bot?.rating}
            />
          ))}
      </div>
      <div className="more-section">more...</div>
      <div
        className="have-any-question"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <img
          src="https://i.imgur.com/ZWKQwv5.png"
          alt=""
          className="image-have-any-ques"
        />
        <div className="have-any-question-details">
          <span className="have-any-ques-topic">Have any questions?</span>
          <span className="have-any-ques-topic-details">
            DEXtre's team will at all times be happy to assist you with your
            setup.
          </span>
          <span
            style={{ fontSize: "16px" }}
            className="have-any-ques-topic-details"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </span>
          <span
            style={{ fontSize: "16px" }}
            className="have-any-ques-topic-details"
            id="three__Text"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type{" "}
          </span>
        </div>
        <div className="contact-us-price-page">
          <Link to="/contact" className="contact-us-price-page-button">
            Contact Us
          </Link>
        </div>
      </div>
      <div
        className="Results-driven-algorithmic-col"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <span className="Results-driven-algorithmic-trading-software">
          Results driven algorithmic trading software.
        </span>
        <div className="Results-driven-algorithmic-col-row">
          <div className="Results-driven-algorithmic-col-row-inside">
            <img
              src="https://i.imgur.com/6o3KB0L.png"
              alt=""
              className="logohidemobile"
            />
            <span>Trailing Stop Loss</span>
          </div>
          <div className="Results-driven-algorithmic-col-row-inside">
            <img
              src="https://i.imgur.com/6o3KB0L.png"
              alt=""
              className="logohidemobile"
            />
            <span>DEXtre's quant strategy</span>
          </div>
        </div>
        <div className="Results-driven-algorithmic-col-row">
          <div className="Results-driven-algorithmic-col-row-inside">
            <img
              src="https://i.imgur.com/6o3KB0L.png"
              alt=""
              className="logohidemobile"
            />
            <span>Easy Exchange Access</span>
          </div>
          <div className="Results-driven-algorithmic-col-row-inside">
            <img
              src="https://i.imgur.com/6o3KB0L.png"
              alt=""
              className="logohidemobile"
            />
            <span>Take Profit Levels</span>
          </div>
        </div>
        <div className="Results-driven-algorithmic-col-row">
          <div className="Results-driven-algorithmic-col-row-inside">
            <img
              src="https://i.imgur.com/6o3KB0L.png"
              alt=""
              className="logohidemobile"
            />
            <span>Custom indicators</span>
          </div>
          <div className="Results-driven-algorithmic-col-row-inside">
            <img
              src="https://i.imgur.com/6o3KB0L.png"
              alt=""
              className="logohidemobile"
            />
            <span>Re-Entry Trigger</span>
          </div>
        </div>
      </div>

      <div className="start-earning-with-astrabit">
        <span
          className="start-earning-with-astrabit-title"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          Start earning with DEXtre
        </span>
        <Link
          to="/contact"
          className="contact-us-button"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          Contact Us
        </Link>
      </div>
      <FooterMobile />
      <FooterTypeTwo />
    </div>
  );
}
