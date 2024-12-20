import React, { useEffect, useState } from "react";
import "./RestuarantMenu.css";
import Shimmer from "../Shimmer/Shimmer";

const SWIGGY_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload";

const RestuarantMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=208058&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
      );
      const json = await data.json();
      setMenu(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!menu) return <Shimmer />;

  const restaurantInfo = menu?.cards?.[2]?.card?.card?.info || {};
  const {
    name: restaurantName,
    cuisines,
    costForTwoMessage: costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    totalRatingsString,
  } = restaurantInfo;

  const menuItems =
    menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-container">
      <div className="restaurant-header">
        <img
          src={`${SWIGGY_CDN_URL}/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={restaurantName}
          className="restaurant-image"
        />
        <div className="restaurant-info">
          <h1>{restaurantName}</h1>
          <p className="cuisines">{cuisines?.join(", ")}</p>
          <div className="meta-info">
            <span className="rating">★ {avgRating}</span>
            <span className="dot">•</span>
            <span>{deliveryTime} mins</span>
            <span className="dot">•</span>
            <span>{costForTwo}</span>
          </div>
          <p className="ratings-string">{totalRatingsString}</p>
        </div>
      </div>

      <div className="menu-list">
        {menuItems?.map((category) => (
          <div key={category?.card?.card?.title} className="menu-category">
            <h2 className="category-title">{category?.card?.card?.title}</h2>
            <div className="items-container">
              {category?.card?.card?.itemCards?.map((item) => (
                <div key={item?.card?.info?.id} className="menu-item">
                  <div className="item-details">
                    <h3>{item?.card?.info?.name}</h3>
                    <p className="price">
                      ₹
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </p>
                    <p className="description">
                      {item?.card?.info?.description}
                    </p>
                  </div>
                  {item?.card?.info?.imageId && (
                    <div className="item-image-container">
                      <img
                        src={`${SWIGGY_CDN_URL}/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                        alt={item?.card?.info?.name}
                        className="item-image"
                      />
                      <button className="add-btn">Add +</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestuarantMenu;
