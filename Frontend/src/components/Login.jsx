import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {
    const {
        register, 
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div>
        <dialog id="my_modal_3" className="modal ">
            <div className="modal-box dark:bg-white dark:text-slate-900 ">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to='/' className="btn btn-sm border-none btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Login</h3>
                    {/* Email  */}
                    <div className=" mt-4 space-y-2 ">
                        <span>Email</span><br />
                        <input type="email"
                            {...register("email", { required: true })}
                            placeholder='Enter your email' className=' w-80 px-3 border rounded-md outline-none ' />
                            <br />
                        {errors.email && <span className=' text-sm text-red-500  '>This field is required</span>}
                    </div>
                    {/* Password  */}
                    <div className=" mt-4 space-y-2 ">
                        <span >Password</span><br />
                        <input type="password" 
                            {...register("password", { required: true })}
                            placeholder='Enter your password' className=' w-80 px-3 border rounded-md outline-none ' />
                            <br />
                        {errors.password && <span className=' text-sm text-red-500  '>This field is required</span>}
                    </div>
                    {/* Button  */}
                    <div className=" flex justify-around items-center mt-4 ">
                        <button type='submit' className=' hover:bg-pink-700 bg-pink-500 text-white px-3 py-1 rounded-md ' >Login</button>
                        <div className="">Not registered? <Link to="/signup" className='text-blue-600 underline' >Signup</Link> </div>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default Login