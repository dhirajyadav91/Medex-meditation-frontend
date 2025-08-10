import React from "react";

const SessionCard = ({ sessions, showStatus = false, editable = false, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">Title{sessions.title}</h2>

      {/* Tags */}
      {session.tags && sessions.tags.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {sessions.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Status badge */}
      {showStatus && (
        <span
          className={`inline-block mb-2 text-xs px-2 py-1 rounded ${
            session.status === "published"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {sessions.status}
        </span>
      )}

      {/* Video Preview */}
      {sessions.video_url && (
        <video controls className="w-full mt-2 rounded shadow">
          <source src={session.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* JSON File Link */}
      {session.json_file_url && (
        <a
          href={sessions.json_file_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm hover:underline mt-2"
        >
          View JSON file
        </a>
      )}

      {/* Edit Button */}
      {editable && (
        <button
          onClick={onEdit}
          className="mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default SessionCard;
