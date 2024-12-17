import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
// import Loading from "../Loading/Loading";
import Shimmer from "../Shimmer/Shimmer";
import resData from "../../utils/data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=20.27060&lng=85.83340&str=popular%20dish&trackingId=0ad2e8eb-1af7-0c4f-450a-b45766d836ed&submitAction=ENTER&queryUniqueId=76cda06c-152e-50a5-3137-21d619a47b9c"
    );
    const json = await data.json();

    // console.log(json);

    // loading dynamics data from swigy api

    // setListOfRestaurants(json?.data?.card[1]?.data?.data?.cards);
  };

  // using loading sceen from cool user expreriemce while api load on ui

  // if (listOfRestaurants.length === 0) {
  //   return <Loading />;
  // }

  // using Shimmer Ui kind of face cards its is latest standard practices for loading before the u get api data

  if (listOfRestaurants.length === 0) {
    // this concept is known as conditional rendering
    return <Shimmer />;
  }

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
