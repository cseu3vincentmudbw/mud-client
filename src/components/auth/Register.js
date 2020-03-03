import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SignupWrapperDiv } from "../../styles/userAuthStyles";

export default function Register(props) {
  const [unmatch, setUnmatch] = useState(false);
  const [clength, setClength] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);

  const style = { color: unmatch || clength ? "red" : "#6ea22c" };

  const clearWarning = () => {
    if (unmatch || clength) {
      setUnmatch(false);
      setClength(false);
    }
  };
  const checkMatch = () => {
    if (password1Ref.current.value !== password2Ref.current.value) {
      setUnmatch(!unmatch);
      return false;
    }
    if (password1Ref.current.value.length < 8) {
      setClength(!clength);
      return false;
    }
    return true;
  };
  const onSubmit = event => {
    event.preventDefault();
    if (checkMatch()) {
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password1: password1Ref.current.value,
        password2: password2Ref.current.value
      };
      axios
        .post("https://lambda-mud-test.herokuapp.com/api/registration/", user)
        .then(res => {
          localStorage.setItem("token", res.data.key);
          props.history.push("/");
        })
        .catch(err => {
          alert("Please try a different username");
        });
    }
  };
  return (
    <SignupWrapperDiv>
      <section>
        <h3>Create an account</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label>Username</label>
            <input
              autoComplete="username"
              required
              type="text"
              placeholder="jamesdoe"
              ref={usernameRef}
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              autoComplete="username"
              required
              type="email"
              placeholder="jamesdoe72@email.com"
              ref={emailRef}
            />
          </div>
          <div>
            <label>Choose a password</label>
            <input
              autoComplete="new-password"
              required
              type="password"
              ref={password1Ref}
              onChange={clearWarning}
            />
            {clength ? (
              <small style={style}>Password is less than 8 characters</small>
            ) : null}
            {unmatch ? (
              <small style={style}>Passwords do not match</small>
            ) : (
              <small>Password must contain minimum of 8 characters </small>
            )}
          </div>
          <div>
            <label>Confirm password</label>
            <input
              autoComplete="new-password"
              required
              type="password"
              ref={password2Ref}
              onChange={clearWarning}
            />
            {clength ? (
              <small style={style}>Password is less than 8 characters</small>
            ) : null}
            {unmatch ? (
              <small style={style}>Passwords do not match</small>
            ) : null}
          </div>
          <div>
            <p>
              By creating an account, you agree to our{" "}
              <Link to="/terms-and-conditions">Terms and Conditions</Link> &{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
            <button type="submit">Join Now</button>
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </form>
      </section>
    </SignupWrapperDiv>
  );
}
