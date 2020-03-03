import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

      <Navbar />
  
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
    </div>

  );
}

export default App;
