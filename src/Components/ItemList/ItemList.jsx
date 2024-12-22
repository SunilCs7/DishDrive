import React from "react";
import "./ItemList.css";
import { CDN_URL } from "../../utils/Contrants";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.card.info.id} className="item-card">
          <div className="item-image">
            <img
              src={`${CDN_URL}${item?.card?.info?.imageId}`}
              alt={item.card.info.name}
            />

            <div className="add-btn-container">
              <button className="add-btn">Add +</button>
            </div>
          </div>

          <div className="item-details">
            <h3 className="item-title">{item.card.info.name}</h3>
            <p className="item-price">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="item-description">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
