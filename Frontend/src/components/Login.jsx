import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


const Login = () => {
    const {
        register, 
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =  async(data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
          }
          await axios.post("http://localhost:4001/user/login", userInfo)
          .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Loggedin Successfully!');
                document.getElementById("my_modal_3").close()
                setTimeout(()=>{
                    window.location.reload() 
                    localStorage.setItem("Users", JSON.stringify(res.data.user))
                }, 1000)
            }
          }).catch((err)=>{
            if(err.response){
              console.log(err)
              toast.error("Error:" + err.response.data.message);
              setTimeout(() => { }, 2000);
            }
          })
          console.log(data)
      }

  return (
    <div>
        <dialog id="my_modal_3" className="modal ">
            <div className="modal-box dark:bg-white dark:text-slate-900 ">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    {/* if there is a button in form, it will close the modal */} 
                    <h2 onClick={()=> document.getElementById("my_modal_3").close()} className=" absolute right-4 top-4 cursor-pointer ">✕</h2>
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