import React, { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginWrapperDiv } from "../../styles/userAuthStyles";

export default function Login(props) {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", user)
      .then(res => {
        localStorage.setItem("token", res.data.key);
        props.history.push("/");
      })
      .catch(err => {
        alert("Please check your credentials and try again")
      });
  };
  return (
    <LoginWrapperDiv>
      <section>
        <h2>Welcome Back</h2>
        <h4>Sign in to your account</h4>
      </section>
      <section>
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
            <label>Password</label>
            <input
              autoComplete="current-password"
              required
              type="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <button type="submit">Login</button>
            <p>
              Don't have an account yet? <Link to="/register">Join Now</Link>
            </p>
          </div>
        </form>
      </section>
    </LoginWrapperDiv>
  );
}
