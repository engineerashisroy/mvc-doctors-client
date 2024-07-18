import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://mvc-doctors-server.vercel.app/api/v1/admin/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminLoading(false);
        // console.log(data?.admin?.role);
        // console.log(data.admin);
      });
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
