import { useState } from "react";
import StatusCard from "../../../component/statuscard"; // Import your existing StatusCard component
import Sidebar from "../../../component/sidebar"; // Import your existing StatusCard component
import Navbar from "../../../component/navbar"; // Import your existing StatusCard component

const DeliveryAbsence = () => {
  const [shift, setShift] = useState("A");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with your actual data source
  const attendanceData = {
    hadir: 0,
    sakit: 0,
    izin: 0,
    cuti: 0,
  };

  const attendanceHistory = [
    // This would come from your API in a real app
    { name: "John Doe", status: "Hadir" },
    { name: "Jane Smith", status: "Sakit" },
    { name: "Robert Johnson", status: "Izin" },
  ];

  const handleDownload = () => {
    // Implement download functionality
    console.log("Downloading attendance data...");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar dashboardType="delivery" />
        <main className="flex-1 overflow-y-auto">
          <div className="flex-1 p-8 bg-gray-50">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                SHIFT {shift}
              </h1>
              <div className="flex space-x-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006F35]"
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                >
                  <option value="A">Shift A</option>
                  <option value="B">Shift B</option>
                  <option value="C">Shift C</option>
                </select>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <StatusCard
                title="HADIR"
                count={attendanceData.hadir}
                titleColor="#4CAF50"
              />
              <StatusCard
                title="SAKIT"
                count={attendanceData.sakit}
                titleColor="#F44336"
              />
              <StatusCard
                title="IZIN"
                count={attendanceData.izin}
                titleColor="#2196F3"
              />
              <StatusCard
                title="CUTI"
                count={attendanceData.cuti}
                titleColor="#FF9800"
              />
            </div>

            {/* Divider */}
            <div className="border-t-2 border-gray-200 my-6"></div>

            {/* Attendance History Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Attendance History
                </h2>
                <div className="flex space-x-4">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 bg-[#006F35] text-white rounded-lg hover:bg-[#005a2c] transition-colors"
                    onClick={handleDownload}
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Name"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006F35]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* History Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceHistory.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        item.status === "Hadir"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Sakit"
                            ? "bg-red-100 text-red-800"
                            : item.status === "Izin"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                      }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeliveryAbsence;
