import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";
import { Helmet } from "react-helmet";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Helmet>
        <title>Sintheya Clinic | Appointment</title>
      </Helmet>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
