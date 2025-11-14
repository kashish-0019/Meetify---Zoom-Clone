import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Register Function
  const handleRegister = async (name, username, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/register", {
        name,
        username,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/auth/login"); // ✅ Go to login after sign up
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Sign up failed. Try again.");
    }
  };

  // Login Function
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/login", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setUserData(response.data.user);
        navigate("/"); // ✅ Redirect to home after login
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ userData, handleRegister, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
