import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const SocialLogin = () => {
   const { loginWithGoogle, loading } = useContext(AuthContext);
   const handleGoogleLogin = () => {
      /* google login */
      loginWithGoogle()
         .then((result) => {
            const googleUser = result.user;
            const user = {
               profilePic: googleUser?.displayImage,
               name: googleUser?.displayName,
               email: googleUser?.email,
               role: "Job Seeker",
            };
         })
         .catch((err) => console.log(err));
   };
   return (
      <div>
         <div className="flex gap-4 items-center mb-4">
            <div className="h-[2px] w-full bg-blue-400 " /> OR{" "}
            <div className="h-[2px] w-full bg-blue-400" />
         </div>
         <p className="text-center mb-2">Login With</p>
         <button
            onClick={handleGoogleLogin}
            className="w-full rounded-md px-6 py-3 text-md bg-blue-300 shadow-md hover:drop-shadow-lg cursor-pointer flex justify-center items-center gap-2"
         >
            <span>
               <FaGoogle />
            </span>{" "}
            Google
         </button>
      </div>
   );
};

export default SocialLogin;
