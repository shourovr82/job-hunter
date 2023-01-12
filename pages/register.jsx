import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

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
      <div className="w-[85%] md:w-[50%] xl:w-[30%] mx-auto border border-primary rounded-md p-7 my-16 bg-white shadow-md">
         <h1 className="text-4xl mb-6 text-center font-bold">Register</h1>
         <form onSubmit={handleSubmit(handleRegister)} className="">
            {/* First Name */}
            <div className="form-control flex flex-col justify-start gap-1 mb-3">
               <label htmlFor="firstName" className={errors?.firstName && "text-red-400"}>
                  First Name <span className="text-red-400">*</span>
               </label>
               <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className={`border-2 p-3 rounded-md text-md ${
                     errors?.firstName && "border-red-400"
                  }`}
                  {...register("firstName", { required: "First Name is required" })}
               />
               <p className="text-red-500">{errors.firstName?.message}</p>
            </div>

            {/* Last Name */}
            <div className="form-control flex flex-col justify-start gap-1 mb-3">
               <label htmlFor="lastName" className={errors?.lastName && "text-red-400"}>
                  Last Name <span className="text-red-400">*</span>
               </label>
               <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className={`border-2 p-3 rounded-md text-md ${
                     errors?.lastName && "border-red-400"
                  }`}
                  {...register("lastName", { required: "Last Name is required" })}
               />
               <p className="text-red-500">{errors.lastName?.message}</p>
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
                  className={`border-2 p-3 rounded-md text-md ${errors?.email && "border-red-400"}`}
                  {...register("email", {
                     required: "Valid email is required",
                     pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email must be Valid",
                     },
                  })}
               />
               <p className="text-red-500">{errors.email?.message}</p>
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
                  className={`border-2 p-3 rounded-md text-md ${
                     errors?.password && "border-red-400"
                  }`}
                  {...register("password", { required: "Valid password is required" })}
               />
               <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <div className="w-full flex justify-center mt-5">
               <input
                  type="submit"
                  className="border rounded-md px-6 py-3 text-md bg-white shadow-md hover:drop-shadow-lg cursor-pointer"
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
      </div>
   );
};

export default Register;
