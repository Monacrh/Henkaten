import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
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
    navigate("/createpassword");
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
          Forgot Password
        </h2>

        <form className="w-3/4" onSubmit={handleForgotPassword}>
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Rename `setEmail` to `setUsername` if you update the state
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer w-[260px] text-white py-2 rounded-3xl font-semibold hover:bg-[#0f6b87] transition"
              style={{ backgroundColor: "#E05F14" }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
