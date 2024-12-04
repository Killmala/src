import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Ping from "./pages/Ping";
import Profile from "./pages/Profile";
import Econ from "./pages/Econ";
import Timeline from "./pages/Timeline";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="ping" element={<Ping />} />
         <Route path="econ" element={<Econ />} />
        <Route path="profile" element={<Profile />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
