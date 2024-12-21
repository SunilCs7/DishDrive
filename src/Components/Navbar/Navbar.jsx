import React, { useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/logo_Proffood.avif";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../CustomHook/useOnlineStatus";

const Navbar = () => {
  // Custom hook to check online status
  const onlineStatus = useOnlineStatus(); // Ensures hook is used unconditionally

  const [loginBtn, setLoginBtn] = useState("Login");

  const toggleLogin = () => {
    setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={navLogo} alt="DishDrive logo" />
        <h1>DishDrive</h1>
      </div>
      <div className="nav-menu">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li
            className={`login-btn ${loginBtn === "Login" ? "login" : "logout"}`}
            onClick={toggleLogin}
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
