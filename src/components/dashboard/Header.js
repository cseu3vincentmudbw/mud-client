import React from 'react';

const Header = (props) => {

  const logout = (e) => {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <div className="header">

      <h2>LEGENDS</h2>

      <h2 onClick={logout} className="header-sign-out">
        Sign Out
      </h2>

    </div>
  );
}

export default Header;
