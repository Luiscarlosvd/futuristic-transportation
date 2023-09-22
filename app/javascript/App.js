import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./routes/Home";
import Vehicles from "./routes/Vehicles";
import Details from "./routes/Details";
import Reservations from "./routes/Reservations";
import NewReserve from "./routes/NewReserve";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import NewVehicle from "./routes/NewVehicle"
import DeleteVehicle from "./routes/DeleteVehicle"

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
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="vehicles/new" element={<NewVehicle />} />
          <Route path="vehicles/delete" element={<DeleteVehicle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
