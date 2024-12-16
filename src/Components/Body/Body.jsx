import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import resData from "../../utils/data";

const Body = () => {
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
        <div className="res-container">
          <h2 className="section-title">Top Restaurants</h2>
          <div className="restaurant-list">
            {/* <RestaurantCard resObj={resData[0]} />
            <RestaurantCard resObj={resData[1]} />
            <RestaurantCard resObj={resData[2]} />
            <RestaurantCard resObj={resData[3]} />
            <RestaurantCard resObj={resData[4]} />
            <RestaurantCard resObj={resData[5]} />
            <RestaurantCard resObj={resData[6]} />
            <RestaurantCard resObj={resData[7]} /> */}
            {resData.map((res) => (
              <RestaurantCard key={res.card.card.info.id} resObj={res} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
