import React from "react";
import doctors from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section style={{ backgroundImage: `url(${appointment})` }}>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:space-x-10 px-2">
        <div className="w-full md:w-1/2 hidden md:flex justify-end md:pr-10 mb-10 md:mb-0">
          <img src={doctors} alt="Doctors" className="-mt-24 w-96" />
        </div>
        <div className="w-full md:w-1/2  md:pl-10 pt-3">
          <h2 className="text-primary text-4xl">Appointment</h2>
          <h2 className="text-white py-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </h2>
          <PrimaryButton>Get Started!</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
