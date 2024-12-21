import React, { useEffect, useState } from "react";
import "./RestuarantMenu.css";
import Shimmer from "../Shimmer/Shimmer";

import { MENU_API, CDN_URL } from "../../utils/Contrants";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  // console.log("the res ID is", params);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + params.resid);
      const data = await res.json();

      console.log("menudata" + data);
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
        <h2 className="menu-title">{name}</h2>
        <p className="menu-cuisines">{cuisines.join(", ")}</p>
      </div>

      <h3 className="menu-section-title">{title}</h3>
      <ul className="menu-items">
        {itemCards.map((item, index) => (
          <li key={index} className="menu-item">
            <img
              className="menu-item-image"
              src={CDN_URL + item.card?.info?.imageId}
              alt={item.card?.info?.name}
            />
            <div className="menu-item-details">
              <h4 className="menu-item-name">{item.card?.info?.name}</h4>
              <p className="menu-item-description">
                {item.card?.info?.description || "No description available"}
              </p>
            </div>
            <div className="menu-item-price">
              ₹
              {item.card?.info?.price / 100 ||
                item.card?.info?.defaultPrice / 100}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
