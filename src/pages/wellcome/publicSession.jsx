import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/session/sessionNav";

const PublicSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(sessions)

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/session/get-sessions`
      );
      setSessions(res.data); // array expected
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching public sessions:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200">
      <Navbar/>
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Wellness Sessions
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading sessions...</p>
      ) : sessions.length === 0 ? (
        <p className="text-center text-gray-500">No sessions found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session) => (
            <div
              key={session._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{session.title}</h2>

              {session.tags && session.tags.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-1">
                  {session.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {session.video_url && (
                <video controls className="w-full rounded mb-2">
                  <source src={session.video_url} type="video/mp4" />
                </video>
              )}

              {session.json_file_url && (
                <a
                  href={session.json_file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm block"
                >
                  📄 View JSON file
                </a>
              )}

              <p className="text-xs text-gray-500 mt-2">
                Published on:{" "}
                {new Date(session.updated_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default PublicSessions;
