import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import resData from "../../utils/data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  return (
    <>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants..."
          />
          <button className="search-button">Search</button>
        </div>
        <div className="filter-res-data">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res?.card?.card?.info?.avgRating > 4.7
              );
              setListOfRestaurants(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          <h2 className="section-title">Top Restaurants</h2>
          <div className="restaurant-list">
            {listOfRestaurants.map((res) => (
              <RestaurantCard key={res.card.card.info.id} resObj={res} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
