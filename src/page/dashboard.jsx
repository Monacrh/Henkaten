import Sidebar from "../component/sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatusCard from "../component/statuscard";
import { FaTruck, FaBoxes, FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [currentStatusSet, setCurrentStatusSet] = useState(0);
  
  // Define the status sets that will cycle
  const statusSets = [
    // First set: HADIR and IZIN
    {
      delivery: [
        { title: "HADIR", count: 0, titleColor: "#4CAF50" },
        { title: "IZIN", count: 0, titleColor: "#2196F3" }
      ],
      logistic: [
        { title: "HADIR", count: 0, titleColor: "#4CAF50" },
        { title: "IZIN", count: 0, titleColor: "#2196F3" }
      ]
    },
    // Second set: SAKIT and CUTI
    {
      delivery: [
        { title: "SAKIT", count: 0, titleColor: "#FFC107" },
        { title: "CUTI", count: 0, titleColor: "#9C27B0" }
      ],
      logistic: [
        { title: "SAKIT", count: 0, titleColor: "#FFC107" },
        { title: "CUTI", count: 0, titleColor: "#9C27B0" }
      ]
    }
  ];

  // Animation effect to cycle through status sets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatusSet(prev => (prev + 1) % statusSets.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    customPaging: function() {
      return (
        <div className="dot-item"></div>
      );
    },
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar with fixed width */}
      <div className="w-64 bg-white border-r border-[#006F35]">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto bg-gray-50">
        {/* Top Section - Image Slider and Absence Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Image Slider - Left */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="w-full max-w-[733px] h-[390px] mx-auto">
              <Slider {...settings}>
                <div className="relative h-full">
                  <img 
                    src="/slide1.jpeg" 
                    alt="Slide 1" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="relative h-full">
                  <img 
                    src="/slide2.jpeg" 
                    alt="Slide 2" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </Slider>
            </div>
          </div>

          {/* Attendance Container - Right */}
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                  <FaTruck className="text-2xl text-[#E05F14]" />
                  <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] bg-clip-text text-transparent">
                    Delivery
                  </h2>
                </div>
              <div className="grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out">
                {statusSets[currentStatusSet].delivery.map((status, index) => (
                  <div key={`delivery-${index}`} className="animate-fadeIn">
                    <StatusCard 
                      title={status.title} 
                      count={status.count} 
                      titleColor={status.titleColor} 
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 mb-6">
                  <FaBoxes className="text-2xl text-[#E05F14]" />
                  <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] bg-clip-text text-transparent">
                    Logistic
                  </h2>
                </div>
              <div className="grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out">
                {statusSets[currentStatusSet].logistic.map((status, index) => (
                  <div key={`logistic-${index}`} className="animate-fadeIn">
                    <StatusCard 
                      title={status.title} 
                      count={status.count} 
                      titleColor={status.titleColor} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Map Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#E67F43] text-white px-6 py-4">
            <h2 className="text-lg font-semibold text-center">SKILL MAP</h2>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Delivery Skills - Left */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-16 bg-gray-600 rounded-l-lg mr-4"></div>
                <h3 className="text-lg font-semibold text-gray-700">DELIVERY</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="text-sm text-gray-600">Position</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                    <div className="w-12 h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="text-sm text-gray-600">Position</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistic Skills - Right */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-16 bg-gray-600 rounded-l-lg mr-4"></div>
                <h3 className="text-lg font-semibold text-gray-700">LOGISTIC</h3>
              </div>
              
              <div className="h-64 bg-white rounded-lg shadow-sm p-4">
                <div className="text-center text-gray-400 mt-20">
                  <div className="text-sm">Logistic skills content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slider styling and animations */}
      <style>{`
        .custom-dots {
          bottom: 20px !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        
        .custom-dots li {
          margin: 0 4px;
          width: auto;
          height: auto;
        }
        
        .custom-dots li button {
          width: 12px !important;
          height: 4px !important;
          padding: 0 !important;
          background: transparent;
          opacity: 1;
        }
        
        .custom-dots li button:before {
          content: none !important;
        }
        
        .dot-item {
          width: 12px;
          height: 4px;
          background-color: rgba(255,255,255,0.5);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .custom-dots li.slick-active .dot-item {
          background-color: #fff !important;
          width: 24px;
          height: 4px;
        }
        
        .slick-slider {
          position: relative;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .slick-list, .slick-track {
          height: 100%;
        }
        
        .slick-slide > div {
          height: 100%;
        }

        /* Fix for slick-carousel theme styles */
        .slick-dots li button:before {
          display: none;
        }

        /* Animation for status cards */
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}