import React, { useEffect, useState } from "react";
import "./RestuarantMenu.css";
import Shimmer from "../Shimmer/Shimmer";
import { MENU_API, CDN_URL } from "../../utils/Contrants";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + params.resid);
      const data = await res.json();
      // console.log(data);
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching the menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]
      ?.card?.card;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">{name}</h1>
        <p className="menu-cuisines">{cuisines.join(", ")}</p>
      </div>

      <h2 className="menu-section-title">{title}</h2>
      <div className="menu-items">
        {itemCards.map((item, index) => {
          const itemInfo = item.card?.info;
          return (
            <div key={index} className="menu-item">
              <img
                className="menu-item-image"
                src={CDN_URL + itemInfo?.imageId}
                alt={itemInfo?.name}
              />
              <div className="menu-item-content">
                <h3 className="menu-item-name">{itemInfo?.name}</h3>
                <p className="menu-item-description">
                  {itemInfo?.description || "No description available"}
                </p>
                <p className="menu-item-category">
                  Category: {itemInfo?.category}
                </p>
                {itemInfo?.ratings?.aggregatedRating?.rating && (
                  <p className="menu-item-rating">
                    ⭐ {itemInfo?.ratings?.aggregatedRating?.rating}
                  </p>
                )}
                <p
                  className={`menu-item-availability ${
                    itemInfo?.inStock ? "available" : "unavailable"
                  }`}
                >
                  {itemInfo?.inStock ? "Available" : "Out of Stock"}
                </p>
                <p className="menu-item-type">
                  Type:{" "}
                  {itemInfo?.itemAttribute?.vegClassifier === "VEG"
                    ? "Veg 🌱"
                    : "Non-Veg 🍖"}
                </p>
              </div>
              <div className="menu-item-footer">
                <span className="menu-item-price">
                  ₹{itemInfo?.price / 100 || itemInfo?.defaultPrice / 100}
                </span>
                <button className="menu-add-button">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestuarantMenu;
