import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Dashboard from "./page/dashboard";
import ForgotPassword from "./page/forgotpassword";
import CreatePassword from "./page/createpassword";
import DeliveryDash from "./page/Henkaten/Delivery/deliverydash";
import LogisticDash from "./page/Henkaten/Logistic/logisticdash";
// import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      {/* <UserProvider> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createpassword" element={<CreatePassword />} />
        <Route path="/deliverydash" element={<DeliveryDash />} />
        <Route path="/logisticdash" element={<LogisticDash />} />
      </Routes>
      {/* </UserProvider> */}
    </Router>
  );
}

export default App;
