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
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`,
        { email, password }
      );

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);

      // Redirect to My Sessions page
      navigate("/sessions");
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-200 p-10">
        <div className="bg-red-100 border rounded-md p-6 w-[350px]">
          <div className="flex items-center justify-center font-bold mb-4">
            <h1>Register User</h1>
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
            
            <div className="p-2 font-bold">
              <label>
                <span> Confirm Password</span>
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
                className="p-2 border rounded-md cursor-pointer hover:bg-blue-600  text-blue-400"
                type="submit"
              >
                Signup
              </button>
            </div>

            <div className="text-center mt-4">
              <p>
                Don’t have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline"
                >
                  Login here
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
