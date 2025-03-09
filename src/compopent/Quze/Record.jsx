import React from 'react';
import record from './Record.json'

function Record() {
  return (
    <div>
        {
    record.map(record => {
        return(
            <div> 
            <p id="sushil">{record.id}<br></br></p>
                {record.name}<br/>
                {record.address}
            </div>
        )
    })     
}
    </div>
  )
}
export default Record
