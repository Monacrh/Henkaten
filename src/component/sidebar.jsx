import { useState } from "react";
import {
  FaChevronDown,
  FaHome,
  FaCalendarAlt,
  FaAngleDoubleRight,
  FaTruck,
  FaBoxes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [henkatenOpen, setHenkatenOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-white to-gray-50 text-[#006F35] border-r-4 border-[#006F35] shadow-lg">
      {/* Logo Section */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <img
            src="/logo-sugity-bottom-text.png"
            alt="HENKATEN Logo"
            className="h-20 w-auto mx-auto"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="space-y-3 px-4">
        {/* Dashboard */}
        <li>
          <button
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer w-full flex items-center gap-3 text-white bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] hover:from-[#d44f10] hover:to-[#e55620] transition-all duration-300 py-3 px-4 font-semibold rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl"
            style={{ fontFamily: "Roboto" }}
          >
            <FaHome className="text-lg" />
            Dashboard
          </button>
        </li>

        {/* Henkaten */}
        <li>
          <button
            onClick={() => setHenkatenOpen(!henkatenOpen)}
            className="cursor-pointer w-full flex items-center justify-between bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] text-white hover:from-[#d44f10] hover:to-[#e55620] transition-all duration-300 py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl"
          >
            <div
              className="flex items-center gap-3 font-semibold"
              style={{ fontFamily: "Roboto" }}
            >
              <FaCalendarAlt className="text-lg" />
              Henkaten
            </div>
            <div
              className={`transform transition-transform duration-300 ${henkatenOpen ? "rotate-180" : ""}`}
            >
              <FaChevronDown size={14} />
            </div>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${henkatenOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <ul className="space-y-1 bg-gradient-to-r from-[#FDE5DC] to-[#FFE8E0] text-sm text-[#966C6C] rounded-xl mt-2 shadow-inner">
              <li>
                <button className="hover:bg-gradient-to-r hover:from-[#FFF2EC] hover:to-[#FFF5F0]  duration-300 w-full transform ">
                  <button
                    onClick={() => navigate("/deliverydash")}
                    className="cursor-pointer w-full flex items-center gap-3 text-left  py-3 px-4 rounded-t-xl transition-all transform hover:translate-x-2"
                  >
                    <FaAngleDoubleRight />
                    <FaTruck className="text-sm" />
                    Delivery
                  </button>
                </button>
              </li>
              <li>
                <button className="hover:bg-gradient-to-r hover:from-[#FFF2EC] hover:to-[#FFF5F0]  duration-300 w-full transform ">
                  <button
                    onClick={() => navigate("/logisticdash")}
                    className="cursor-pointer w-full flex items-center gap-3 text-left  py-3 px-4 rounded-t-xl transition-all transform hover:translate-x-2"
                  >
                    <FaAngleDoubleRight />
                    <FaBoxes className="text-sm" />
                    Logistic
                  </button>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// import { useState } from "react";
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaHome,
//   FaCalendarAlt,
//   FaAngleDoubleRight
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [henkatenOpen, setHenkatenOpen] = useState(true);

//   return (
//     <div className="w-64 min-h-screen bg-white text-[#006F35] border-r-4 border-[#006F35]">
//       <img
//         src="/logo-sugity-bottom-text.png"
//         alt="HENKATEN Logo"
//          className="h-30 w-auto px-4 py-4"
//       />

//       <ul className="space-y-4">
//         {/* Dashboard */}
//         <li>
//           <button
//           className="w-full flex items-center gap-2 text-white bg-[#E05F14] hover:bg-[#d44f10] transition py-2 px-4 font-semibold "
//           style={{ fontFamily: 'Roboto' }}
//           >
//             <FaHome />
//             Dashboard
//           </button>
//         </li>

//         {/* Henkaten */}
//         <li>
//           <button
//             onClick={() => setHenkatenOpen(!henkatenOpen)}
//             className="w-full flex items-center justify-between bg-[#E05F14] text-white hover:bg-[#d44f10] transition py-2 px-4"
//           >
//             <div className="flex items-center gap-2 font-semibold "
//             style={{ fontFamily: 'Roboto' }}
//             >
//               <FaCalendarAlt />
//               Henkaten
//             </div>
//             {henkatenOpen ? <FaChevronDown size={14} /> : <FaChevronUp size={14} />}
//           </button>

//           {henkatenOpen && (
//             <ul className="space-y-1 bg-[#FDE5DC] text-sm text-[#966C6C]">
//               <li>
//                 <button className="w-full flex items-center gap-2 text-left hover:bg-[#FFF2EC] transition py-2 px-4">
//                   <FaAngleDoubleRight />
//                   Delivery
//                 </button>
//               </li>
//               <li>
//                 <button className="w-full flex items-center gap-2 text-left hover:bg-[#FFF2EC] transition py-2 px-4">
//                   <FaAngleDoubleRight />
//                   Logistic
//                 </button>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
