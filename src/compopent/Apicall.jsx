import React, { useLayoutEffect } from 'react'
import { useEffect,useState } from 'react'

const Apicall = async () => {
    useEffect(() => {
        const fetchTodos = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setTodos(response.data); // Set the fetched data into state
          } catch (err) {
            setError("Error fetching data");
            console.error("Error fetching data:", err);
          } 
          }
        };
    
        fetchTodos();
      }, []);
  return (

    <div>
    

      
    </div>
  )
}

export default Apicall
