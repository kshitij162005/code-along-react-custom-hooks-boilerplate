import React from 'react'
import './App.css'
import useStorage from "./customHooks/useStorage"

const App =() => {
  const {setStorage} = useStorage();
  return (
    <div>
      <input className='button' type="text" onChange={(e)=> setStorage(e.target.value)} />
    </div>
  )
}
export default App
