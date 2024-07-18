import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formatedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      patient: user.email,
      patientName: user.displayName,
      phone: phone,
      slot: slot,
    };

    fetch("http://localhost:3000/api/v1/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.success);
        // toast(`${name} Service Added Successfully !`);
        if (!data?.success) {
          console.log(data);
          toast.error(`${name} Already have an booking !`);
        } else {
          toast(`${name} Service Added Successfully !`);
          console.log(data);
        }
        refetch();
        setTreatment(null);
      });

    // console.log(slot, _id, name, date, patientname, email, phone);
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box p-0 m-0 ">
          <div className="flex justify-between items-center  ">
            <h3 className="text-2xl font-bold pl-5">Booking for {name}!</h3>
            <div className="modal-action pr-5">
              <label htmlFor="booking-modal" className="btn  btn-primary">
                X
              </label>
            </div>
          </div>
          <form onSubmit={handleBooking} className="card-body w-full">
            <div className="form-control">
              <input
                type="text"
                value={format(date, "PP")}
                className="input input-bordered"
                name="date"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <select name="slot" className="select select-bordered w-full">
                {slots?.map((slot, index) => (
                  <option name="slot" key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                disabled
                value={user?.displayName}
                name="patientname"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                disabled
                value={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="submit"
                value="Submit"
                className="input input-bordered cursor-pointer bg-secondary border-white text-2xl"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
