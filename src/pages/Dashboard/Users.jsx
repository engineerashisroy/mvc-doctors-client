import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const Users = () => {
  //implement react query
  //useQuery documentation
  const {
    isLoading,
    refetch,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://mvc-doctors-server.vercel.app/api/v1/users", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>All users:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UsersRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
