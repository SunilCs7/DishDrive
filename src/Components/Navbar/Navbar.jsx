import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img
            src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg"
            alt="logo"
          />
          <h1>DishDrive</h1>
        </div>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cnotact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
