import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Add these imports
import login from "../../assets/LottiAnimation/login.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../main";
import Swal from "sweetalert2";
import Playpulsebutton from "../../Atoms/Playpulsebutton";
import Playpulsenameplate from "../../Atoms/Playpulsenameplate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
// import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const navigate=useNavigate();
    // const location=useLocation();
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    loginUser(email, password)
      .then(() => {
        toast.success("Login Successful — Great to see you again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/');

      })
      .catch((error) => {
        toast.error(`Error Occurred: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleLoginWithGmail = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Login Successful — Great to see you again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/');

      })
      .catch((error) => {
        toast.error(`Error Occurred: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-base-300 via-base-100 to-base-300 flex items-center justify-center px-4 m-4 ">
      <title>PlayPulse | Login</title>
      <div className="bg-base-300 shadow-xl rounded-2xl lg:w-4/5 lg:flex justify-center items-center">
        <div className="w-full lg:w-2/5 h-[500px] flex justify-center items-center p-10">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="p-8 space-y-6">
          {/* Logo / Title */}
          <h2 className="text-3xl font-extrabold text-center text-neutral">
            Welcome to <Playpulsenameplate></Playpulsenameplate>
          </h2>
          <p className="text-center text-neutral text-sm">
            Please sign in to continue
          </p>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
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

            {/* Submit Button */}
            <button type="submit" className="w-full">
              <Playpulsebutton>Sign In</Playpulsebutton>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleLoginWithGmail}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3  bg-base-200 rounded-xl shadow-sm 
             hover:bg-base-100 transition duration-300 ease-in-out text-neutral font-medium"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>

          {/* Footer */}
          <div className="text-center text-sm text-neutral">
            Don’t have an account?{" "}
            <a href="/register" className="text-secondary hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
