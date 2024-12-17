import React, { useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/logo_Proffood.avif";

const Navbar = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={navLogo} />
          <h1>DishDrive</h1>
        </div>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cnotact Us</li>
            <li>Cart</li>
            <li
              className="login-btn"
              onClick={() =>
                setLoginBtn(loginBtn === "login" ? "logout" : "login")
              }
            >
              {loginBtn}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
