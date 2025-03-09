import axios from "axios";
import React, { useEffect, useState } from "react";

const Students = () => {
  const [server, setServer] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/users");
        console.log("Fetched Data:", response.data);
        setServer(response.data.users); // ✅ Ensure correct data structure
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Users List</h2>

      {/* ✅ Show loading if data is empty */}
      {server.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        server.map((user) => (
          <div key={user._id} className="p-4 border rounded-lg shadow-md mb-4">
            <p><strong>Name:</strong> {user.name} <button className=" text-xl text-red-300  cursor-pointer"> update</button></p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p> password {user.password}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Students;
