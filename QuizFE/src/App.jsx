import {Routes, Route} from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import CreateQuiz from "./pages/CreateQuiz"
import EditQuiz from "./pages/EditQuiz"

/*
      <style>
        {`* {outline: solid red;}`}
      </style>
*/

const App = () => {

  return (
    <div className='font-bold bg-black p-[1rem]'>

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
          <Route path="/Dashboard" element={<Dashboard/>}/>
          {/*guest user */}
          
          {/*admin routes */}
          <Route path="/CreateQuiz" element={<CreateQuiz/>}/>
          <Route path="/EditQuiz" element={<EditQuiz/>}/>
          
        </Routes>
    </div>
  )
}

export default App