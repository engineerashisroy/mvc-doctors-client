import React from "react";
import ReviewsHero from "./ReviewsHero";
import { Helmet } from "react-helmet";

const Reviews = () => {
  return (
    <div>
      <Helmet>
        <title>Sintheya Clinic | Reviews</title>
      </Helmet>
      <ReviewsHero></ReviewsHero>
    </div>
  );
};

export default Reviews;
