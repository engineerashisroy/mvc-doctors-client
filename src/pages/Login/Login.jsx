import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { Helmet } from "react-helmet";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);
  //declear error message
  let signInError;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      // console.log(token);
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    signInError = <p>{error?.message || gError?.message}</p>;
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <Helmet>
        <title>Sintheya Clinic | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-[80vh]">
        <div className="hero-content w-full mx-auto flex-col">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: "Pasword is required" })}
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-red-600 px-4">{signInError}</p>
            <p className="px-5">
              New to Doctors Portals
              <span className="text-primary px-2 hover:text-secondary">
                <Link to="/signup">Create New Account!</Link>
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

export default Login;
