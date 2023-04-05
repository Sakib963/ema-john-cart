import React from "react";
import "./Header.css";
import brandLogo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={brandLogo} alt="EmaJohn Logo" />
      <nav>
        <Link className="link" to='/'>Shop</Link>
        <Link className="link" to='/orders'>Order</Link>
        <Link className="link" to='/inventory'>Inventory</Link>
        <Link className="link" to='/login'>Login</Link>
      </nav>
    </div>
  );
};

export default Header;
