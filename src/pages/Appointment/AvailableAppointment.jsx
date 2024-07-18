import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, "PP");
  const {
    isLoading,
    error,
    refetch,
    data: services,
  } = useQuery({
    queryKey: ["available", formatedDate],
    queryFn: () =>
      fetch(
        `https://mvc-doctors-server.vercel.app/api/v1/available?date=${formatedDate}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  // useEffect(() => {
  //   //all slot api https://mvc-doctors-server.vercel.app/api/v1/service
  //   //available slot api
  //   fetch(`https://mvc-doctors-server.vercel.app/api/v1/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, [formatedDate]);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-primary text-3xl">
          Available Appointment on{" "}
          <span className="text-green-500 font-bold">
            {format(date, "PP")}.
          </span>
        </h2>
        <p className="text-2xl">Please Select a Service</p>
      </div>
      <div className="container mx-auto px-3 py-4">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></Service>
          ))}
        </div>
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
