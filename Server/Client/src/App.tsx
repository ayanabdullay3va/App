import { useState } from 'react'
import Navbar from "./component/Navbar/nav"
import Artist from "./component/artist/index"
import Home from "./component/Home/index"
import { Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)


  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/artist" element={<Artist />} />
  </Routes>
 
   <Navbar/>
   
    </>
  )
}

export default App
