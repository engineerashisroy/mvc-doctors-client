import React, { useEffect, useState } from "react";
import DoctorsRow from "./DoctorsRow";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const ManageDoctors = () => {
  const {
    isLoading,
    refetch,
    data: doctors,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch("http://localhost:3000/api/v1/doctor", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  //   const [doctors, setDoctors] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:3000/api/v1/doctor", {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setDoctors(data);
  //         // console.log(data);
  //       });
  //   }, []);
  return (
    <div>
      <h2>Manage Doctors :{doctors.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No of Doctors</th>
                <th>Doctor Image</th>
                <th>Name</th>
                <th>Speciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, index) => (
                <DoctorsRow
                  key={index}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                ></DoctorsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
