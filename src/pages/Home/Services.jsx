import React, { useState } from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Flouride Treatment",
      description: "Treatment flouride Description",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "Treatment Cavity Filling Description",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "Treatment Whitening Description",
      img: whitening,
    },
  ];
  return (
    <div>
      <div className="text-center py-10">
        <h2 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h2>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 py-5  place-items-center">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
