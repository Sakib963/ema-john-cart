import React from "react";
import "./Header.css";
import brandLogo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={brandLogo} alt="EmaJohn Logo" />
      <nav>
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventory</a>
        <a href="">Login</a>
      </nav>
    </div>
  );
};

export default Header;
