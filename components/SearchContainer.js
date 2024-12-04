// src/components/SearchContainer.js
import React from "react";
import "./SearchContainer.css";
import micImage from '../assets/mic.svg';

const SearchContainer = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <button className="mic-button">
          <img src={micImage} alt="mic" />
        </button>
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-button">
          <img
            src="https://img.icons8.com/ios-glyphs/20/search.png"
            alt="Search"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
