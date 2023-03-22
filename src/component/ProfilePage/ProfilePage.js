import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./ProfilePage.css";
import Pricecard from "../Pricing/Pricecard";
import { MdArrowDropDown } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { TbArrowsDownUp } from "react-icons/tb";
import { IoMdCloudDownload } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";
import { ThemeContext } from "../../context/themeContext";
import FooterTypeTwoMobile from "../footer/FooterTypeTwoMobile";
import FooterTypeTwo from "../footer/FooterTypeTwo";
import moment from "moment";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function ProfilePage() {
  const [discount, setDiscount] = useState(0);
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const navigate = useHistory();
  const [referral, setRefferal] = useState(
    "http://localhost:3000/register/16683173870186490"
  );
  const [copySuccess, setCopySuccess] = useState("");
  const [image, setImage] = useState(
    "https://www.nicepng.com/png/full/7-77391_businessman-transparent-business-man-png.png"
  );
  const [userName, setUserName] = useState("John Maxwell");
  const userId = window.sessionStorage.getItem("userId");

  const [botsArr, setBotsArr] = useState([]);
  const [tradedata, setTradeData] = useState([]);
  const [tradedataInitial, setTradeDataInitial] = useState([]);
  const [roll, setRoll] = useState(false);
  const [profit, setProfit] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    const id = window.sessionStorage.getItem("userId");
    const token = window.sessionStorage.getItem("token");

    console.log("userID:", id);
    if (token == null) {
      navigate.push("/login");
    } else {
      axios
        .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/${id}`)
        .then((response) => {
          setTradeData(response.data.trades);
          setTradeDataInitial(response.data.trades);
          setProfit(response.data.totalProfit? response.data.totalProfit : 0);

          if (response.data.data.avatar) {
            setImage(response.data.data.avatar);
            window.sessionStorage.setItem("image", response.data.data.avatar);
          }

          // console.log("trades:", response.data.trades);
          const fullName = response.data.data.fullName;
          const refId = response.data.data.referralNo;
          const refUrl = `${process.env.REACT_APP_URL}/register/${refId}`;

          setUserName(fullName);
          setRefferal(refUrl);
        })
        .catch((error) => {
          console.log("errrrrrr:");
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    const data = {
      userId: window.sessionStorage.getItem("userId"),
    };

    axios
      .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/buy/id`, data)
      .then((result) => {
        setBotsArr(result.data.data);
      });
  }, []);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 2000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  const rollUp = (data) => {
    setRoll(!roll);
    if (data) {
      setTradeData([]);
    } else {
      setTradeData(tradedataInitial);
    }
  };

  const uploadData = () => {
    console.log("hello");
    const avatar = image;

    axios
      .patch(
        `${process.env.REACT_APP_AXIOS_URL}/api/v1/user/update/${userId}`,
        {
          avatar,
        }
      )
      .then((res) => {
        console.log(res.data);
        window.sessionStorage.setItem("image", image);
        console.log("success!!");
      });
  };

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const imageHandler = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);

        window.sessionStorage.setItem("image", reader.result);

        console.log("hello");

        const data = {
          avatar: reader.result,
        };

        axios
          .patch(
            `${process.env.REACT_APP_AXIOS_URL}/api/v1/user/update/${userId}`,
            data
          )
          .then((res) => {
            console.log(res.data);

            console.log("success!!");
          });
      }
    };

    reader.readAsDataURL(e.target.files[0]);

    // uploadData();
  };

  const logout = () => {
    const sessionClear = sessionStorage.clear();
    toggleFunction();
    navigate.push("/");
  };

  return (
    <div className="profilePage">
      <div className="pro-page-top">
        <div className="pro-page-top-left">
          <div className="pro-page-top-left-pic">
            <img src={image} alt="" />
          </div>
          <div className="pro-page-top-left-name-sec">
            <h2>{userName}</h2>
            <a href="">{referral}</a>
          </div>
          <div>
            {" "}
            <button
              className="rowClassButton"
              onClick={() => copyToClipBoard(referral)}
            >
              <span className="material-symbols-outlined">content_copy</span>
              Copy link
            </button>
            <p style={{ color: "white", paddingTop: "5px" }}>{copySuccess}</p>
          </div>
        </div>
        <div className="pro-page-top-right">
          <h4>You Have</h4>
          <h2>{profit.toFixed(2)} $</h2>
          <button className="nav-btn" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </div>

      <div className="pro-page-body">
        <div className="pro-page-body-left">
          {botsArr?.length == 0 ? (
            <h3>Astras not Found.</h3>
          ) : (
            <h3>Your Astras.</h3>
          )}
          <div className="profile-pricecards">
            {botsArr?.length > 0 &&
              botsArr?.map((bot, index) => (
                <div className="pro-pricecard" key={index}>
                  <img src="https://i.imgur.com/U71R56l.png" alt="" />
                  <span className="pro-pricecard-title">Blueberry Muffin</span>
                  <span className="pro-pricecard-text">by Breadbytes</span>
                  <div
                    style={{ display: "flex", gap: "8px", marginTop: "15px" }}
                  >
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#F69F1B" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#F69F1B" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#F69F1B" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#F69F1B" }}
                    ></i>
                    <i
                      className="fa-regular fa-star"
                      style={{ color: "#51493E" }}
                    ></i>
                  </div>
                  <button className="pro-pricecard-strategy">
                    Single-Entry Strategy
                  </button>
                  <div className="pro-price-card-bottom">
                    <span className="pro-pricecard-amount">
                      54$ /<span className="pro-pricecard-month">month</span>
                    </span>

                    <button className="pro-pricecard-details">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="pro-page-body-right">
          <div className="pro-page-body-right-header">
            <div style={{ display: "flex" }}>
              <h3 className="pro-page-body-right-header-left">
                History of your activity
                <MdArrowDropDown
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
              </h3>
            </div>
            <div style={{ display: "flex" }}>
              {roll ? (
                <h3 className="pro-page-body-right-header-right">
                  Roll down
                  <MdKeyboardArrowDown
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => rollUp(false)}
                  />
                </h3>
              ) : (
                <h3 className="pro-page-body-right-header-right">
                  Roll up
                  <IoIosArrowUp
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => rollUp(true)}
                  />
                </h3>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <table id="trade">
              <thead>
                <tr>
                  <th scope="col">Currency</th>
                  <th scope="col">Price</th>
                  <th scope="col">Position</th>
                  <th scope="col">Time</th>
                  <th scope="col">Profit</th>
                </tr>
              </thead>
              <tbody>
                {tradedata?.length > 0 &&
                  tradedata?.map((trade, index) => (
                    <tr key={index}>
                      <td data-label="Account">{trade.symbol}</td>
                      <td data-label="Due Date">{trade.price}</td>
                      <td data-label="Amount">{trade.side}</td>
                      <td data-label="Period">
                        {moment(trade.time).format("LLL")}
                      </td>
                      <td data-label="profit">
                        {parseFloat(trade.realizedPnl).toFixed(2)} $
                      </td>
                    </tr>
                  ))}
              </tbody>
              <div
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <ReactHTMLTableToExcel
                  className="btn btn-info"
                  table="trade"
                  filename="TradeResultReport"
                  sheet="TradeResultSheet"
                  buttonText="Export excel"
                />
              </div>
            </table>
          </div>
        </div>
      </div>
      <FooterTypeTwoMobile />
      <FooterTypeTwo />
    </div>
  );
}

export default ProfilePage;