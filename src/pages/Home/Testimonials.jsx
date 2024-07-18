import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      rating: "",
      img: people1,
      address: "Newyork",
    },
    {
      _id: 2,
      name: "Winson Herry",
      rating: "",
      img: people2,
      address: "Califolia",
    },
    {
      _id: 3,
      name: "Winson Herry",
      rating: "",
      img: people3,
      address: "Boston",
    },
  ];
  return (
    <div className="py-10">
      <div className="flex justify-between">
        <div>
          <div>
            <h2 className="text-2xl text-primary">Testimonials</h2>
            <h2 className="text-5xl text-black">What our Patients say!</h2>
          </div>
        </div>
        <div>
          <img src={quote} alt="quote" className="w-32" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 py-5  place-items-center ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
