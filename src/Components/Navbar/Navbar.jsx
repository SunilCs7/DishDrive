import React, { useState } from "react";
import "./Navbar.css";
import navLogo from "../../assets/logo_Proffood.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../CustomHook/useOnlineStatus";

//  cart related things
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

//for  Subscring to  the store using useSelector

import { useSelector } from "react-redux";
import { OfflineStatus, OnlineStatus } from "../OnlineStatus/OnlineStatus";

const Navbar = () => {
  // Custom hook to check online status
  const onlineStatus = useOnlineStatus(); // Ensures hook is used unconditionally

  const [loginBtn, setLoginBtn] = useState(false);

  const toggleLogin = () => {
    setLoginBtn(!loginBtn);
  };

  //  Subscring to  the store

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          {" "}
          <img src={navLogo} alt="DishDrive logo" />
        </Link>
      </div>

      <div className="nav-menu">
        <ul>
          <li>
            {onlineStatus ? (
              <div className="online-offline-status">
                <p className="">Online</p>
                <OnlineStatus />
              </div>
            ) : (
              <div className="online-offline-status">
                <p className="">Offline</p>
                <OfflineStatus />
              </div>
            )}
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="addCart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartPlus} />
              <p className="cartNo">{cartItems.length}</p>
            </Link>
          </li>
        </ul>

        {/* <button
          className={`login-btn ${loginBtn === "Login" ? "login" : "logout"}`}
          onClick={toggleLogin}
        >
          {loginBtn}
        </button> */}

        {/* Login/Logout Button */}
        <button className="login-logout-btn" onClick={toggleLogin}>
          <p>{loginBtn ? "Logout" : "Login"}</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
