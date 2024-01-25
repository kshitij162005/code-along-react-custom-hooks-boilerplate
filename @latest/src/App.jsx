import React from 'react'
import './App.css'
import useStorage from "./customHooks/useStorage.jsx"

const App =() => {
  const {setStorage} = useStorage();
  return (
    <div>
      <input type="text" onChange={(e)=> setStorage(e.target.value)} />
    </div>
  )
}
export default App
