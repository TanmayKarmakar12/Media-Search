import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import {ToastContainer} from 'react-toastify'

const App = () => {

  return (
    <div className='w-full min-h-screen bg-gray-950 text-white'>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>  
      </Routes>
      
    </div>
  )
}

export default App
