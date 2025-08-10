import React, { useState } from "react";
// import { publishSession } from "../api/session";
import { useNavigate } from "react-router-dom";

const PublishButton = ({ id, token }) => {
  const [publishing, setPublishing] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePublish = async () => {
    if (!token) {
      setMessage("Please log in to publish");
      return;
    }
    if (!id) {
      setMessage("Please save as draft first");
      return;
    }

    try {
      setPublishing(true);
      await publishSession({ id }, token);
      setMessage("Session published!");
      setTimeout(() => {
        navigate("/my-sessions");
      }, 1500);
    } catch (err) {
      console.error(err);
      setMessage(" Failed to publish");
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handlePublish}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={publishing}
      >
        {publishing ? "Publishing..." : "Publish"}
      </button>

      {message && (
        <p className="mt-2 text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default PublishButton;
