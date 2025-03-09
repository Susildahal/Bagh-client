import React, { useState, useEffect } from "react";
import axios from "axios";

const Displaydata = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/newtodo"); // Update the URL if needed
        setTodos(response.data);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-2xl font-bold mb-4">Todo List</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {!loading && todos.length === 0 && (
        <div className="text-center text-gray-500">No todos available</div>
      )}

      {todos.length > 0 && (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo._id}>
                <td className="border border-gray-400 px-4 py-2">{todo.title}</td>
                <td className="border border-gray-400 px-4 py-2">{todo.description}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {todo.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Displaydata;
