import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from './Props'; // Import the child component

const Displaynew = () => {
  const [datas, setDatas] = useState([]); // State to hold API data

  // Fetch data from API
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:4001/');
      setDatas(response.data); // Update state with fetched data
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Pass datas as a prop to the DataTable component */}
      <DataTable data={datas} />
    </div>
  );
};

export default Displaynew;
