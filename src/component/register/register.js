import React, { useState, useEffect } from "react";
import "./register.css";
import { useFormik } from "formik";
import { userSchema } from "../../validations/UserValidations";
import LoginPage from "../loginpage/LoginPage";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from 'react-loader-spinner';

import makeToast from "../../Toaster";
import { FaLaptopHouse } from "react-icons/fa";
export default function Register() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [userRef, setUserRef] = useState("");
  const params = useParams();
  const navigate = useHistory();

  const [passwordErr, setPasswordError] = useState(false);
  const [passwordErrMsg, setPasswordErrorMsg] = useState("");
  const [cnfpasswordErr, setCnfPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    console.log(params.id);
    setUserRef(params.id);
  }, []);

  const signupUser = () => {
    if (password.length >= 8) {
      if (
        password.match(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        )
      ) {
        if (password == cnfPassword) {
          const data = {
            email,
            fullName,
            password,
            userRef,
          };
          setIsLoading(true);
          axios
            .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/signup`, data)
            .then((result) => {
              setIsLoading(FaLaptopHouse)
              makeToast("success", "Register Successfully");
              navigate.push("/login");
            })
            .catch((error) => {
              setIsLoading(false)
              console.log(error);
              makeToast("error", error.response?.data);
            });
        } else {
          setCnfPasswordError(true);
          setTimeout(() => {
            setCnfPasswordError(false);
          }, 5000);
        }
      } else {
        setPasswordError(true);
        setPasswordErrorMsg(
          "Password must be contain 1 number 1 letter and 1 symbol"
        );
        setTimeout(() => {
          setPasswordError(false);
        }, 5000);
      }
    } else {
      setPasswordError(true);
      setPasswordErrorMsg("Password must be include 8 Characters");
      setTimeout(() => {
        setPasswordError(false);
      }, 5000);
    }
  };

  return (
    <div className="LoginPage">
      <span className="create-accounts">Create Account</span>
      <span className="create-account-twos">
        Register with DEXtre using your one-time invitation code
      </span>
      <img
        src="https://i.imgur.com/o8eiQqo.gif"
        alt=""
        className="login-bot-image"
      />
      <div className="two-col-log-in-page">
        <span className="create-account">Create Account</span>
        <span className="create-account-two">
          Register with DEXtre using your one-time invitation code
        </span>
        <span className="placeholder-for-text-field">Email*</span>
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email Address"
          className="input-field-login"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="placeholder-for-text-field">Full Name</span>
        <input
          type="text"
          name="fname"
          placeholder="Enter Your Full Name"
          className="input-field-login"
          defaultValue={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <span className="placeholder-for-text-field">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="input-field-login"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErr ? (
          <label htmlFor="" className="error">
            {passwordErrMsg}
          </label>
        ) : null}
        <span className="placeholder-for-text-field">Confirm Password</span>
        <input
          type="password"
          name="password"
          placeholder="Re-Enter Your password"
          className="input-field-login"
          defaultValue={cnfPassword}
          onChange={(e) => setCnfPassword(e.target.value)}
        />
        {cnfpasswordErr ? (
          <label htmlFor="" className="error">
            Password and Confirm Password is not Matching
          </label>
        ) : null}
        <span className="placeholder-for-text-field">Referral ID</span>
        <input
          type="text"
          placeholder="Enter Your Ref Id"
          className="input-field-login"
          defaultValue={userRef}
          onChange={(e) => setUserRef(e.target.value)}
        />
        {isLoading ?
          <InfinitySpin
            width='200'
            color="#6e5a2f"
          />
          :
          <button
            type="submit"
            className="register-button"
            onClick={() => signupUser()}
          >
            Register
          </button>}

        <span className="link-login">
          Aready Have An Account?
          <Link className="linkt" to="/login">
            Login
          </Link>
        </span>
      </div>
      <div className="three-col-log-in-page">
        <span className="password-strength">Password Strngth</span>
        <div className="row-password-row">
          <img src="https://i.imgur.com/tFUUbgj.png" alt="" />
          <span className="list-data-password">8 characters minimum</span>
        </div>
        <div className="row-password-row">
          <img src="https://i.imgur.com/tFUUbgj.png" alt="" />
          <span className="list-data-password">1 number</span>
        </div>
        <div className="row-password-row">
          <img src="https://i.imgur.com/tFUUbgj.png" alt="" />
          <span className="list-data-password">1 symbol</span>
        </div>
        <div className="row-password-row">
          <img src="https://i.imgur.com/tFUUbgj.png" alt="" />
          <span className="list-data-password">
            1 or more upper case letters
          </span>
        </div>
        <div className="row-password-row">
          <img src="https://i.imgur.com/tFUUbgj.png" alt="" />
          <span className="list-data-password">
            1 or more lower case letters
          </span>
        </div>
      </div>
    </div>
  );
}