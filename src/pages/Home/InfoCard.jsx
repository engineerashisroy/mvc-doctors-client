import React from "react";

function InfoCard({ img, cardTitle, bgClass }) {
  return (
    <div>
      <div className={`card lg:card-side  shadow-xl ${bgClass}`}>
        <figure className="px-3">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
