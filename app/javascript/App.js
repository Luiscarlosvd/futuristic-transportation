import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./routes/Home";
import Vehicles from "./routes/Vehicles";
import Details from "./routes/Details";
import Reservations from "./routes/Reservations";
// import Vehicle from "./routes/Vehicle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="details" element={<Details />} />
          <Route path="my-reservations" element={<Reservations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
