import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


const Publicnotic = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get(
         ` ${process.env.REACT_APP_API_BASE_URL}
/api/Publicnotic/getPublicnotic`,
          { withCredentials: true }
        );

        if (response.data.data && Array.isArray(response.data.data)) {
          const sorted = response.data.data.sort((a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
          );
          setAchievements(sorted.slice(0, 3));
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (err) {
        console.error("Error fetching achievements:", err);
        setError(err.message);
        setAchievements([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
        <p>Error loading Public Notic: {error}</p>
      </div>
    );
  }

  if (achievements.length === 0) {
    return (
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
        <p>No Public Notic  found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Notics </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement._id || achievement.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                {achievement.photo && (
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}
/uploads/${achievement.photo}`}
                    alt="Achievement"
                    className="w-full h-[400px]  mb-4 rounded cursor-pointer"
                    onClick={() => setModalImage(`${process.env.REACT_APP_API_BASE_URL}
/uploads/${achievement.photo}`)}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
                    }}
                  />
                )}
                <p className="text-gray-700  h-[200px]  text-justify overflow-x-hidden mb-4">{achievement.message}</p>
                <div className="text-sm text-gray-500">
                  {new Date(achievement.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Modal for image preview */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img 
            src={modalImage} 
            alt="Full size" 
            className="max-w-full max-h-full rounded shadow-lg" 
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on the image
          />
          <button 
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setModalImage(null)}
          >
            &times;
          </button>
        </div>
      )}
      <div className='flex justify-end  mt-14'>
<button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"><Link to="/Aboutpublicnotic">View More Notics</Link></button></div>
    </div>
  );
};

export default Publicnotic;
