import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MySessions = () => {
  const navigate = useNavigate();

  const [mySessions, setMySessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/session/my-sessions`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMySessions(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching your sessions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="min-h-screen p-3 bg-blue-100">
      {/* Header */}
      <div className="bg-gray-800 flex justify-center border rounded-md relative">
        <div className="absolute top-5 left-4 text-white font-bold text-3xl">
          Medex
        </div>
        <h1 className="text-3xl font-bold mb-6 p-2 text-center text-white">
          My Sessions
        </h1>
      </div>

      <div className="mt-1 flex">
        {/* Sidebar */}
        <div className="bg-blue-200 w-[300px] min-h-screen">
          <ul className="font-bold">
            <li className="bg-blue-600 text-white hover:bg-blue-800 cursor-pointer p-2">
              Published
            </li>
            <li className="bg-blue-600 text-white hover:bg-blue-800 cursor-pointer p-2">
              Save Draft
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : mySessions.length === 0 ? (
            <p className="text-gray-500">No sessions. Start creating</p>
          ) : (
            <div className="space-y-4">
              {mySessions.map((session) => (
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
                  {session.json_file_url && (
                    <p className="text-sm text-blue-600">
                      <a
                        href={session.json_file_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View JSON
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySessions;
