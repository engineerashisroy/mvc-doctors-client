import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ index, doctor, refetch }) => {
  const { name, image, speciality, email } = doctor;

  const handleDelete = (email) => {
    fetch(`https://mvc-doctors-server.vercel.app/api/v1/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          toast.success(`${name} has been Deleted~`);
          refetch();
        } else {
          toast.error("Faile to delete");
          refetch();
        }
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>

      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn bg-slate-600 text-white hover:bg-green-500 hover:text-black border-none"
        >
          Remove Doctors
        </button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
