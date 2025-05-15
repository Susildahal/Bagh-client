import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowPrincipaltoclient = () => {
  const [principal, setPrincipal] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchPrincipal = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}
/api/principal/get-principal`);
        setPrincipal(res.data);
      } catch (err) {
        console.error("Failed to load principal data:", err);
      }
    };

    fetchPrincipal();
  }, []);

  if (!principal) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading principal data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl shadow-lg p-6 md:p-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-10 underline underline-offset-8">
          Principal's Message
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}
/uploads/${principal.photo}`}
              alt="Principal"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-purple-400 shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => setModalImage(`${process.env.REACT_APP_API_BASE_URL}
/uploads/${principal.photo}`)}
            />
          </div>

          <div className="flex-1 w-full space-y-4">
            <h3 className="text-3xl font-semibold text-purple-300">
              {principal.principalName}
            </h3>

            <p className="text-lg md:text-xl text-gray-200 whitespace-pre-line leading-relaxed break-words">
              {principal.message}
            </p>

            <p className="text-sm text-gray-400">
              Created At: {new Date(principal.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <img
              src={modalImage}
              alt="Zoomed"
              className="max-w-full max-h-full rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowPrincipaltoclient;
