import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import bgImg from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero bg-base-200 min-h-[80vh] sm:min-h-screen mx-auto">
        <div className="hero-content flex flex-col md:flex-row lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
      {/* <div>
        <p>You picked {format(date, "PP")}.</p>
      </div> */}
    </div>
  );
};

export default AppointmentBanner;
