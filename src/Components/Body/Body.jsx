import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../CustomHook/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Custom hook to check online status
  const onlineStatus = useOnlineStatus(); // Ensures hook is used unconditionally

  // Load restaurant data on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/data");
    const json = await data.json();
    setTimeout(() => {
      // Your code to execute after the delay

      setListOfRestaurants(json?.cards || []);
      setFilteredRestuarant(json?.cards || []);
    }, 2000); // 2-second delay
  };

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const filtered = listOfRestaurants.filter((restaurant) =>
              restaurant?.card?.card?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestuarant(filtered);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter-res-data">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4.7
            );
            setFilteredRestuarant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <h2 className="section-title">Top Restaurants</h2>
        <div className="restaurant-list">
          {filteredRestuarant.map((res) => (
            <Link
              key={res.card.card.info.id}
              to={"/restuarant/" + res.card.card.info.id}
            >
              <RestaurantCard resObj={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
