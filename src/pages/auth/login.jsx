import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // reset old errors
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`,
        { email, password }
      );

      console.log("Login Response:", res.data);

      // Backend ka token path detect karo
      let token = res.data?.token || res.data?.data?.token;
      if (!token) {
        setError("Login successful but token not found in response.");
        return;
      }

      // Save token to localStorage
      localStorage.setItem("token", token);
      console.log("Saved token:", token);

      // Redirect to My Sessions page
      navigate("/sessions");
    } catch (err) {
      console.error("Login Error:", err);
      if (err.response?.data?.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-200 p-10">
        <div className="bg-red-100 border rounded-md p-6 w-[350px]">
          <div className="flex items-center justify-center font-bold mb-4">
            <h1>Login User</h1>
          </div>

          {error && (
            <p className="text-red-600 text-center mb-3">{error}</p>
          )}

          <form onSubmit={handleLogin}>
            <div className="p-2 font-bold">
              <label>
                <span>Email</span>
                <input
                  className="w-full h-10 outline-none border rounded-md px-2"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="p-2 font-bold">
              <label>
                <span>Password</span>
                <input
                  className="w-full h-10 outline-none border rounded-md px-2"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="p-2 flex items-center justify-center font-bold">
              <button
                className="p-2 border rounded-md cursor-pointer hover:bg-blue-200 w-full"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="text-center mt-4">
              <p>
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
