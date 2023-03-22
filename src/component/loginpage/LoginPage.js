import React, { useState } from "react";
import "./login.css";
import Register from "../register/register";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import makeToast from "../../Toaster";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useHistory();

  const loginUser = () => {
    const data = {
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/login`, data)
      .then((result) => {
        makeToast("success", "Login Successfully");
        window.sessionStorage.setItem("token", result.data.token);
        window.sessionStorage.setItem("userId", result.data.data._id);
        window.sessionStorage.setItem("ref", result.data.data.referralNo);
        window.sessionStorage.setItem("image", result.data.data.avatar);
        navigate.push("/");
      })
      .catch((error) => {
        makeToast("error", error.response?.data.message);
      });
  };
  return (
    <div className="LoginPage">
      <span className="create-accounts">Login</span>

      {/* <span className='create-account-twos'>Register with Astrabit using your one-time invitation code</span> */}
      <img
        src="https://i.imgur.com/o8eiQqo.gif"
        alt=""
        className="login-bot-image"
      />
      <form className="two-col-log-in-page">
        <span className="create-account">Login</span>
        <span></span>
        <span className="placeholder-for-text-field">Email</span>
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email Address"
          className="input-field-login"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="placeholder-for-text-field">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Enter Your password"
          className="input-field-login"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="register-button"
          onClick={() => loginUser()}
        >
          Login
        </button>
        <span className="link-login">
          Need An Account?
          <Link className="linkt" to="/register">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
}
