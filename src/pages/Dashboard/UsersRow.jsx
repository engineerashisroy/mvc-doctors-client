import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://mvc-doctors-server.vercel.app/api/v1/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make and Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success(`Successfully made an admin`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <>
            <button
              onClick={makeAdmin}
              className="btn bg-slate-600 text-white hover:bg-green-500 hover:text-black border-none"
            >
              Make Admin
            </button>
          </>
        ) : (
          <>
            <button className="btn bg-yellow-300 text-black hover:bg-secondary hover:text-black border-none">
              Already Admin
            </button>
          </>
        )}
      </td>
      <td>
        <button className="btn bg-slate-600 text-white hover:bg-green-500 hover:text-black border-none">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UsersRow;
