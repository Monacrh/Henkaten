import Sidebar from "../component/sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dashboard() {
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
    customPaging: function(i) {
      return (
        <div className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300 hover:bg-[#006F35]"></div>
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
            <Slider {...settings}>
              <div>
                <img 
                  src="/slide1.jpeg" 
                  alt="Slide 1" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div>
                <img 
                  src="/slide2.jpeg" 
                  alt="Slide 2" 
                  className="w-full h-64 object-cover" 
                />
              </div>
            </Slider>
          </div>

          {/* Absence Container - Right */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Delivery</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-sm text-green-600 font-medium mb-2">HADIR</div>
                <div className="text-4xl font-bold text-gray-800">0</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-sm text-yellow-600 font-medium mb-2">SAKIT</div>
                <div className="text-4xl font-bold text-gray-800">0</div>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold text-gray-800 pt-4">Logistic</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-sm text-green-600 font-medium mb-2">HADIR</div>
                <div className="text-4xl font-bold text-gray-800">0</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-sm text-yellow-600 font-medium mb-2">SAKIT</div>
                <div className="text-4xl font-bold text-gray-800">0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Map Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-4">
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

      {/* Custom CSS for slider styling */}
      <style jsx>{`
        .custom-dots {
          bottom: 10px !important;
        }
        
        .custom-dots li {
          margin: 0 2px;
        }
        
        .custom-dots li.slick-active div {
          background-color: #006F35 !important;
          transform: scale(1.3);
        }
        
        .slick-slider {
          position: relative;
        }
        
        .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}