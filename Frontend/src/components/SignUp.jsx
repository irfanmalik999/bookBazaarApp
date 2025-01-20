import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from "react-hot-toast";
import Login from "./Login";

const SignUp = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  // const [openLogin, setOpenLogin] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);
  const onSubmit = async (data) =>{
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('SignUp Successfully!');
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error:" + err.response.data.message);
      }
    })
    console.log(data)
  };

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
                  {...register("fullname", { required: true })}
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 border rounded-md outline-none"
                />
                <br />
                {errors.fullname && (
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
                <div className="text-lg flex justify-center gap-3 ">
                  Have an account?{" "}
                  {/* <button
                    onClick={() =>
                      document.getElementById("login_modal").showModal()
                    } className="text-blue-600 underline" > Login
                  </button> */}
                    <div className="  ">
                      <a onClick={()=>
                          document.getElementById("my_modal_3").showModal()
                      } className="text-blue-600 underline cursor-pointer ">Login</a>
                      <Login/>
                    </div>
                </div>
              </div>
            </form>
            <Login/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
