import React, { useEffect, useState } from "react";
import "./RestuarantMenu.css";
import Shimmer from "../Shimmer/Shimmer";
import { MENU_API } from "../../utils/Contrants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + params.resid);
      const data = await res.json();
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching the menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">{name}</h1>
        <p className="menu-cuisines">{cuisines.join(", ")}</p>
      </div>
      {/* Categories Accordion */}
      <div className="menu-categories">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            // showItems={index === showIndex ? true : false}
            // setShowItems={() => setShowIndex(index)}
            showItems={index === showIndex}
            setShowItems={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestuarantMenu;
