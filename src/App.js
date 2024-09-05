import "./App.css";
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Information from "./components/Information/Information";
import Cardetils from "./components/Cardetils/Cardetils";
import VehicleInformation from "./components/VehicleInformation/VehicleInformation";
import Verification from "./components/Verification/Verification";
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";
import AllUsers from "./components/Admin/AllUsers/AllUsers";
import Carsforsell from "./components/Admin/Sellingcars/Carsforsell";
import AllCars from "./components/Admin/AllCars/AllCars";
import Aboutus from "./components/Aboutus/Aboutus";
import ContactUs from "./components/ContactUs/ContactUs";
import Blogs from "./components/Blogs/Blogs";
import CustomerCar from "./components/CustomerCar/CustomerCar";

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
        <Route path="/verification" element={<Verification />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/addcar" element={<CustomerCar />} />

        {/* admin side pages */}
        <Route element={<AdminLayout />}>
          <Route path="/admin-allusers" element={<AllUsers />}></Route>
          <Route path="/admin-allselingcars" element={<Carsforsell />}></Route>
          <Route path="/admin-allCars" element={<AllCars />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
