import React from 'react';

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
