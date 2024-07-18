import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pl-9 flex flex-col sm:w-4/5 ">
        {/* Page content here */}
        <h2>Dashboard </h2>
        <Outlet />
      </div>
      <div className="drawer-side pt-12 md:pt-2 sm:w-1/5">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu   min-h-full bg-slate-500 text-xl  text-black p-4">
          {/* Sidebar content here */}
          <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary  ">
            <Link to="/dashboard">My Appointment</Link>
          </li>
          <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary ">
            <Link to="/dashboard/myreviews">My Reviews</Link>
          </li>
          <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary ">
            <Link to="/dashboard/myhistory">My History</Link>
          </li>

          {/* <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary ">
            <Link to="/dashboard/users">All Users</Link>
          </li> */}

          {admin && (
            <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary ">
              <Link to="/dashboard/users">All a Users</Link>
            </li>
          )}
          {admin && (
            <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary ">
              <Link to="/dashboard/adddoctor">Add Doctors Details</Link>
            </li>
          )}
          {admin && (
            <li className="bg-gray-300 border-none my-2 rounded-md hover:bg-primary ">
              <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
