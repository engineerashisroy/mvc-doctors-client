import React from "react";
import img1 from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ExceptionalDetails = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:space-x-10 px-2">
        <div className="w-full md:w-1/2  flex justify-center md:pr-10 mb-10 md:mb-0">
          <img src={img1} className="w-96" alt="Treatment" />
        </div>
        <div className="w-full md:w-1/2  md:pl-10">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="text-2xl py-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text.
          </p>
          <PrimaryButton>Get Started!</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDetails;
