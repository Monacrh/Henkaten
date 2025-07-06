import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
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
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen w-full bg-[#FFFFFF]">
      {/* Left Section */}
      {/* <div className="w-1/2 relative flex justify-center items-center text-white px-10 bg-[#A0C878]">
        <img
          src="icon-bg.png"
          alt="Dogs"
          className="absolute bottom-0 left-0 w-full h-[250px] object-contain "
        />
        <div className="absolute inset-0"></div>

        <div className="relative z-10 max-w-md text-left">
          <h1
          style={{ fontFamily: "'Epilogue', sans-serif" }}
          className="text-white font-bold text-[80px] leading-[1.1]"
        >
          Welcome to <br /> Melanotect
        </h1>
          <hr className="border-white w-20 my-4" />
          <p className="text-lg">Fast and easy melanoma detection using advanced AI technology.</p>
        </div>
      </div> */}

      <div className="w-2/3 relative flex justify-center items-center text-white px-10 bg-[#FFFFFF]">
        {/* <img
          src="icon-bg.png"
          alt="Dogs"
          className="absolute bottom-0 left-0 w-full h-[250px] object-contain"
        />
        <div className="relative z-10 max-w-md text-left">
          <h1 style={{ fontFamily: "'Epilogue', sans-serif" }} className="text-white font-bold text-[50px] leading-[1.1]">
            Welcome back <br /> Pawrents
          </h1>
          <hr className="border-white w-20 my-4" />
          <p className="text-lg">Fast and easy melanoma detection using advanced AI technology.</p>
        </div> */}
      </div>


      {/* Right Section */}
      <div className="w-1/3 flex flex-col justify-center items-center bg-[#FFE3E3] p-10 shadow-lg">
       {/* <img
          src="logo.png"
          alt="pat-a-pet"
          className="absolute top-15 mid w-40 z-20"
        /> */}
        <h2
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: 'Roboto' }}
        >
            Welcome to <span style={{ color: '#006F35' }}>HENKATEN</span>
        </h2>


        <form className="w-3/4" onSubmit={handleLogin}>
         <label className="block text-gray-700 mb-2">Username</label>
            <input
            type="text"
            placeholder="Enter your username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} // Rename `setEmail` to `setUsername` if you update the state
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />


          <label className="block text-gray-700 mb-2">Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[20px] transform -translate-y-1/2 text-sm text-gray-600"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
            <label>
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <a
              href="#"
              className="hover:underline font-bold"
            //   style={{ color: "#A0C878" }}
            >
              Forgot Password?
            </a>
          </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-[260px] text-white py-2 rounded-3xl font-semibold hover:bg-[#0f6b87] transition"
                    style={{ backgroundColor: "#E05F14" }}
                >
                    Login
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}