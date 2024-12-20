import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Body.css";
// import Loading from "../Loading/Loading";
import Shimmer from "../Shimmer/Shimmer";
// import resData from "../../utils/data";
import { Link } from "react-router";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // For search functionality,we need to sate variables
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // create own api/server by using this command--------------->>>>>>>>>>>>npx json-server --watch jsonData.json --port 4000

    const data = await fetch("http://localhost:4000/data");
    const json = await data.json();

    console.log(json);

    // loading dynamics data from swigy api

    setTimeout(() => {
      setListOfRestaurants(json?.cards);
      // after seach the restaurants functionality
      setFilteredRestuarant(json?.cards);
    }, 2000);
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            // Filter the restuarant cards and update the UI
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant?.card?.card?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestuarant(filteredRestaurants); // Update the filtered list
            }}
          >
            Search
          </button>
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
    </>
  );
};

export default Body;
