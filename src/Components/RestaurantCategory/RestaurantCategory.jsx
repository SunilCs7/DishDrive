import React, { useState } from "react";
import "./RestaurantCategory.css";
import ItemList from "../ItemList/ItemList";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-container">
      <div className="category-header" onClick={handleClick}>
        <span className="category-title">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>{isOpen === true ? "⬆️" : "⬇️"}</span>
      </div>
      {isOpen && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
