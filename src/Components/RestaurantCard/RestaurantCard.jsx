import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../../utils/Contrants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  return (
    <>
      <div className="res-card">
        <img
          src={CDN_URL + resObj?.card?.card?.info?.cloudinaryImageId}
          alt="res-img"
        />
        <h1>{resObj?.card?.card?.info?.name}</h1>
        {/* <h1>{resObj?.card?.card?.info?.address}</h1> */}
        <h1>{resObj?.card?.card?.info?.areaName}</h1>
        <h1>{resObj?.card?.card?.info?.cuisines.join(", ")}</h1>
        <h1>Rating: {resObj?.card?.card?.info?.avgRating}</h1>
        <h1>{resObj?.card?.card?.info?.sla?.deliveryTime} minutes</h1>
        <h1>{resObj?.card?.card?.info?.costForTwoMessage}</h1>
      </div>
    </>
  );
};

export default RestaurantCard;
