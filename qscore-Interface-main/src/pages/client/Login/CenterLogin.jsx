import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/button";
import InputField from "../../../components/Inputfield";
import Checkbox from "../../../components/checkbox";
import { loginUser } from "../../../store/slices/authSlice"; // Import actions
import axios from "axios";
import "./CenterLogin.css";
import PricingTableOne from "../../../components/tailadmin/PricingTableOne";

const CenterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth); // Access the authentication state

  const handleCheckboxChange = () => setIsChecked(!isChecked);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    console.log("Details submitted");
    console.log(email, password);
    dispatch(loginUser({ email, password })); // Dispatch the loginRequest action to indicate loading
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>
          Welcome to{" "}
          <span className="logo">
            <img src="./assets/qScore.png" alt="Logo" />
          </span>
        </h1>
        <span className="second-h">Login to Your Admin Portal.</span>
        <br />
        <InputField
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          text="Log In"
          onClick={handleSubmit}
          backgroundColor=""
          color="white"
          size="medium"
          className="primary-responsive"
        />
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}

        <p className="forgetPassword">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
      <div className="login-image">
        <img src="./assets/CenterLogin.png" alt="Login" />
      </div>
    </div>
  );
};

export default CenterLogin;
