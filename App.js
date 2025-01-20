// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Ensure this path is correct
import Index from "./pages/Index/Index";
import Ping from "./pages/Ping/Ping";
import Profile from "./pages/Profile/Profile";
import Econ from "./pages/Econ/Econ";
import Timeline from "./pages/Timeline/Timeline";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound"; // Ensure this path is correct

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />{" "}
        {/* This corresponds to the "/" path */}
        <Route path="ping" element={<Ping />} />
        <Route path="econ" element={<Econ />} />
        <Route path="profile" element={<Profile />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="settings" element={<Settings />} />
        {/* Add more routes here as needed */}
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Route>
    </Routes>
  );
};

export default App;
