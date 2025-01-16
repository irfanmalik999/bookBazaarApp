import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-white dark:text-slate-900">
        <div id="" className="w-[600px]">
          <div className="modal-box dark:bg-white dark:text-slate-900">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm border-none btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>

              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 border rounded-md outline-none"
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none"
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 border rounded-md outline-none"
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-around items-center mt-4">
                <button type="submit" className="hover:bg-pink-700 bg-pink-500 text-white px-3 py-1 rounded-md"> SignUp </button>
                <div className="text-lg">
                  Have an account?{" "}
                  <button
                    onClick={() =>
                      document.getElementById("login_modal").showModal()
                    } className="text-blue-600 underline" > Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
