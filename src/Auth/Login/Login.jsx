import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      setLoading(false);
      toast.error("input your email");
    } else if (!password) {
      setLoading(false);
      toast.error("input your password");
    } else {
      const url = "https://asianpacificexpress-api.onrender.com/admin-login";
      const data = {
        email: email,
        password: password,
      };
      //   admin@gasianpacificexpress.com
      // theAsians321@
      try {
        const response = await axios.post(url, data);
        // console.log('Response:', response.data);
        localStorage.setItem("admindata", JSON.stringify(response.data.data));
        toast.success("login successful");
        setLoading(false);
        nav("/allpackage");
      } catch (error) {
          console.error('Error:', error);
        toast.error(error.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="welcome-message">
          <div className="logo"></div>
          {/* <h2>Effortless Attendance, Enhanced Integrity</h2> */}
          {/* <h1>Welcome to Proximity</h1> */}
          {/* <p>Join the future of attendance management. Sign up now to experience seamless and secure attendance tracking with Proximity.</p> */}
          <button className="logo-button">Admin Login</button>
        </div>
        <div className="login-form">
          <h2>Welcome Back to ADMIN</h2>
          <p>Asian Delivery Express</p>
          <form>
            <div className="input-group">
              <FaEnvelope />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="input-group">
              <FaLock />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password"
              />
            </div>
            <button onClick={handleLogin} type="submit">
              {loading ? "Loading..." : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
