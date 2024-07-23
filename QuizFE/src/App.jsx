import LandingPage from "./pages/LandingPage"
import UserDashboard from "./pages/User/UserDashboard"

import { axiosSample } from "./axios/axiosConfig"
import { useState, useEffect } from "react"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

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
      .then(res=>setData(res.data))
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
        {`* {outline: solid red;}`}
      </style>
      <UserDashboard/>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<UserDashboard/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App