import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <InfoCard
        bgClass="bg-gradient-to-r from-primary to-secondary"
        cardTitle="Opening Hours"
        img={marker}
      ></InfoCard>
      <InfoCard
        bgClass="bg-accent"
        cardTitle="Visit Our Location"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgClass="bg-gradient-to-r from-primary to-secondary"
        cardTitle="Contact Us Now!"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
