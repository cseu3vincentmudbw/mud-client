import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import PrivateRoute from "./components/PrivateRoute";
// import Home from "./components/features/Home";
import Dashboard from './components/Dashboard';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Player from "./components/features/Player";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <PrivateRoute exact path="/" render={props => <Dashboard {...props} />} />
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
      <Route
        path="/play"
        render={props => {
          return <Player {...props} />;
        }}
      />
    </div>
  );
}

export default App;
