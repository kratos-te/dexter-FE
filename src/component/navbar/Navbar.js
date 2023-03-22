/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCartDash, BsFillPersonFill, BsTelephone } from "react-icons/bs";
import { FiBell, FiBarChart } from "react-icons/fi";
// import Popup from 'reactjs-popup';
import Profile from "../profile/Profile";
import { ThemeContext } from "../../context/themeContext";
export default function Navbar() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [image, setImage] = useState(
    "https://www.nicepng.com/png/full/7-77391_businessman-transparent-business-man-png.png"
  );

  useEffect(() => {
    const id = window.sessionStorage.getItem("userId");
    console.log(id);
    if (id != null) {
      axios
        .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/${id}`)
        .then((response) => {
          if (response.data.data.avatar) {
            setImage(response.data.data.avatar);
            window.sessionStorage.setItem("image", response.data.data.avatar);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    setInterval(() => {
      setToken(window.sessionStorage.getItem("token"));

      if (
        window.sessionStorage.getItem("image") != null &&
        window.sessionStorage.getItem("image") != "undefined"
      ) {
        setImage(window.sessionStorage.getItem("image"));
      } else {
        setImage(
          "https://www.nicepng.com/png/full/7-77391_businessman-transparent-business-man-png.png"
        );
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const closer = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", closer);
  });

  return (
    <>
      <div className="navbar-container">
        <div className="nav-logo">
          <Link to="/">
            <img
              className="nav-img"
              src="https://i.imgur.com/dNHuLNM.png"
              alt="web-logo"
            />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/features"
            >
              Features
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/price"
            >
              Pricing
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/signals"
            >
              Signals
            </Link>
          </li>
          {/* <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/newform"
            >
              New Form
            </Link>
          </li> */}

          {/* <li className="nav-list-item">
            <Link
              className="nav-anc"
              style={{ textDecoration: "none" }}
              to="/profilepage"
            >
              ProfilePage
            </Link>
          </li> */}

          {token == undefined || token == null ? (
            <li className="nav-list-item">
              <Link
                className="nav-anc"
                style={{ textDecoration: "none" }}
                to="/login"
              >
                <button className="nav-btn">Login</button>
              </Link>
            </li>
          ) : (
            <li className="nav-list-item">
              <Link
                className="nav-ancPro"
                to="/profilepage"
                style={{ textDecoration: "none" }}
              >
                <img className="pro-pic" src={image} alt="" />
              </Link>
            </li>
          )}
        </ul>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu
            style={{ width: "40px", height: "40px", color: "white" }}
            className="gi_icon"
          />
        </div>

        <ul className="notify">
          <li className="notifyitems">
            <FiBell
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            />
          </li>
          {token == undefined || token == null ? (
            <li className="nav-list-item">
              <Link
                className="nav-anc"
                style={{ textDecoration: "none" }}
                to="/login"
              >
                <button className="nav-btn">Login</button>
              </Link>
            </li>
          ) : (
            <li className="nav-list-item">
              <Link
                className="nav-ancPro"
                to="/profilepage"
                style={{ textDecoration: "none" }}
              >
                <img className="pro-pic" src={image} alt="" />
              </Link>
            </li>
          )}
        </ul>

        <ul
          onClick={() => setOpen(false)}
          className="nav-hamburgermenu"
          style={{
            left: open ? "0px" : "-65vw",
          }}
        >
          <div className="nav-sm-img">
            <Link to="">
              <img
                className="nav-sm-img"
                src="https://i.imgur.com/hg09uzZ.png"
                alt="web-logo"
              />
            </Link>
          </div>
          <li className="nav-list-hamburger-item">
            <Link
              className="nav-anc-sm"
              style={{ textDecoration: "none" }}
              to="/"
            >
              <FiBarChart
                style={{
                  margin: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              Home
            </Link>
          </li>
          <li className="animate__animated animate__bounce nav-list-hamburger-item">
            <Link
              className="nav-anc-sm"
              style={{ textDecoration: "none" }}
              to="/features"
            >
              <span
                style={{
                  margin: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✔
              </span>
              Feature
            </Link>
          </li>
          <li className="nav-list-hamburger-item">
            <Link
              className="nav-anc-sm"
              style={{ textDecoration: "none" }}
              to="/price"
            >
              <BsCartDash
                style={{
                  margin: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              Pricing
            </Link>
          </li>
          <li className="nav-list-hamburger-item">
            <Link
              className="nav-anc-sm"
              style={{ textDecoration: "none" }}
              to="/about"
            >
              <BsFillPersonFill
                style={{
                  margin: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              About Us
            </Link>
          </li>
          <li className="nav-list-hamburger-item">
            <Link
              className="nav-anc-sm"
              style={{ textDecoration: "none" }}
              to="/contact"
            >
              <BsTelephone
                style={{
                  margin: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* {toggle ? (
        <>
          <Profile />
        </>
      ) : (
        <></>
      )} */}
    </>
  );
}
