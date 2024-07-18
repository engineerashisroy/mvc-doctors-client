import React from "react";

const Review = ({ review }) => {
  const { name, rating, img, address } = review;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            illo, molestias eos incidunt similique est veniam! Perferendis
            tenetur qui saepe!
          </p>
          <div className=" pt-2 card-actions justify-evenly items-center">
            <div>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={img} />
                </div>
              </div>
            </div>
            <div>
              <h2>{name}</h2>
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
