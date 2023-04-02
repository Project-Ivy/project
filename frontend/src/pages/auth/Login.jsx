import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import InputData from "../../components/Input/InputData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FcGoogle } from "react-icons/fc";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../../assets/css/Login.css";
import { ReactComponent as BubbleOne } from "../../assets/vector/bubbleOne.svg";
import { ReactComponent as BubbleTwo } from "../../assets/vector/bubbleTwo.svg";
import { ReactComponent as BubbleThree } from "../../assets/vector/bubbleThree.svg";

import { ReactComponent as LoginVector } from "../../assets/vector/loginVector.svg";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const openNotification = (placement, errorMessage) => {
    notification.open({
      className: "ALertNotif",
      description: errorMessage,
      placement,
      closable: false,
      duration: 3,
      key: "error-notif",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Please enter your email");
    } else {
      setEmailError();
    }
    if (!password) {
      setPasswordError("Please enter your password");
    } else {
      setPasswordError();
    }
    if (email && password) {
      try {
        // Waiting backend DataBase
        const response = await axios.post("/api/login", {
          email,
          password,
        });
        if (response.data.success) {
          setIsValid(true);
        } else {
          // setErrorMessage("Invalid email or password");
        }
      } catch (error) {
        if (error.message) {
          openNotification("top", error.message);
        } else {
          openNotification("top", "An error occurred. Please try again later.");
        }
      }
    }
  };

  return (
    <div className="login-background">
      <div className="bubble1">
        <BubbleOne className="bubbleOne" />
      </div>
      <div className="bubble2">
        <BubbleTwo className="bubbleTwo" />
      </div>
      <div className="bubble3">
        <BubbleThree className="bubbleThree" />
      </div>
      <div className="row-one">
        <div className="login-box">
          <div className="title">
            <h1>Login</h1>
            <p>
              Doesn't have an account yet?{" "}
              <a href="ww.google.com" className="link-to">
                Sign Up
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-data">
            <label className="input-field">Email Address</label>
            <InputData
              type="text"
              value={email}
              placeholder="you@example.com"
              name="email"
              onChange={handleChange}
              error={emailError}
            />
            <div className="password-data">
              <label className="input-field">Password</label>
              <a href="www.google.com" className="link-to">
                Forgot Password?
              </a>
            </div>
            <InputData
              type="password"
              value={password}
              placeholder="Enter 6 character or more "
              name="password"
              onChange={handleChange}
              error={passwordError}
            />
            <div className="checkbox-group">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button type="submit" className="btn-login">
              LOGIN
            </button>
          </form>

          <div className="line-flex">
            <div className="line-control">
              <div className="line"></div>
            </div>
            <span class="line-label">or login with</span>
            <div className="line-control">
              <div className="line"></div>
            </div>
          </div>
          <div className="button-grp">
            <button className="btn-google">
              <FcGoogle className="icon-google" />
              Google
            </button>
            <button className="btn-facebook">
              <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
      <div className="row-two">
        <LoginVector className="login-vector" />
      </div>
    </div>
  );
};

export default Login;
