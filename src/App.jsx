import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Reviews from "./pages/Reviews/Reviews";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import Signup from "./pages/Signup/Signup";
import RequireAuth from "./auth/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReviews from "./pages/Dashboard/MyReviews";
import MyHistory from "./pages/Dashboard/MyHistory";
import Users from "./pages/Dashboard/Users";
import RequireAdmin from "./auth/RequireAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";

function App() {
  const location = useLocation();
  const noFooter = location.pathname.includes("dashboard");
  return (
    <>
      <Navbar></Navbar>
      <div className=" pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/appointment"
            element={
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyAppointment></MyAppointment>}></Route>
            <Route path="myreviews" element={<MyReviews></MyReviews>}></Route>
            <Route path="myhistory" element={<MyHistory></MyHistory>}></Route>
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users></Users>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="adddoctor"
              element={
                <RequireAdmin>
                  <AddDoctor></AddDoctor>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manage-doctors"
              element={
                <RequireAdmin>
                  <ManageDoctors></ManageDoctors>
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
      <div>{noFooter || <Footer></Footer>}</div>
    </>
  );
}

export default App;
