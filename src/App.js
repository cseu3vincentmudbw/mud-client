import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
    </>
  );
}

export default App;
