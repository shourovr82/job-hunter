import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin/SocialLogin";

const Register = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   /* handle Register */
   const handleRegister = (data, event) => {
      const form = event.target;
      console.log(data);
      form.reset();
   };
   return (
      <section
         className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center lg:justify-end items-center lg:pr-14"
         style={{ backgroundImage: `url('https://i.ibb.co/LNjjvcL/loginbg.jpg')` }}
      >
         <div className="w-[85%] md:w-[50%] xl:w-[40%] p-7 bg-white lg:bg-transparent bg-opacity-80 border border-gray-400 lg:border-none">
            <h1 className="text-xl md:2xl lg:text-3xl mb-6 text-center font-extrabold">
               Start Your Professional Journey Today
            </h1>
            <form onSubmit={handleSubmit(handleRegister)} className="">
               {/* Full Name */}
               <div className="flex gap-2">
                  {/* First Name */}
                  <div className="form-control w-full flex flex-col justify-start gap-1 mb-3">
                     <label htmlFor="firstName" className={errors?.firstName && "text-red-400"}>
                        First Name <span className="text-red-400">*</span>
                     </label>
                     <input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${
                           errors?.firstName && "border-red-400"
                        }`}
                        {...register("firstName", { required: "First Name is required" })}
                     />
                     <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                  </div>

                  {/* Last Name */}
                  <div className="form-control w-full flex flex-col justify-start gap-1 mb-3">
                     <label htmlFor="lastName" className={errors?.lastName && "text-red-400"}>
                        Last Name <span className="text-red-400">*</span>
                     </label>
                     <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${
                           errors?.lastName && "border-red-400"
                        }`}
                        {...register("lastName", { required: "Last Name is required" })}
                     />
                     <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                  </div>
               </div>

               {/* email */}
               <div className="form-control flex flex-col justify-start gap-1 mb-3">
                  <label htmlFor="email" className={errors?.email && "text-red-400"}>
                     Email <span className="text-red-400">*</span>
                  </label>
                  <input
                     type="text"
                     name="email"
                     placeholder="user@example.com"
                     className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${
                        errors?.email && "border-red-400"
                     }`}
                     {...register("email", {
                        required: "Valid email is required",
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Email must be Valid",
                        },
                     })}
                  />
                  <p className="text-red-500 text-sm">{errors.email?.message}</p>
               </div>

               {/* Password */}
               <div className="form-control flex flex-col justify-start gap-1 mb-3">
                  <label htmlFor="password" className={errors?.password && "text-red-400"}>
                     Password <span className="text-red-400">*</span>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="************"
                     className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${
                        errors?.password && "border-red-400"
                     }`}
                     {...register("password", { required: "Valid password is required" })}
                  />
                  <p className="text-red-500 text-sm">{errors.password?.message}</p>
               </div>

               {/* Account Type */}
               <div className="form-control flex flex-col justify-start gap-1 mb-3">
                  <label htmlFor="role" className={errors?.role && "text-red-400"}>
                     Role <span className="text-red-400">*</span>
                  </label>
                  <select
                     name="role"
                     className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${
                        errors?.role && "border-red-400"
                     }`}
                     {...register("role", { required: "Select a Role" })}
                  >
                     <option>Recruiter</option>
                     <option>Job Seeker</option>
                  </select>
                  <p className="text-red-500 text-sm">{errors.password?.message}</p>
               </div>

               <div className="w-full flex justify-center mt-5">
                  <input
                     type="submit"
                     className="w-full rounded-md px-6 py-3 text-md bg-blue-300 shadow-md hover:drop-shadow-lg cursor-pointer"
                     value="Register"
                  />
               </div>
            </form>
            <p className="text-center my-3">
               Already have an account?{" "}
               <Link href="/" className="text-primary">
                  <span className="text-blue-500">Login</span>
               </Link>
            </p>
            <SocialLogin />
         </div>
      </section>
   );
};

export default Register;
