import React from 'react';
import LoginSignUpScreen from '../components/LoginSignUpScreen';

const Header = (props) => {

  const logout = (e) => {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div className="header">

      <h2>LAMBDA MUD</h2>

      <button onClick={logout} className="logout-btn">
        Exit
      </button>

    </div>
  );
}

export default Header;