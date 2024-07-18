import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageStorageKey = "04b588f310a3ff9dd85827bf95da70a5";

  const onSubmit = async (data) => {
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    console.log("Sending formData to:", url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw new Error(
              `HTTP error! status: ${res.status}, message: ${error.error.message}`
            );
          });
        }
        return res.json();
      })
      .then((result) => {
        // console.log(result.data.url);
        const image = result.data.url;
        const doctor = {
          name: data.name,
          email: data.email,
          speciality: data.speciality,
          image: image,
        };
        // console.log(doctor);

        //send to data in mongodb database
        fetch("http://localhost:3000/api/v1/doctor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((insertData) => {
            console.log("insertData", insertData);
            toast.success("Doctors Added Successfully!");
            // if (success) {
            //   toast.success("Doctors Added Successfully!");
            //   reset();
            // } else {
            //   toast.error("Failed fo add!");
            //   reset();
            // }
          });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <h2>Add Doctors Details</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
          </div>
          <p className="text-red-600">
            {errors.name?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>
          <p className="text-red-600">
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select
              {...register("speciality", {
                required: "Speciality is required",
              })}
              name="speciality"
              aria-invalid={errors.speciality ? "true" : "false"}
              className="select select-primary  w-full"
            >
              <option value="Teeth Orthodontics">Teeth Orthodontics</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Teeth cleaning">Teeth cleaning</option>
              <option value="Cavity Protection">Cavity Protection</option>
              <option value="Pediatric Dental">Pediatric Dental</option>
              <option value="Oral Surgery">Oral Surgery</option>
            </select>
          </div>
          <p className="text-red-600">
            {errors.speciality && (
              <p role="alert">{errors.speciality.message}</p>
            )}
          </p>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              placeholder="Your Photo"
              className="input  input-bordered pt-2"
              {...register("photo", { required: true })}
              aria-invalid={errors.photo ? "true" : "false"}
            />
          </div>
          <p className="text-red-600">
            {errors.photo?.type === "required" && (
              <p role="alert">Photo is required</p>
            )}
          </p>
          <div className="form-control">
            <button className="btn btn-primary">Add A Doctors</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
