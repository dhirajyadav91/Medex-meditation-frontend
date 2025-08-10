import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SessionEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [session, setSession] = useState({
    title: "",
    tags: "",
    json_file_url: "",
  });

  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // Redirect if not logged in
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  // Fetch existing session if editing
  useEffect(() => {
    if (id) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/v1/session/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setSession(res.data);
        })
        .catch((err) => console.error("Error fetching session:", err));
    }
  }, [id, token]);

  // Auto-save after 5 seconds
  useEffect(() => {
    if (!token) return;

    const timeout = setTimeout(() => {
      axios
        .post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/session/my-sessions/save-draft`,
          { ...session, id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          setMessage("Draft saved");
          setTimeout(() => setMessage(""), 2000);
        })
        .catch((err) => console.error("Error saving draft:", err));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [session, token, id]);

  const handleChange = (e) => {
    setSession({ ...session, [e.target.name]: e.target.value });
  };

  // Publish session
  const handlePublish = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/session/my-sessions/publish`,
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Session published!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error publishing:", err);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Session</h1>

      {message && (
        <div className="bg-green-100 text-green-800 px-4 py-2 mb-4 rounded">
          {message}
        </div>
      )}

      <input
        type="text"
        name="title"
        placeholder="Session Title"
        value={session.title}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="tags"
        placeholder="Tags (comma-separated)"
        value={session.tags}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="text"
        name="json_file_url"
        placeholder="JSON File URL"
        value={session.json_file_url}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      />

      <button
        onClick={handlePublish}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Publish
      </button>
    </div>
  );
};

export default SessionEditor;
