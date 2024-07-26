import LandingPage from "./pages/LandingPage"
import UserDashboard from "./pages/User/UserDashboard"

import { axiosSample } from "./axios/axiosConfig"
import { useState, useEffect } from "react"

import {Routes, Route} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import LoginForm from "./components/LoginForm"
import AdminDashboard from "./pages/Admin/AdminDashboard"

/*
      <style>
        {`* {outline: solid red;}`}
      </style>
*/

const App = () => {

  const dispatch = useDispatch()
  const role = useSelector((state)=> state.questions.user)

  const [data, setData] = useState([])

  const sample = async()=>{
    await axiosSample.get()
      .then(res=>setData(res))
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
    sample()
    console.log(data)
  },[])
  console.log(data)

  return (
    <div className='font-bold bg-black h-[100vh]'>

      <style>
        {
          /*
            `* {outline: solid red;}`
          */
        }
      </style>
        <Routes>
          
          <Route path="/" element={<LandingPage/>}/>

          {/*private routes */}

          {/*guest user */}
          <Route path="/UserDashBoard" element={<UserDashboard/>}/>
          {/*admin routes */}
          <Route path="/AdminDashBoard" element={<AdminDashboard/>}/>
          
        </Routes>
    </div>
  )
}

export default App