import React, { useState } from "react";
import axios from "axios";
import SessionNav from "../../components/session/sessionNav";
import Header from "../../components/headerSection/header";
import Footer from "../../components/footerSections/footer";
import HeroSection from "../../components/heroSection/heroSection";

function Sessions() {
  const [session, setSession] = useState({
    title: "",
    tags: "",
    json_file_url: "",
    video_url: "",
  });
  console.log(session);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSession({ ...session, [e.target.name]: e.target.value });
  };

  const handlePublish = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/session/my-sessions/save-draft`,
        {
          title: session.title,
          tags: session.tags.split(",").map((tag) => tag.trim()), // comma se split
          json_file_url: session.json_file_url,
          video_url: session.video_url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Session created successfully!");
      console.log("Created Session:", res.data);

      // Form reset
      setSession({
        title: "",
        tags: "",
        json_file_url: "",
        video_url: "",
      });
    } catch (err) {
      console.error("Error creating session:", err);
      alert("Error creating session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <SessionNav />
      <HeroSection />

      <div className="flex item-center justify-center mt-5">
        <div>
          <div className="p-10 bg-blue-100 border border-rounded rounded-md">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="font-bold">
                <label>
                  <span>Title</span>
                  <input
                    name="title"
                    placeholder="Session Title"
                    value={session.title}
                    onChange={handleChange}
                    className="w-full border p-2 outline-none rounded-md"
                  />
                </label>
              </div>

              <div className="font-bold">
                <label>
                  <span>Tags</span>
                  <input
                    name="tags"
                    placeholder="Tags (comma separated)"
                    value={session.tags}
                    onChange={handleChange}
                    className="w-full border p-2 outline-none rounded-md"
                  />
                </label>
              </div>

              <div className="font-bold">
                <label>
                  <span>Json_file Url</span>
                  <input
                    name="json_file_url"
                    placeholder="JSON File URL"
                    value={session.json_file_url}
                    onChange={handleChange}
                    className="w-full border p-2 outline-none rounded-md"
                  />
                </label>
              </div>

              <div className="font-bold">
                <label>
                  <span>Video Link</span>
                  <input
                    name="video_url"
                    placeholder="Video URL (optional)"
                    value={session.video_url}
                    onChange={handleChange}
                    className="w-full border p-2 outline-none rounded-md"
                  />
                </label>
              </div>

              <div className="font-bold text-center">
                <button
                  type="button"
                  onClick={handlePublish}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Publishing..." : "Publish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Sessions;
