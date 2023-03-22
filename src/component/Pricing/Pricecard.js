import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

import Rating from "react-rating";

export default function Pricecard(props) {
  const [markArr, setMarkArr] = useState([]);
  const [nomarkArr, setNoMarkArr] = useState([]);

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
    <div className="price-card">
      <img src={props.url} alt="" className="image-price-card" />
      <div className="col__mobile__for">
        <span className="title-price-card">{props.title}</span>
        <span className="title-price-card-mob">{props.titlemob}</span>
        <span className="text-some">by {props.author}</span>
        <div className="star-row-price-card">
          {markArr.length > 0 &&
            markArr.map((i, index) => (
              <FaStar key={index} style={{ color: "#B69106" }} />
            ))}
          {nomarkArr.length > 0 &&
            nomarkArr.map((i, index) => <FaRegStar key={index} />)}
        </div>
        {props?.strType == "single" ? (
          <span className="Single-Entry-Strategy">Single Entry Strategy</span>
        ) : (
          <span className="Single-Entry-Strategy">Double Entry Strategy</span>
        )}

        <div className="price-row-price-card">
          <span className="price-and-time">
            <span className="price-side">
              ${props.price - props.price * props.discount} /{" "}
            </span>
            <span className="price-month">
              {" "}
              &nbsp;{props.monthoryear}&nbsp;
            </span>
          </span>
          <Link to={`/card-details/${props?.id}`} className="view-details">
            View Details
          </Link>
        </div>
        <div>
          <span className="price-and-time-mob">
            <span className="price-side">
              ${props.price - props.price * props.discount} /{" "}
            </span>
            <span className="price-month">
              {" "}
              &nbsp;{props.monthoryear}&nbsp;
            </span>
          </span>
          <Link to="/card-details" className="view-details-mob">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
