import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const ClassStudentList = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const classOptions = [
    'All', 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}
/api/students/all`,
        { className: selectedClass === 'All' ? null : selectedClass },
        { withCredentials: true }
      );
      
      setStudents(response.data.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (studentId) => {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }

    setDeletingId(studentId);
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}
/api/students/delete/${studentId}`,
        { withCredentials: true }
      );
      
      setStudents(students.filter(student => student._id !== studentId));
      toast.success("Student deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete student");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen p-4 text-lg"> {/* Increased base font size */}
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8"> {/* Larger heading */}
            Class Student List
          </h2>

          <form onSubmit={handleSubmit} className="mb-8"> {/* Increased margin */}
            <div className="flex flex-col sm:flex-row gap-5"> {/* Larger gap */}
              <div className="flex-1">
                <label className="block text-lg font-medium text-gray-700 mb-2"> {/* Larger label */}
                  Select Class
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full p-3 text-lg border text-black border-slate-800 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  disabled={loading}
                >
                  <option value="">-- Select a Class --</option>
                  {classOptions.map((className, index) => (
                    <option key={index} value={className} className="text-lg"> {/* Larger option text */}
                      {className === 'All' ? 'All Classes' : `Grade ${className}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:self-end">
                <button
                  type="submit"
                  disabled={loading || !selectedClass}
                  className={`w-full sm:w-auto px-5 py-3 text-lg rounded-md text-white font-medium ${ /* Larger button */
                    loading || !selectedClass 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  {loading ? 'Loading...' : 'Get Students'}
                </button>
              </div>
            </div>
          </form>

          {loading && !deletingId ? (
            <div className="flex justify-center items-center py-10"> {/* Larger padding */}
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div> {/* Larger spinner */}
            </div>
          ) : students.length > 0 ? (
            <div className="overflow-x-auto">
              {/* Desktop Table */}
              <table className="hidden sm:table min-w-full divide-y divide-gray-200 text-lg"> {/* Larger table text */}
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Name</th> {/* Larger header */}
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Guardian</th>
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Address</th>
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    <th className="px-6 py-4 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map(student => (
                    <tr key={student._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-lg font-medium text-gray-900"> {/* Larger text */}
                            {student.firstName} {student.lastName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800"> {/* Larger badge */}
                          Grade {student.className}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500 capitalize"> {/* Larger text */}
                        {student.gender}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-500"> {/* Larger text */}
                        {student.guardianName}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-500 max-w-xs truncate"> {/* Larger text */}
                        {student.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg font-medium"> {/* Larger text */}
                        <button
                          onClick={() => handleDelete(student._id)}
                          disabled={deletingId === student._id}
                          className="text-white cursor-pointer p-3 text-lg bg-red-500 hover:bg-red-600 disabled:bg-red-300 rounded-lg" /* Larger button */
                        >
                          {deletingId === student._id ? 'Deleting...' : 'Delete'}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="p-3 text-lg bg-purple-500 text-white cursor-pointer hover:bg-purple-600 rounded-lg"> {/* Larger button */}
                            <Link to={`/Adminoutlet/Updatestudents/${student._id}`}> Update Details </Link>
                         
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="sm:hidden space-y-5"> {/* Larger gap */}
                {students.map(student => (
                  <div key={student._id} className="bg-white p-5 rounded-lg shadow border border-gray-100 text-lg"> {/* Larger padding and text */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-900 text-xl"> {/* Larger heading */}
                        {student.firstName} {student.lastName}
                      </h3>
                      <span className="px-3 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800"> {/* Larger badge */}
                        Grade {student.className}
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-lg"> {/* Larger gap and text */}
                      <div>
                        <p className="text-gray-500">Gender</p>
                        <p className="font-medium capitalize">{student.gender}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Guardian</p>
                        <p className="font-medium">{student.guardianName}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500">Address</p>
                        <p className="font-medium">{student.address}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between"> {/* Larger margin */}
                      <button
                        onClick={() => handleDelete(student._id)}
                        disabled={deletingId === student._id}
                        className="text-lg px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-red-300" /* Larger button */
                      >
                        {deletingId === student._id ? 'Deleting...' : 'Delete'}
                      </button>
                      
                       <button className="p-3 text-lg bg-purple-500 text-white cursor-pointer hover:bg-purple-600 rounded-lg"> {/* Larger button */}
                            <Link to={`/Adminoutlet/Updatestudents/${student._id}`}> Update Details </Link>
                         
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : selectedClass && !loading ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg"> {/* Larger padding */}
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Larger icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">No students found</h3> {/* Larger text */}
              <p className="mt-2 text-lg text-gray-500"> {/* Larger text */}
                {selectedClass === 'All' ? 
                  'No students in any class' : 
                  `No students in Grade ${selectedClass}`
                }
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <ToastContainer autoClose={3000} position='top-right'/>
    </div>
  );
};

export default ClassStudentList;