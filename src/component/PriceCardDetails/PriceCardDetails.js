import React, { useState, useEffect, useRef } from "react";
import FooterMobile from "../footer/FooterMobile";
import FooterTypeTwo from "../footer/FooterTypeTwo";
import FooterTypeTwoMobile from "../footer/FooterTypeTwoMobile";
import "./pricecarddetails.css";
import { Link } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa";

var Rating = require("react-rating");

export default function PriceCardDetails(props) {
  const [checkout, setCheckout] = useState(false);
  const [bot, setBot] = useState();
  const [markArr, setMarkArr] = useState([]);
  const [nomarkArr, setNoMarkArr] = useState([]);

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  //package price and description for testing
  const price = 500;
  const description = "This is a test Package";
  const params = useParams();

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: description,
                amount: {
                  currency_code: "USD",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

          const buydata = {
            userId: window.sessionStorage.getItem("userId"),
            bot: params.id,
            valid: true,
          };

          axios
            .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/buy`, buydata)
            .then((result) => {
              console.log(result.data);
            });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/bot/${params.id}`)
      .then((res) => {
        console.log(res.data.data);
        setBot(res.data.data);

        let result1 = [];
        let result2 = [];

        let cnt = 5 - res.data.data?.rating;

        for (let index = 0; index < res.data.data?.rating; index++) {
          result1.push(1);
        }
        for (let index = 0; index < cnt; index++) {
          result2.push(1);
        }
        console.log(result1, result2);
        setMarkArr(result1);
        setNoMarkArr(result2);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/bot/${params.id}`)
      .then((res) => {
        console.log(res.data.data);
        setBot(res.data.data);

        if (res.data.data.rating == 0) {
          setFirst(false);
          setSecond(false);
          setThird(false);
          setFour(false);
          setFive(false);
        } else if (res.data.data.rating == 1) {
          setFirst(true);
          setSecond(false);
          setThird(false);
          setFour(false);
          setFive(false);
        } else if (res.data.data.rating == 2) {
          setFirst(true);
          setSecond(true);
          setThird(false);
          setFour(false);
          setFive(false);
        } else if (res.data.data.rating == 3) {
          setFirst(true);
          setSecond(true);
          setThird(true);
          setFour(false);
          setFive(false);
        } else if (res.data.data.rating == 4) {
          setFirst(true);
          setSecond(true);
          setThird(true);
          setFour(true);
          setFive(false);
        } else {
          setFirst(true);
          setSecond(true);
          setThird(true);
          setFour(true);
          setFive(true);
        }
      });
  }, []);

  useEffect(() => {
    let result1 = [];
    let result2 = [];

    let cnt = 5 - props?.rate;

    for (let index = 0; index < props?.rate; index++) {
      result1.push(1);
    }
    for (let index = 0; index < cnt; index++) {
      result2.push(1);
    }
    console.log(result1, result2);
    setMarkArr(result1);
    setNoMarkArr(result2);
  }, []);

  return (
    <>
      {checkout === true ? (
        <div className="payment-div">
          <CheckOut price={price} description={description} />
        </div>
      ) : (
        <div className="PriceCardDetails">
          <div className="first-row-player-card-details">
            <div className="col-one-first-row-player-card-details">
              <span className="music-card-name">
                {/* {props.cardname} */}
                {bot?.name}
              </span>
              <div className="star-row-price-card-details">
                {first ? (
                  <FaStar style={{ color: "#B69106" }} />
                ) : (
                  <FaRegStar />
                )}
                {/* {markArr.length > 0 &&
                  markArr.map((i, index) => (
                    <FaStar key={index} style={{ color: "#B69106" }} />
                  ))}
                {nomarkArr.length > 0 &&
                  nomarkArr.map((i, index) => <FaRegStar key={index} />)} */}
              </div>
              {/* <div className="star-row-price-card-details-mobile">
                {props.one ? (
                  <>
                    <img src='https://i.imgur.com/bD6Y4s2.png' alt='' />
                    <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                    <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                    <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                    <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                  </>
                ) : (
                  <>
                    {props.two ? (
                      <>
                        <img src='https://i.imgur.com/bD6Y4s2.png' alt='' />
                        <img src='https://i.imgur.com/bD6Y4s2.png' alt='' />
                        <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                        <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                        <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                      </>
                    ) : (
                      <>
                        {props.three ? (
                          <>
                            <img src='https://i.imgur.com/bD6Y4s2.png' alt='' />
                            <img src='https://i.imgur.com/bD6Y4s2.png' alt='' />
                            <img src='https://i.imgur.com/bD6Y4s2.png' alt='' />
                            <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                            <img src='https://i.imgur.com/PwNGNPf.png' alt='' />
                          </>
                        ) : (
                          <>
                            {props.four ? (
                              <>
                                <img
                                  src='https://i.imgur.com/bD6Y4s2.png'
                                  alt=''
                                />
                                <img
                                  src='https://i.imgur.com/bD6Y4s2.png'
                                  alt=''
                                />
                                <img
                                  src='https://i.imgur.com/bD6Y4s2.png'
                                  alt=''
                                />
                                <img
                                  src='https://i.imgur.com/bD6Y4s2.png'
                                  alt=''
                                />
                                <img
                                  src='https://i.imgur.com/PwNGNPf.png'
                                  alt=''
                                />
                              </>
                            ) : (
                              <>
                                {props.five ? (
                                  <>
                                    <img
                                      src='https://i.imgur.com/bD6Y4s2.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/bD6Y4s2.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/bD6Y4s2.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/bD6Y4s2.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/bD6Y4s2.png'
                                      alt=''
                                    />
                                  </>
                                ) : (
                                  <>
                                    <img
                                      src='https://i.imgur.com/PwNGNPf.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/PwNGNPf.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/PwNGNPf.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/PwNGNPf.png'
                                      alt=''
                                    />
                                    <img
                                      src='https://i.imgur.com/PwNGNPf.png'
                                      alt=''
                                    />
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div> */}
              <span className="creator-name">
                by <span style={{ color: "#3DD4CE" }}>{bot?.author}</span>
              </span>
            </div>
            <div className="col-two-first-row-player-card-details">
              <div className="perchases-total">
                {/* <img
                  src="https://i.imgur.com/DaG4Vxp.png"
                  alt=""
                  className="cart-desk-price-card"
                />
                <img
                  src="https://i.imgur.com/VBZmXkA.png"
                  alt=""
                  className="cart-mob-price-card"
                /> */}
                <span>Price</span>
                <span>{bot?.price} $</span>
              </div>
              <div className="button">
                {/* <button
                  className="primary"
                  onClick={() => {
                    setCheckout(true)
                  }}
                >
                  Buy
                </button> */}
                <div style={{ marginTop: "20px" }} ref={paypal}></div>
              </div>
              {/* <div className='buy-button'>
                                Buy
                            </div> */}
            </div>
          </div>
          <div className="about-the-strategy">
            <img src="https://i.imgur.com/5uLFbP8.png" alt="" />{" "}
            <span>About the strategy</span>
          </div>
          <div className="all-details-price-card">
            <img src={bot?.image} alt="" className="card-image-price-card" />
            <span className="details-price-card">
              {/* {props.detailspricecard} */}
              {bot?.description}
            </span>
          </div>

          <div className="payment-div">
            <CheckOut price={price} description={description} />
          </div>

          <div className="row-third-row-price-card-details">
            <img src="https://i.imgur.com/INoktgf.png" alt="" />
            <span className="text-price-card-details">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing{" "}
            </span>
          </div>
          <div className="start-earning-with-astrabit">
            <span className="start-earning-with-astrabit-title">
              Start earning with DEXtre
            </span>
            <Link to="/contact" className="contact-us-button">
              Contact Us
            </Link>
          </div>
          <FooterMobile />
          <FooterTypeTwo />
        </div>
      )}
    </>
  );
}
