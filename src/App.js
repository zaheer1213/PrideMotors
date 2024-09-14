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
import AdminProtectedRoute from "./components/AdminProtectedRoute/AdminProtectedRoute";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Carsforbuy from "./components/Admin/Carsforbuy/Carsforbuy";
import Enquiries from "./components/Admin/Enquiries/Enquiries";
import TestDrive from "./components/Admin/TestDrive/TestDrive";
import Reviews from "./components/Admin/Reviews/Reviews";
import Sellingrequest from "./components/Admin/Sellingrequest/Sellingrequest";
import ConatctUs from "./components/Admin/ContactUs/ConatctUs";
import AddReviews from "./components/Admin/Reviews/AddReviews";
import AdminBlogs from "./components/Admin/Blogs/Blogs";
import Addblogs from "./components/Admin/Blogs/Addblogs";
import GetBlogsById from "./components/Blogs/GetBlogsById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carinformation" element={<Information />} />
        <Route path="/allcarsdetils" element={<Cardetils />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/particularblog" element={<GetBlogsById />} />
        <Route path="/addcar" element={<CustomerCar />} />
        <Route path="/bookAppointment" element={<BookAppointment />} />

        {/* Protected admin routes */}
        <Route element={<AdminLayout />}>
          <Route
            path="/admin-allusers"
            element={
              <AdminProtectedRoute>
                <AllUsers />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/vehicleinformation"
            element={
              <AdminProtectedRoute>
                <VehicleInformation />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-allselingcars"
            element={
              <AdminProtectedRoute>
                <Carsforsell />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-allCars"
            element={
              <AdminProtectedRoute>
                <AllCars />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-buyingcars"
            element={
              <AdminProtectedRoute>
                <Carsforbuy />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-enquiries"
            element={
              <AdminProtectedRoute>
                <Enquiries />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-testDrive"
            element={
              <AdminProtectedRoute>
                <TestDrive />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-reviews"
            element={
              <AdminProtectedRoute>
                <Reviews />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-sellingrequest"
            element={
              <AdminProtectedRoute>
                <Sellingrequest />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-conatctUs"
            element={
              <AdminProtectedRoute>
                <ConatctUs />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-review"
            element={
              <AdminProtectedRoute>
                <AddReviews />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-blogs"
            element={
              <AdminProtectedRoute>
                <AdminBlogs />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/admin-addblogs"
            element={
              <AdminProtectedRoute>
                <Addblogs />
              </AdminProtectedRoute>
            }
          />
        </Route>

        {/* Route for unauthorized access */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
