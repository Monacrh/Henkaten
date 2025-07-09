import Sidebar from "../../../component/sidebar"; // Import your existing StatusCard component
import Navbar from "../../../component/navbar"; // Import your existing StatusCard component

export default function DeliverySkillMap() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar dashboardType="delivery" />
        <main className="flex-1 overflow-y-auto"></main>
      </div>
    </div>
  );
}
