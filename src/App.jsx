import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Dashboard from "./page/dashboard";
import ForgotPassword from "./page/forgotpassword";
import CreatePassword from "./page/createpassword";
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
      </Routes>
      {/* </UserProvider> */}
    </Router>
  );
}

export default App;
