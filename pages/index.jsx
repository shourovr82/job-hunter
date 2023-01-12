import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const index = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   /* handle login */
   const handleLogin = (data) => {
      console.log(data);
      reset();
   };
   return (
      <section>
         <div className="w-[85%] md:w-[50%] xl:w-[30%] mx-auto border border-primary rounded-md p-7 my-16 bg-white shadow-md">
            <h1 className="text-4xl mb-6 text-center font-bold">Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="">
               {/* email */}
               <div className="form-control flex flex-col justify-start gap-1 mb-3">
                  <label htmlFor="email" className={errors?.email && "text-red-400"}>
                     Email <span className="text-red-400">*</span>
                  </label>
                  <input
                     type="text"
                     name="email"
                     placeholder="user@example.com"
                     className={`border-2 p-3 rounded-md text-md ${
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
                     value="Login"
                  />
               </div>
            </form>
            <p className="text-center my-3">
               New to this website?{" "}
               <Link href="/register" className="text-primary">
                  <span className="text-blue-500">Register</span>
               </Link>
            </p>
         </div>
      </section>
   );
};

export default index;
