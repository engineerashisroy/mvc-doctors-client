import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import ExceptionalDetails from "./ExceptionalDetails";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";
import HomeContact from "./HomeContact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sintheya Clinic | Home</title>
      </Helmet>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <ExceptionalDetails></ExceptionalDetails>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
