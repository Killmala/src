// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css"; // Import your CSS file

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
