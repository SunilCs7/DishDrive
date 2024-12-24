import React from "react";
import "./RestaurantCategory.css";
import ItemList from "../ItemList/ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  // Controlled Components controling by its parents components RestaurantsMenu and lifting satte up
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="category-container">
      <div className="category-header" onClick={handleClick}>
        <span className="category-title">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>{showItems === true ? "⬆️" : "⬇️"}</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
