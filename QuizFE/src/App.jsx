import {Routes, Route, Navigate} from "react-router-dom"

import { useSelector } from "react-redux"

import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import CreateQuiz from "./pages/CreateQuiz"
import EditQuiz from "./pages/EditQuiz"
import TakeQuiz from "./pages/TakeQuiz"


/*
      <style>
        {`* {outline: solid red;}`}
      </style>
*/

const App = () => {
  const user = useSelector((state) => state.user.User)
  const isAuthenticated = user.Role === "admin" || user.Role === "user";

  return (
    <div className='font-bold bg-cover bg-center bg-[url("https://image.freepik.com/free-vector/quiz-abstract-background_255524-114.jpg")] p-[1rem] '>

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
          <Route path="/Dashboard" element={isAuthenticated ? <Dashboard/> : <Navigate to="/"/>}/>

          {/*guest user */}
          <Route exact path="/Play/:id" 
            element={isAuthenticated && user.Role == 'user' ? <TakeQuiz/> : <Navigate to="/"/>}
          />
          
          {/*admin routes */}
          <Route path="/CreateQuiz" 
            element={isAuthenticated && user.Role == 'admin' ? <CreateQuiz/> : <Navigate to="/"/>}
          />
          <Route exact path="/Edit/:id" 
            element={isAuthenticated && user.Role == 'admin' ? <EditQuiz/> : <Navigate to="/"/>}
          />
          
        </Routes>
    </div>
  )
}

export default App