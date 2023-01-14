import Link from "next/link";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const Index = () => {
   const { user, loading, loginAUser } = useContext(AuthContext);
   const [loginError, setLoginError] = useState("");
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   /* handle login */
   const handleLogin = (data) => {
      console.log(data);
      loginAUser(data.email, data.password)
         .then((result) => {
            console.log(result);
            reset();
         })
         .catch((err) => {
            const error = err.code.slice(5);

            if (error === "user-not-found") {
               const errMsg = "User Not Found";
               setLoginError(errMsg);
            }
            if (error === "wrong-password") {
               const errMsg = "Your password is incorrect";
               setLoginError(errMsg);
            }
         });
   };
   return (
      <section
         className="bg-cover bg-no-repeat bg-center min-h-screen flex justify-center lg:justify-end items-center lg:pr-14"
         style={{ backgroundImage: `url('https://i.ibb.co/LNjjvcL/loginbg.jpg')` }}
      >
         <div className="w-[85%] md:w-[50%] xl:w-[40%] p-7 bg-white lg:bg-transparent bg-opacity-80 border border-gray-400 lg:border-none">
            <h1 className="text-xl md:2xl lg:text-3xl mb-7 text-center font-extrabold">
               Welcome to Your Professional Account
            </h1>
            <form onSubmit={handleSubmit(handleLogin)} className="">
               {/* email */}
               <div className="flex flex-col justify-start gap-1 mb-3">
                  <label htmlFor="email" className={errors?.email && "text-red-400"}>
                     Email <span className="text-red-400">*</span>
                  </label>
                  <input
                     type="text"
                     name="email"
                     placeholder="user@example.com"
                     className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${errors?.email && "border-red-400"
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
               <div className="flex flex-col justify-start gap-1 mb-3">
                  <label htmlFor="password" className={errors?.password && "text-red-400"}>
                     Password <span className="text-red-400">*</span>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="************"
                     className={`border-2 p-3 rounded-md text-md bg-transparent border-blue-300 ${errors?.password && "border-red-400"
                        }`}
                     {...register("password", {
                        required: "Valid password is required",
                     })}
                  />
                  <p className="text-red-500">{errors.password?.message}</p>
               </div>

               {loginError && (
                  <p className="text-red-500 font-bold text-center mb-2">{loginError}</p>
               )}
               <div className="w-full flex justify-center mt-5">
                  <input
                     type="submit"
                     className="w-full rounded-md px-6 py-3 text-md bg-blue-300 shadow-md hover:drop-shadow-lg cursor-pointer"
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
            <SocialLogin />
         </div>
      </section>
   );
};

export default Index;
