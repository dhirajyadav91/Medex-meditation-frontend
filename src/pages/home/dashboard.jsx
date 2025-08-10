import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchMySessions = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/session/my-sessions`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSessions(res.data);
    } catch (err) {
      console.error("Error fetching your sessions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "mysession" || activeTab === "published" || activeTab === "draft") {
      fetchMySessions();
    }
  }, [activeTab]);

  const filteredSessions =
    activeTab === "published"
      ? sessions.filter((s) => s.status === "published")
      : activeTab === "draft"
      ? sessions.filter((s) => s.status === "draft")
      : sessions;

  return (
    <div className="min-h-screen bg-gray-200 px-2 py-2 flex">
      {/* Sidebar */}
      <div className="bg-blue-200 w-[300px] min-h-screen p-3">
        <div className="text-white font-bold text-3xl bg-gray-800 p-2 rounded mb-4">
          Dashboard
        </div>
        <ul className="font-bold space-y-2">
          <li
            onClick={() => setActiveTab("mysession")}
            className={`p-2 cursor-pointer rounded ${
              activeTab === "mysession"
                ? "bg-blue-800 text-white"
                : "bg-blue-600 text-white hover:bg-blue-800"
            }`}
          >
            MySession
          </li>
          <li
            onClick={() => setActiveTab("published")}
            className={`p-2 cursor-pointer rounded ${
              activeTab === "published"
                ? "bg-blue-800 text-white"
                : "bg-blue-600 text-white hover:bg-blue-800"
            }`}
          >
            Published
          </li>
          <li
            onClick={() => setActiveTab("draft")}
            className={`p-2 cursor-pointer rounded ${
              activeTab === "draft"
                ? "bg-blue-800 text-white"
                : "bg-blue-600 text-white hover:bg-blue-800"
            }`}
          >
            Draft
          </li>
          <li
            onClick={() => setActiveTab("changepassword")}
            className={`p-2 cursor-pointer rounded ${
              activeTab === "changepassword"
                ? "bg-blue-800 text-white"
                : "bg-blue-600 text-white hover:bg-blue-800"
            }`}
          >
            ChangePassword
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {activeTab === "mysession" || activeTab === "published" || activeTab === "draft" ? (
          <>
            <h1 className="text-2xl font-bold mb-4">
              {activeTab === "mysession"
                ? "My Sessions"
                : activeTab === "published"
                ? "Published Sessions"
                : "Draft Sessions"}
            </h1>
            {loading ? (
              <p className="text-center">Loading Sessions...</p>
            ) : filteredSessions.length === 0 ? (
              <p className="text-gray-500">No sessions found.</p>
            ) : (
              <div className="space-y-4">
                {filteredSessions.map((session) => (
                  <div
                    key={session._id}
                    className={`border p-4 rounded-lg ${
                      session.status === "draft"
                        ? "bg-yellow-50 border-yellow-400"
                        : "bg-green-50 border-green-400"
                    }`}
                  >
                    <h2 className="text-lg font-semibold">{session.title}</h2>
                    <p className="text-sm text-gray-600">
                      Status:{" "}
                      <span
                        className={
                          session.status === "draft"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }
                      >
                        {session.status}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Tags: {session.tags.join(", ")}
                    </p>

                    <button
                      onClick={() => navigate(`/session-editor/${session._id}`)}
                      className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : activeTab === "dashboard" ? (
          <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        ) : activeTab === "changepassword" ? (
          <h1 className="text-2xl font-bold">Change Password Page</h1>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
