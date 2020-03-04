import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LoginWrapperDiv } from "../../styles/userAuthStyles";
import { LoaderDiv } from "../../styles/Loader";

export default function Login(props) {
  const [requesting, setRequesting] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    setRequesting(true);
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    axios
      .post("https://legend-mud.herokuapp.com/api/login/", user)
      .then(res => {
        setRequesting(false);
        localStorage.setItem("token", res.data.key);
        window.location.href ="/";
      })
      .catch(err => {
        setRequesting(false);
        alert("Please check your credentials and try again");
      });
  };
  return (
    <LoginWrapperDiv>
      <section>
        <h2>Welcome Back</h2>
        <h4>Sign in to your account</h4>
      </section>
      <section>
        {requesting ? (
          <LoaderDiv>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </LoaderDiv>
        ) : null}
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
            <button disabled={requesting ? true : false} type="submit">
              Login
            </button>
            <p>
              Don't have an account yet? <Link to="/register">Join Now</Link>
            </p>
          </div>
        </form>
      </section>
    </LoginWrapperDiv>
  );
}
