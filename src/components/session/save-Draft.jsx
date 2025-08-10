import React, { useState } from "react";
// import { saveDraft } from "../api/session";

const SaveDraft = ({ session, id, setId, token }) => {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSaveDraft = async () => {
    if (!token) {
      setMessage("Please log in to save a draft");
      return;
    }
    try {
      setSaving(true);
      const res = await saveDraft({ ...session, id }, token);
      setId(res.data._id); // store draft id
      setMessage("Draft saved!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error(err);
      setMessage(" Failed to save draft");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSaveDraft}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Draft"}
      </button>

      {message && (
        <p className="mt-2 text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default SaveDraft;
