import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'


const Displaynew =  () => {
    const [datas,setdatas]=useState()
    async function data() {
        try {
          const response =  await axios.get('http://localhost:4001/new');
            setdatas(response.data)
            console.log(response.data)
            
        } catch (error) {
            
        }

        
    }
     
    
  return (
    <div>
      
    </div>
  )
}

export default Displaynew
