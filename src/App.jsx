import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Dashboard from "./page/dashboard";
import ForgotPassword from "./page/forgotpassword";
import CreatePassword from "./page/createpassword";
import DeliveryDash from "./page/Henkaten/Delivery/deliverydash";
import LogisticDash from "./page/Henkaten/Logistic/logisticdash";
import DeliveryAbsence from "./page/Henkaten/Delivery/deliveryabsence";
import LogisticAbsence from "./page/Henkaten/Logistic/logisticabsence";
import DeliverySkillMap from "./page/Henkaten/Delivery/deliveryskillmap";
import LogisticSkillMap from "./page/Henkaten/Logistic/logisticskillmap";

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
        <Route path="/deliveryabsence" element={<DeliveryAbsence />} />
        <Route path="/deliveryskillmap" element={<DeliverySkillMap />} />
        <Route path="/logisticdash" element={<LogisticDash />} />
        <Route path="/logisticabsence" element={<LogisticAbsence />} />
        <Route path="/logisticskillmap" element={<LogisticSkillMap />} />
      </Routes>
      {/* </UserProvider> */}
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./page/login";
// import Dashboard from "./page/dashboard";
// import ForgotPassword from "./page/forgotpassword";
// import CreatePassword from "./page/createpassword";
// import DeliveryDash from "./page/Henkaten/Delivery/deliverydash";
// import LogisticDash from "./page/Henkaten/Logistic/logisticdash";
// import DeliveryAbsence from "./page/Henkaten/Delivery/deliveryabsence";
// import LogisticAbsence from "./page/Henkaten/Logistic/logisticabsence";
// import { AuthProvider, ProtectedRoute } from "./handler/authHandler";
//
// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         {/* <UserProvider> */}
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/forgotpassword"
//             element={
//               <ProtectedRoute>
//                 <ForgotPassword />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/createpassword"
//             element={
//               <ProtectedRoute>
//                 <CreatePassword />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/deliverydash"
//             element={
//               <ProtectedRoute>
//                 <DeliveryDash />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/deliveryabsence"
//             element={
//               <ProtectedRoute>
//                 <DeliveryAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/logisticdash"
//             element={
//               <ProtectedRoute>
//                 <LogisticDash />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/logisticabsence"
//             element={
//               <ProtectedRoute>
//                 <LogisticAbsence />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//         {/* </UserProvider> */}
//       </Router>
//     </AuthProvider>
//   );
// }
//
// export default App;
