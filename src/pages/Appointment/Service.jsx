import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-2xl flex justify-center text-secondary">
          {name}
        </h2>
        <p className="py-2">
          {slots.length > 0 ? (
            <>
              <span>{slots[0]}</span>
            </>
          ) : (
            <>
              <span className="text-red-500">No Slot Available</span>
            </>
          )}
        </p>
        <p className="py-2">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>

        <div className="card-actions justify-center">
          {/* The button to open modal */}
          <label
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            className="btn btn-secondary uppercase cursor-pointer text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
