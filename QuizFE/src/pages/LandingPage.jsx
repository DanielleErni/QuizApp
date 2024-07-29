import LoginForm from "../components/LoginForm"
import { useState, useEffect } from "react"

const LandingPage = () => {
  return (
    <div>
        <div className="h-[100vh] text-white p-[1rem] flex flex-col justify-between">
            <div className="bg-[#D9D9D9] h-[5.5rem] m-[1.5rem] rounded-md">

            </div>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LandingPage