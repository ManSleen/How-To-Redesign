import React from 'react';
import '../css/index.css';

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-wrapper">
        <div className="nav-home-button">Home</div>
        <h2 className="nav-title">How-To</h2>
        <div className="nav-menu-button">Menu</div>
      </div>
    </div>
  );
};

export default NavBar;
