import {Routes, Route, Navigate} from "react-router-dom"

import { useSelector } from "react-redux"

import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import CreateQuiz from "./pages/CreateQuiz"
import EditQuiz from "./pages/EditQuiz"
import TakeQuiz from "./pages/TakeQuiz"

const App = () => {
  const user = useSelector((state) => state.user.User);
  const isAuthenticated = user.Role === "admin" || user.Role === "user";

  return (
    <div className='font-bold p-[1rem] xs:p-[2rem] s:p-[3rem] l:p-[4rem] bg-gradient-to-b from-indigo-500 to-purple-500 min-h-screen'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* private routes */}
        <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        {/* guest user */}
        <Route exact path="/Play/:id" element={isAuthenticated && user.Role === 'user' ? <TakeQuiz /> : <Navigate to="/" />} />
        {/* admin routes */}
        <Route path="/CreateQuiz" element={isAuthenticated && user.Role === 'admin' ? <CreateQuiz /> : <Navigate to="/" />} />
        <Route exact path="/Edit/:id" element={isAuthenticated && user.Role === 'admin' ? <EditQuiz /> : <Navigate to="/" />} />
        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
