import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-text shimmer-title"></div>
            <div className="shimmer-text shimmer-subtitle"></div>
            <div className="shimmer-text shimmer-line"></div>
            <div className="shimmer-text shimmer-line"></div>
            <div className="shimmer-text shimmer-small"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
