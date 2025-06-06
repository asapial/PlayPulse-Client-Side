import React, { useContext, useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaImage,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa"; // Add FaEye, FaEyeSlash
import Lottie from "lottie-react";
import registerAnim from "../../assets/LottiAnimation/registration.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../main";

import Swal from "sweetalert2";
import Playpulsebutton from "../../Atoms/Playpulsebutton";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser,loginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    createUser(email, password, name, photoURL)
      .then(() => {
        // Registration successful, show success message or redirect
        Swal.fire({
          title: "Success",
          text: "Registration successful!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

    const handleRegisterWithGmail=()=>{
      loginWithGoogle()
      .then(res=>{
                toast.success("Register successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      })
      .catch((error)=>{
          toast.error(`Error! ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      })
  
    }

  return (
    <section className="min-h-screen bg-gradient-to-br from-base-300 via-base-100 to-base-300 flex items-center justify-center px-4">
    <title>PlayPulse | Register</title>
      <div className="bg-base-300 shadow-xl rounded-2xl w-full md:w-4/5  lg:flex justify-center items-center">
        {/* Lottie Animation */}
        <div className="w-full lg:w-2/5 h-[500px] flex justify-center items-center p-10">
          <Lottie animationData={registerAnim} loop={true} />
        </div>

        {/* Registration Form */}
        <div className="p-8 space-y-6 w-full lg:w-3/5">
          <h2 className="text-3xl font-extrabold text-center text-neutral">
            Join{" "}
            <span className="text-primary">
              Career<span className=" text-secondary">Sphere</span>
            </span>
          </h2>
          <p className="text-center text-neutral text-sm">
            Create an account to get started
          </p>

          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Profile Photo Link */}
            <div className="relative">
              <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                name="photoURL"
                placeholder="Profile Photo URL"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Submit Button */}
            <Playpulsebutton>Register</Playpulsebutton>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
          onClick={handleRegisterWithGmail}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3  bg-base-200 rounded-xl shadow-sm 
                         hover:bg-base-100 transition duration-300 ease-in-out text-neutral font-medium"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
          {/* Footer */}
          <div className="text-center text-sm text-neutral">
            Already have an account?{" "}
            <a href="/login" className="text-secondary hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
