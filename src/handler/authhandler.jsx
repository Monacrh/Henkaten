import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

// Context Setup
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token"),
  );

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Protected Route Component with optional role restriction
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Add PropTypes for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
