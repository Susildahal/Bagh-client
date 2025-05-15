import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayAchievementsAdmin = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}
/api/Achivement/getAchivement`, {
        withCredentials: true,
      });
      setAchievements(res.data.data || []);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to load achievements");
      setAchievements([])
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this achievement?")) return;

    try {
      setDeletingId(id);
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}
/api/Achivement/deleteAchivement/${id}`, {
        withCredentials: true,
      });
      toast.success("Deleted successfully");
      setAchievements((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      toast.error(err.response?.data?.msg || "Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (achievements.length === 0)
    return <p className="text-center mt-10">No achievements found.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">Achievements</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {achievements.map((ach) => (
          <div key={ach._id} className="border p-3 rounded shadow">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}
/uploads/${ach.photo}`}
              alt="Achievement"
              className="w-full h-96 object-cover mb-2"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
              }}
            />
            <p className="text-sm mb-2">{ach.message}</p>
            <p className="text-xs text-gray-500 mb-2">
              {new Date(ach.createdAt).toLocaleDateString()}
            </p>
            <button
              onClick={() => handleDelete(ach._id)}
              disabled={deletingId === ach._id}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm w-full"
            >
              {deletingId === ach._id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DisplayAchievementsAdmin;
