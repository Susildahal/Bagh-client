import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:4000/pratic');
      console.log('Fetched data:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>

            
            <p>Fullname: {item.fullname}</p>
            <p>Address: {item.address}</p>
            <p>Phone: {item.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
