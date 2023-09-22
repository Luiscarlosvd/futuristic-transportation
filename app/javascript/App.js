import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./routes/Home";
import Vehicles from "./routes/Vehicles";
import Details from "./routes/Details";
import Reservations from "./routes/Reservations";
import NewReserve from "./routes/NewReserve";
// import Vehicle from "./routes/Vehicle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="details/id">
            <Route index element={<Details />}/>
            <Route path="reserve" element={<NewReserve />}/>
          </Route>
          <Route path="reserve" element={<NewReserve />}/>
          <Route path="my-reservations" element={<Reservations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
