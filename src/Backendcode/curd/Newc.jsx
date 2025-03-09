import axios from 'axios'
import React, { useState } from 'react'


const Newc = () => {
  let [first, setFirst] = useState('')
  let [second, setSecond] = useState("")
  const [server, setServer] = useState("")
  setTimeout(() => {
    setServer('')
  }, 3000);
  function restart() {
    setFirst('');
    setSecond("")
  }
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4001/", { first, second })
      console.log(response.data.message)
      setServer(response.data.message)
      restart()
    } catch (error) {
      console.error('the error is ', error)
      setServer("Any error happen please try again latter please  client ")

    }

  }
  return (
    <div>
      <div className=' flex flex-col items-center justify-center gap-3 '>
        <input
          type='number'
          placeholder='enter a number '
          className=' h-8 w-24 border-black border-2 '
          onChange={(e) => setFirst(e.target.value)}
          value={first}
        />
        <input
          type='number'
          placeholder='enter a number '
          className=' h-8 w-24 border-black border-2 '
          onChange={(e) => setSecond(e.target.value)}
          value={second}
        />
        <button onClick={handleSubmit}> sumit </button>
      </div>

      <div> {server}</div>
    </div>
  )
}

export default Newc
