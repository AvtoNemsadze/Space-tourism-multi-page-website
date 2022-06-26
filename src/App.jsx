import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/Navbar";

// navbar
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

// crew
import Commander from './components/crew/Commander'
import Engineer from './components/crew/Engineer'
import Pilot from './components/crew/Pilot'
import Specialist from './components/crew/Specialist'

// tech
import Vehicle from './components/tech/Vehicle'
import Capsule from './components/tech/Capsule'
import Port from './components/tech/Port'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
       
          // tech but one page
          <Route path="technology" element={<Technology />} />

          // crew 
          <Route path="pilot" element={<Pilot />} />
          <Route path="commander" element={<Commander />} />
          <Route path="engineer" element={<Engineer />} />
          <Route path="specialist" element={<Specialist />} />
          
          // technology
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="capsule" element={<Capsule />} />
          <Route path="port" element={<Port />} />
      </Routes>
    </BrowserRouter>
  );
}