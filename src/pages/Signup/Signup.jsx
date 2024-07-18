import React from "react";
import Loading from "../Shared/Loading";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //declear error message
  let signUpError;
  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }
  if (error || gError || updateError) {
    signUpError = (
      <p>{error?.message || gError?.message || updateError?.message}</p>
    );
  }
  if (token) {
    // console.log(token);
    // console.log(gUser || user);
    navigate("/login");
  }
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // console.log("update displayName");
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-[80vh]">
        <div className="hero-content w-full mx-auto flex-col">
          <h1 className="text-3xl font-bold">Sign Up!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {/* if need to comment out forget password  */}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <p className="text-red-600">
                {errors.password && (
                  <p role="alert">{errors.password.message}</p>
                )}
              </p>
              <div className="form-control">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-red-600 px-4">{signUpError}</p>
            <p className="px-5">
              Already have an account ?
              <span className="text-primary px-2 hover:text-secondary">
                <Link to="/login">Please Login!</Link>
              </span>
            </p>
            <div>
              <div className="divider divider-info px-3">OR</div>
              <div className="form-control px-3 m-3">
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn btn-primary"
                >
                  Continue With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
