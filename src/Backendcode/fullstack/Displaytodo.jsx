import React, { useState, useEffect } from "react";
import axios from "axios";

const Displaydata = () => {
  const [todos, setTodos] = useState([]); // To hold the fetched data
  const [error, setError] = useState(""); // To handle errors
  const [loading, setLoading] = useState(true); // To show a loading indicator

  // Fetch data from the backend API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/newtodo");
        setTodos(response.data); // Set the fetched data into state
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchTodos();
  }, []); // The empty array ensures this runs once on component mount

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/newtodo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id)); // Update UI by removing the deleted todo
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Error deleting todo');
    }
  };

  const handleUpdate = async (id, updatedTodo) => {
    try {
      await axios.put(`http://localhost:4000/newtodo/${id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo._id === id ? { ...todo, ...updatedTodo } : todo))); // Update UI with new data
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Error updating todo');
    }
  };

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
              <th className="border border-gray-400 px-4 py-2">Delete</th>
              <th className="border border-gray-400 px-4 py-2">Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{todo.title}</td>
                <td className="border border-gray-400 px-4 py-2">{todo.description}</td>
                <td className="border border-gray-400 px-4 py-2">{new Date(todo.date).toLocaleDateString()}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </button>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleUpdate(todo._id, { title: 'Updated Title', description: 'Updated Description', date: new Date() })}
                  >
                    Update
                  </button>
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
