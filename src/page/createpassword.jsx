import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function CreatePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreatePassword = async (e) => {
    e.preventDefault(); // Supaya tidak reload halaman
    // try {
    //   const response = await axios.post("http://localhost:5000/api/auth/signin", {
    //     email,
    //     password,
    //   });

    //   const { token, user } = response.data;

    //   localStorage.setItem("token", token);

    //   localStorage.setItem("user", JSON.stringify(user));

    // } catch (err) {
    //   console.error(err.response?.data?.error || err.message);
    //   setError(err.response?.data?.error || "Something went wrong");
    // }
    navigate("/");
  };

  return (
    <div className="flex justify-center h-screen w-full bg-[#FFFFFF]">
      <div className="w-1/3 flex flex-col justify-center items-center bg-[#FFE3E3] p-10 shadow-lg">
        {/* <img
          src="logo.png"
          alt="pat-a-pet"
          className="absolute top-15 mid w-40 z-20"
        /> */}
        <h2
          className="text-2xl font-semibold mb-6"
          style={{ fontFamily: "Roboto" }}
        >
          Create Password
        </h2>

        <form className="w-3/4" onSubmit={handleCreatePassword}>
          <label className="block text-gray-700 mb-2">New Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-4 top-[20px] transform -translate-y-1/2 text-sm text-gray-600"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>

          <label className="block text-gray-700 mb-2">
            Confirm New Password
          </label>
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="cursor-pointer absolute right-4 top-[20px] transform -translate-y-1/2 text-sm text-gray-600"
            >
              {showConfirmPassword ? (
                <FiEye size={20} />
              ) : (
                <FiEyeOff size={20} />
              )}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer w-[260px] text-white py-2 rounded-3xl font-semibold hover:bg-[#0f6b87] transition"
              style={{ backgroundColor: "#E05F14" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
