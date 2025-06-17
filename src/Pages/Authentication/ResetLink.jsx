import {  useNavigate } from "react-router";
import { useContext } from "react";
import { FiMail } from "react-icons/fi";
import { SuccessToast } from "../../Utilities/ToastMaker";
import { AuthContext } from "../../main";

const ResetLink = () => {
  const navigate = useNavigate();
  const {resetEmail}=useContext(AuthContext);



  const handleReset = (e) => {
    e.preventDefault();
    const email=e.target.email.value;
    resetEmail(email).then(()=>{
        window.open('https://mail.google.com', '_blank');
        navigate("/login");
        SuccessToast("📬 Password reset link sent. Check your email!")
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-300 flex items-center justify-center px-4 custom-gradient">
        <title>Reset | PlayPulse</title>

      <div className="bg-base-100 shadow-xl rounded-3xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-accent-800">
          Forgot Password
        </h2>

        <form className="space-y-4" onSubmit={handleReset}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <FiMail className="text-lg" />
            Reset Password
          </button>
        </form>

        <p className="text-sm text-center text-accent-600">
          You'll be redirected to Gmail after clicking reset.
        </p>
      </div>
    </div>
  );
};

export default ResetLink;
