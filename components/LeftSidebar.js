// src/components/LeftSidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftSidebar.css";

// Define your routes in an array for scalability
const routes = [
  { path: "/", name: "Index", end: true },
  { path: "/ping", name: "Ping" },
  { path: "/econ", name: "Econ" },
  { path: "/profile", name: "Profile" },
  { path: "/timeline", name: "Timeline" },
  { path: "/settings", name: "Settings" },
];

const LeftSidebar = () => {
  return (
    <nav className="left-sidebar" aria-label="Main Navigation">
      {routes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          end={route.end || false} // Ensures exact matching for root path
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default LeftSidebar;
