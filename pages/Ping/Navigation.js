import React from "react";

const Navigation = ({ onFilterChange, onSortUsers, onResetUsers, activeFilter }) => {
  return (
    <div className="navigation">
      <ul id="chat-options">
        <li>
          {/* “New” button calls onFilterChange(“new”) */}
          <button onClick={() => onFilterChange("new")}>New</button>
        </li>
        <li>
          <button onClick={() => onFilterChange("current")}>Current</button>
        </li>
        <li>
          <button onClick={() => onFilterChange("archived")}>Archived</button>
        </li>
        <li>
          <button onClick={onSortUsers}>Sort</button>
        </li>
        <li>
          <button onClick={onResetUsers}>Reset</button>
        </li>
      </ul>

      <h3>Users</h3>
      <ul id="chat-preference">
        {/* 
          Display the currently active filter in some visually distinct way, if you want. 
          E.g. add “active” class if this filter is the same as the user’s selection 
        */}
        <li
          className={`new-users ${activeFilter === "new" ? "active" : ""}`}
          onClick={() => onFilterChange("new")}
        >
          New
        </li>
        <li
          className={`current-user ${activeFilter === "current" ? "active" : ""}`}
          onClick={() => onFilterChange("current")}
        >
          Current
        </li>
        <li
          className={`archive-user ${activeFilter === "archived" ? "active" : ""}`}
          onClick={() => onFilterChange("archived")}
        >
          Archive
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
