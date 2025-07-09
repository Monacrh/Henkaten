import Sidebar from "../component/sidebar";
import StatusCard from "../component/statuscard";
import { FaTruck, FaBoxes } from "react-icons/fa";
import { useState, useEffect } from "react";
import ImageSlider from "../component/imageslider";
import PositionCard from "../component/positioncard";

export default function Dashboard() {
  const [currentStatusSet, setCurrentStatusSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Define the status sets that will cycle
  const statusSets = [
    // First set: HADIR and IZIN
    {
      delivery: [
        { title: "HADIR", count: 0, titleColor: "#4CAF50" },
        { title: "IZIN", count: 0, titleColor: "#2196F3" },
      ],
      logistic: [
        { title: "HADIR", count: 0, titleColor: "#4CAF50" },
        { title: "IZIN", count: 0, titleColor: "#2196F3" },
      ],
    },
    // Second set: SAKIT and CUTI
    {
      delivery: [
        { title: "SAKIT", count: 0, titleColor: "#FFC107" },
        { title: "CUTI", count: 0, titleColor: "#9C27B0" },
      ],
      logistic: [
        { title: "SAKIT", count: 0, titleColor: "#FFC107" },
        { title: "CUTI", count: 0, titleColor: "#9C27B0" },
      ],
    },
  ];

  const sliderImages = [
    { src: "/slide1.jpeg", alt: "Slide 1" },
    { src: "/slide2.jpeg", alt: "Slide 2" },
  ];

  const useAutoScroll = (itemsCount, scrollSpeed = 30) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for down, -1 for up

    useEffect(() => {
      const interval = setInterval(() => {
        setScrollPosition((prev) => {
          // Change direction when reaching top or bottom
          if (prev >= itemsCount * 100) setDirection(-1);
          if (prev <= 0) setDirection(1);
          return prev + direction;
        });
      }, scrollSpeed);

      return () => clearInterval(interval);
    }, [direction, itemsCount, scrollSpeed]);

    return scrollPosition;
  };

  // Animation effect to cycle through status sets
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStatusSet((prev) => (prev + 1) % statusSets.length);
        setIsAnimating(false);
      }, 300); // Half of the transition duration
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [statusSets.length]);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar with fixed width */}
      <div className="w-64 bg-white border-r border-[#006F35]">
        <Sidebar />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
      <div className="flex-1 p-2 bg-gray-50 flex flex-col">
        {/* Top Section - Image Slider and Absence Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_1.5fr] gap-6 mb-2 flex-shrink-0">
          {/* Image Slider - Left */}
          <div className="bg-white p-2 rounded-xl shadow-sm border flex items-center border-gray-200 overflow-hidden">
            <div className="w-full max-w-2xl mx-auto ">
              <ImageSlider images={sliderImages} />
            </div>
          </div>

          {/* Attendance Container - Right */}
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaTruck className="text-2xl text-[#E05F14]" />
                <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] bg-clip-text ">
                  Delivery
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out">
                {statusSets[currentStatusSet].delivery.map((status, index) => (
                  <div
                    key={`delivery-${index}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isAnimating
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                  >
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
                <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] bg-clip-text ">
                  Logistic
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out">
                {statusSets[currentStatusSet].logistic.map((status, index) => (
                  <div
                    key={`logistic-${index}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isAnimating
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <StatusCard
                      title={status.title}
                      count={status.count}
                      titleColor={status.titleColor}
                    />
                  </div>
                ))}
              </div>

              {/* Slider indicators for logistic */}
              <div className="flex justify-center space-x-2 mt-4">
                {statusSets.map((_, index) => (
                  <button
                    key={`logistic-indicator-${index}`}
                    onClick={() => setCurrentStatusSet(index)}
                    className={`cursor-pointer w-8 h-2 rounded-full ${currentStatusSet === index ? "bg-[#E05F14]" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Skill Map Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-grow">
          <div className="bg-[#E67F43] text-white px-6 py-2">
            <h2 className="text-lg font-semibold text-center">SKILL MAP</h2>
          </div>
          {/* Header */}

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col">
              <div className="flex items-center mb-4 bg-white border border-gray-600 rounded-lg">
                <div className="w-3 h-14 bg-gray-600 rounded-l-lg mr-4"></div>
                <h3 className="text-lg font-semibold text-gray-700">
                  DELIVERY
                </h3>
              </div>

              <div className="overflow-y-clip max-h-80 pr-2">
                <div
                  className="grid grid-cols-2 gap-4"
                  style={{
                    transform: `translateY(-${useAutoScroll(9 / 2, 40)}px)`,
                  }}
                >
                  {[...Array(9)].map((_, i) => (
                    <PositionCard
                      key={`delivery-skill-${i}`}
                      title={`Driver ${i + 1}`}
                      count={i + 1}
                      titleColor={i % 2 === 0 ? "#4CAF50" : "#2196F3"}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Logistic Skills - Right */}
            <div className="bg-gray-100 rounded-xl p-4 h-full flex flex-col flex-grow">
              <div className="flex items-center mb-4 bg-white border border-gray-600 rounded-lg">
                <div className="w-3 h-14 bg-gray-600 rounded-l-lg mr-4"></div>
                <h3 className="text-lg font-semibold text-gray-700">
                  LOGISTIC
                </h3>
              </div>

              <div className="overflow-y-clip max-h-80 pr-2">
                <div
                  className="grid grid-cols-2 gap-4"
                  style={{
                    transform: `translateY(-${useAutoScroll(6 / 2, 40)}px)`,
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <PositionCard
                      key={`delivery-skill-${i}`}
                      title={`Driver ${i + 1}`}
                      count={i + 1}
                      titleColor={i % 2 === 0 ? "#4CAF50" : "#2196F3"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}