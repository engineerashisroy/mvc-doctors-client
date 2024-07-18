import React from "react";
import contactImag from "../../assets/images/appointment.png";
const HomeContact = () => {
  return (
    <div style={{ backgroundImage: `url(${contactImag})` }} className="py-10">
      <div className=" text-center  ">
        <h2 className="text-primary text-2xl">Contact Us</h2>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className=" w-full flex justify-center">
        <div className="w-1/4"></div>
        <div className="w-1/2">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-2xl">
                  Enter Your Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-2xl">
                  Enter Your Subject
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-2xl">
                  Enter Your Message
                </span>
              </label>
              <textarea
                id="textarea"
                name="textarea"
                className="input input-bordered"
                placeholder="Enter Your Message!"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className="form-control  mx-auto  w-1/2 mt-6 ">
              <button className="btn  btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default HomeContact;
