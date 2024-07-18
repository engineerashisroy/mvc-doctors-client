import React from "react";
import AboutHero from "./AboutHero";
import AboutDetails from "./AboutDetails";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Sintheya Clinic | About</title>
      </Helmet>
      <AboutDetails></AboutDetails>
      <AboutHero></AboutHero>
    </div>
  );
};

export default About;
