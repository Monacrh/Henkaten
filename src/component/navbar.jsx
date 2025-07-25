import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ dashboardType = "delivery" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    const path = location.pathname;

    if (path.includes("skillmap")) {
      setActive("Skill Map");
    } else if (path.includes("absence")) {
      setActive("Absence");
    } else {
      setActive("Dashboard");
    }
  }, [location.pathname]);

  const navItems = [
    { id: "Dashboard", label: "DASHBOARD" },
    { id: "Skill Map", label: "SKILL MAP" },
    { id: "Absence", label: "ABSENCE" },
  ];

  const handleNavigation = (itemId) => {
    setActive(itemId);

    // Determine the base path based on dashboard type
    const basePath = dashboardType === "logistic" ? "/logistic" : "/delivery";

    // Map nav items to their corresponding routes
    const routeMap = {
      Dashboard: `${basePath}dash`,
      "Skill Map": `${basePath}skillmap`,
      Absence: `${basePath}absence`,
    };

    // Navigate to the appropriate route
    navigate(routeMap[itemId]);
  };

  return (
    <nav className="relative flex justify-center bg-white border-b-2 border-gray-200 px-8 py-4 shadow-sm">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-white to-orange-50/30"></div>

      <div className="relative flex space-x-12">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`
              relative px-6 py-3 text-base font-semibold tracking-wide
              transition-all duration-300 ease-in-out
              transform hover:scale-105 hover:-translate-y-0.5
              ${
                active === item.id
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-500"
              }
            `}
          >
            {/* Rest of your button JSX remains the same */}
            <div
              className={`
                absolute inset-0 rounded-lg transition-all duration-300 ease-in-out
                ${
                  active === item.id
                    ? "bg-orange-100/60 shadow-md scale-105"
                    : "bg-transparent hover:bg-orange-50/40 hover:shadow-sm"
                }
              `}
            />

            <div
              className={`
                absolute -bottom-4 left-1/2 transform -translate-x-1/2
                h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full
                transition-all duration-300 ease-in-out
                ${active === item.id ? "w-full opacity-100" : "w-0 opacity-0"}
              `}
            />

            <div
              className={`
                absolute -bottom-4 left-1/2 transform -translate-x-1/2
                h-0.5 bg-orange-300 rounded-full
                transition-all duration-200 ease-in-out
                ${active !== item.id ? "hover:w-3/4 hover:opacity-60" : "w-0 opacity-0"}
              `}
            />

            <span className="relative z-10 transition-all duration-200">
              {item.label}
            </span>

            <div
              className={`
                absolute inset-0 rounded-lg blur-sm
                transition-all duration-300 ease-in-out
                ${
                  active === item.id
                    ? "bg-orange-200/30 opacity-100"
                    : "bg-transparent opacity-0"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* Animated background wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  dashboardType: PropTypes.string.isRequired,
};
export default Navbar;
