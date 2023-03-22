import React, { useEffect, useState, useRef } from "react";
import "./profile.css";
import axios from "axios";
import { useHistory } from "react-router";
import { HiPencilSquare } from "react-icons/hi2";
import { FaRegCopy } from "react-icons/fa";
import { BsXCircleFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { ThemeContext } from "../../context/themeContext";
import { FiEdit } from "react-icons/fi";

export default function Profile({ close }) {
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

  const inputRef = useRef(null);

  useEffect(() => {
    const id = window.sessionStorage.getItem("userId");
    const token = window.sessionStorage.getItem("token");

    if (token == null) {
      navigate.push("/login");
    } else {
      axios
        .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/${id}`)
        .then((response) => {
          console.log(response.data);
          if (response.data.data.avatar) {
            setImage(response.data.data.avatar);
            window.sessionStorage.setItem("image", response.data.data.avatar);
          }

          const fullName = response.data.data.fullName;
          const refId = response.data.data.referralNo;
          const refUrl = `${process.env.REACT_APP_URL}/register/${refId}`;

          setUserName(fullName);
          setRefferal(refUrl);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const copyToClipBoard = async (copyMe) => {
    console.log("hello");
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
    <>
      <div className="profileForm">
        <div className="profileCard">
          <div className="closeButton">
            {" "}
            <button onClick={toggleFunction} className="backfroundremove">
              <img
                src="https://i.imgur.com/XTx0XQS.png"
                alt=""
                className="closeButton_view"
              />
            </button>
          </div>
          <img src={image} alt="" className="profileImageView" />
          <div className="modal-profileButtons">
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              onChange={(e) => imageHandler(e)}
            />

            <button className="filepicker" onClick={handleClick}>
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                onChange={(e) => imageHandler(e)}
              />
              <img src="https://i.imgur.com/0cys2gP.png" alt="" />
            </button>

            {/* <div className="modal-profileButton1">
              <button className="modal-profileButton1" onClick={handleClick}>
                <b>CHANGE AVATAR</b>
              </button>
            </div> */}
          </div>

          <span className="profileName">{userName}</span>
          <span className="profileNameLink">{referral}</span>
          <button
            className="rowClassButton"
            onClick={() => copyToClipBoard(referral)}
          >
            <span class="material-symbols-outlined">content_copy</span>
            Copy link
          </button>
          <p style={{ color: "white" }}>{copySuccess}</p>
          <div className="closeButton">
            <button className="logOuts">
              <span class="material-symbols-outlined" onClick={() => logout()}>
                logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
