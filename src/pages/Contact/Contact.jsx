import React from "react";
import ContactDetails from "./ContactDetails";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Sintheya Clinic | Contact</title>
      </Helmet>
      <ContactDetails></ContactDetails>
    </div>
  );
};

export default Contact;
