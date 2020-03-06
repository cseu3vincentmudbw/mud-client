import React, { useContext } from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from './contexts';

function App() {
  return (
    <div>
      <GlobalStyle />
      { localStorage.getItem('token')
        ? null
        : <Navbar />
      }
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
    </div>
  );
}

export default App;
