import {Routes, Route} from "react-router-dom"

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
          <Route exact path="/Play/:id" element={<TakeQuiz/>}/>
          
          {/*admin routes */}
          <Route path="/CreateQuiz" element={<CreateQuiz/>}/>
          <Route exact path="/Edit/:id" element={<EditQuiz/>}/>
          
        </Routes>
    </div>
  )
}

export default App