import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaCalendarAlt,
  FaAngleDoubleRight
} from "react-icons/fa";

const Sidebar = () => {
  const [henkatenOpen, setHenkatenOpen] = useState(true);

  return (
    <div className="w-64 min-h-screen bg-white text-[#006F35] border-r-4 border-[#006F35]">
      <img
        src="/logo-sugity-bottom-text.png"
        alt="HENKATEN Logo"
         className="h-30 w-auto px-4 py-4"
      />

      <ul className="space-y-4">
        {/* Dashboard */}
        <li>
          <button 
          className="w-full flex items-center gap-2 text-white bg-[#E05F14] hover:bg-[#d44f10] transition py-2 px-4 font-semibold "
          style={{ fontFamily: 'Roboto' }}
          >
            <FaHome />
            Dashboard
          </button>
        </li>

        {/* Henkaten */}
        <li>
          <button
            onClick={() => setHenkatenOpen(!henkatenOpen)}
            className="w-full flex items-center justify-between bg-[#E05F14] text-white hover:bg-[#d44f10] transition py-2 px-4"
          >
            <div className="flex items-center gap-2 font-semibold "
            style={{ fontFamily: 'Roboto' }}
            >
              <FaCalendarAlt />
              Henkaten
            </div>
            {henkatenOpen ? <FaChevronDown size={14} /> : <FaChevronUp size={14} />}
          </button>

          {henkatenOpen && (
            <ul className="space-y-1 bg-[#FDE5DC] text-sm text-[#966C6C]">
              <li>
                <button className="w-full flex items-center gap-2 text-left hover:bg-[#FFF2EC] transition py-2 px-4">
                  <FaAngleDoubleRight />
                  Delivery
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 text-left hover:bg-[#FFF2EC] transition py-2 px-4">
                  <FaAngleDoubleRight />
                  Logistic
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
