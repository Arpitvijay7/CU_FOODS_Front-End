import React, { useState } from "react";
import './styles.css';

const ResetPwd = () => {
  const [oldPwd, setOldPwd] = useState();
  const [newPwd, setNewPwd] = useState();
  const [newPwd2, setNewPwd2] = useState();
  const handleClick = () => {
    window.alert(oldPwd);
    window.alert(newPwd);
    window.alert(newPwd2);
  };
  return (
    <div class="mainDiv">
      <div class="cardStyle">
        <form action="" method="post" name="signupForm" id="signupForm">
          <img src="" id="signupLogo" />

          <h2 class="formTitle">Login to your account</h2>

          <div class="inputDiv">
            <label class="inputLabel" for="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
            ></input>
          </div>

          <div class="inputDiv">
            <label class="inputLabel" for="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            ></input>
          </div>

          <div class="buttonWrapper">
            <button
              type="submit"
              id="submitButton"
              onclick="validateSignupForm()"
              class="submitButton pure-button pure-button-primary"
            >
              <span>Continue</span>
              <span id="loader"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPwd;
