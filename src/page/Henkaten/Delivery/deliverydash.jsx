// deliverydash.jsx
import { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import Navbar from "../../../component/navbar";
import ImageSlider from "../../../component/imageslider";
import StatusCard from "../../../component/statuscard";
import PositionCard from "../../../component/positioncard";
import Sidebar from "../../../component/sidebar";

export default function DeliveryDash() {
  const statusList = [
    { title: "HADIR", count: 0, titleColor: "#4CAF50" },
    { title: "IZIN", count: 0, titleColor: "#2196F3" },
    { title: "SAKIT", count: 0, titleColor: "#FFC107" },
    { title: "CUTI", count: 0, titleColor: "#9C27B0" },
  ];

  const sliderImages = [
    { src: "/slide1.jpeg", alt: "Slide 1" },
    { src: "/slide2.jpeg", alt: "Slide 2" },
  ];

  const useAutoScroll = (itemHeight = 100, scrollSpeed = 30) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      let animationFrame;
      let lastTimestamp = 0;

      const scroll = (timestamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;

        if (!isPaused && delta >= scrollSpeed) {
          setScrollPosition((prev) => (prev + 1) % (itemHeight * 9)); // 9 items
          lastTimestamp = timestamp;
        }
        animationFrame = requestAnimationFrame(scroll);
      };

      animationFrame = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationFrame);
    }, [isPaused, itemHeight, scrollSpeed]);

    return {
      transform: `translateY(-${scrollPosition}px)`,
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
    };
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-64 bg-white border-r border-[#006F35]">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar dashboardType="delivery" />

        <div className="flex-1 overflow-y-auto p-2 bg-gray-50">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_1.5fr] gap-2 mb-2">
            {/* Image Slider */}
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200">
              <ImageSlider images={sliderImages} />
            </div>

            {/* Attendance Cards */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaTruck className="text-2xl text-[#E05F14]" />
                <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-[#E05F14] to-[#FF6B2B] bg-clip-text">
                  Logistic
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                {statusList.map((status, index) => (
                  <StatusCard
                    key={`status-${index}`}
                    title={status.title}
                    count={status.count}
                    titleColor={status.titleColor}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Skill Map Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="bg-[#E67F43] text-white px-6 py-2">
              <h2 className="text-lg font-semibold text-center">
                DELIVERY SKILL MAP
              </h2>
            </div>

            <div className="p-4">
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center mb-4 bg-white border border-gray-600 rounded-lg">
                  <div className="w-3 h-14 bg-gray-600 rounded-l-lg mr-4"></div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    DELIVERY TEAM
                  </h3>
                </div>

                <div className="overflow-hidden h-80 relative">
                  <div
                    className="grid grid-cols-2 gap-4"
                    style={{
                      position: "absolute",
                      width: "100%",
                      ...useAutoScroll(120, 30), // Adjust 120px per item and 30ms speed
                    }}
                  >
                    {[...Array(9)].map((_, i) => (
                      <PositionCard
                        key={`driver-${i}`}
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
