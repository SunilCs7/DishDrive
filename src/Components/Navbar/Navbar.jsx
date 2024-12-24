import React, { useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/logo_Proffood.avif";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../CustomHook/useOnlineStatus";

//  cart related things
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

//for  Subscring to  the store using useSelector

import { useSelector } from "react-redux";

const Navbar = () => {
  // Custom hook to check online status
  const onlineStatus = useOnlineStatus(); // Ensures hook is used unconditionally

  const [loginBtn, setLoginBtn] = useState("Login");

  const toggleLogin = () => {
    setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
  };

  //  Subscring to  the store

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

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
          <li>
            <Link to="/cart">
              {" "}
              <FontAwesomeIcon icon={faCartPlus} />
              <p>{cartItems.length}</p>
            </Link>
          </li>
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
