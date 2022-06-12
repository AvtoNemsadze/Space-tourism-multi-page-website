import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/Navbar";
import Home from "./pages/Home";


import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}