import React, { useState } from "react";
import FooterTypeTwo from "../footer/FooterTypeTwo";
import FooterTypeTwoMobile from "../footer/FooterTypeTwoMobile";
import "./contact.css";
import axios from "axios";
import makeToast from "../../Toaster";

export default function Contact() {
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const upload = async () => {
    const data = {
      email: email,
      name: name,
      message: message,
    };

    await axios
      .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/contact`, data)
      .then((response) => {
        makeToast("success", "Successfully sent");
        console.log(response.data);
      });
  };
  return (
    <div className="animate__animated animate__fadeInLeft contact-page">
      <span className="topic-contact-page">Get in touch with us</span>
      <br></br>
      <span className="topic-contact-page-mob">
        Lorem Ipsum is simply dummy text of the printing and{" "}
      </span>
      <div className="contact-page-second-row">
        <div className="col-contact-form">
          <span className="form-span-name">Your Name</span>
          <input
            type="text"
            name="email"
            placeholder=""
            className="form-span-name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="form-span-name">Your Email Address</span>
          <input
            type="text"
            name="email"
            placeholder=""
            className="form-span-name-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="form-span-name">Your Message</span>

          <textarea
            type="text"
            name="email"
            placeholder=""
            className="form-span-name-area"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={() => upload()} className="nav-btn">
            Submit
          </button>
        </div>

        <div className="col-contact-form-details">
          <span className="col-contact-form-details-topic">
            How can we help?
          </span>
          <span className="col-contact-form-details-topic-details">
            Please feel free to contact us to make a suggestion, get
            information, or share your feedback.
          </span>
          <div className="firstimage-andtext-row">
            <div className="leftside">
              <div className="inside-one-col">
                How can we help?
                <br />
                Please feel free to contact us to make a suggestion, get
                information, or share your feedback.
              </div>
              <div className="detils-row">
                <div className="">
                  <img src="https://i.imgur.com/v9g6liK.png" alt="" />
                </div>
                <div className="detils-row-inside-detils-row">
                  614 N. Dupont Hwy, Suite 210,
                  <br />
                  Dover, DE 19901 USA
                </div>
              </div>
              <div className="detils-row">
                <div className="">
                  <img src="https://i.imgur.com/rW7Gplz.png" alt="" />
                </div>
                <div className="detils-row-inside-detils-row">
                  team@astrabit.io
                </div>
              </div>
              <div className="detils-row">
                <div className="">
                  <img src="https://i.imgur.com/RvVfVCQ.png" alt="" />
                </div>
                <div className="detils-row-inside-detils-row">
                  +1 (844) ASTRABIT 278-7224
                </div>
              </div>
            </div>
            <div className="rightside">
              <img
                src="https://i.imgur.com/R4oUD3z.png"
                alt=""
                className="image-contact-image"
              />
            </div>
          </div>
        </div>
      </div>
      <FooterTypeTwoMobile />
      <FooterTypeTwo />
    </div>
  );
}
