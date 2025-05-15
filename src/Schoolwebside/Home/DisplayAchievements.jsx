import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/Achivement/getAchivement`);
        const data = response.data?.data || [];
        const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setAchievements(sorted.slice(0, 3));
      } catch (err) {
        setError(err.message);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [BASE_URL]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow-md text-center">
          Error loading achievements: {error}
        </div>
      );
    }

    if (achievements.length === 0) {
      return (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow-md text-center">
          No achievements found.
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <div
            key={achievement._id || achievement.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={`${BASE_URL}/uploads/${achievement.photo}`}
                alt="Achievement"
                className="w-full h-60 object-cover cursor-pointer"
                onClick={() => setModalImage(`${BASE_URL}/uploads/${achievement.photo}`)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
            </div>
            <div className="p-5">
              <p className="text-gray-700 h-[300px] overflow-x-hidden text-justify text-base mb-3">
                {achievement.message}
              </p>
              <p className="text-sm text-gray-500 text-right">
                {new Date(achievement.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Recent Achievements
        </h2>

        {renderContent()}

        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <img
              src={modalImage}
              alt="Full size"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>

      <div className="pt-20 flex justify-end">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Link to="/AboutAchievements">View More Achievements</Link>
        </button>
      </div>
    </section>
  );
};

export default DisplayAchievements;
