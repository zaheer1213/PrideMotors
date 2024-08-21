import "./App.css";
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Information from "./components/Information/Information";
import Cardetils from "./components/Cardetils/Cardetils";
import VehicleInformation from "./components/VehicleInformation/VehicleInformation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carinformation" element={<Information />} />
        <Route path="/allcarsdetils" element={<Cardetils />} />
        <Route path="/vehicleinformation" element={<VehicleInformation />} />
      </Routes>
    </>
  );
}

export default App;
