import { useState } from "react"

const NavButton = () => {

  const [IsNavDataVisible, SetIsNavDataVisible] = useState(false)

  const toggleNavButton = () =>{
    SetIsNavDataVisible(!IsNavDataVisible)
    console.log(IsNavDataVisible)
  }

  return (
    <div className="flex">
      <button className="-rotate-45 fixed left-[0.6rem] text-white font-bold h-[1.5rem] w-[1.5rem] bg-red-600 border-[0.1rem] border-white"
        onClick={toggleNavButton}
      >
      </button>
      {IsNavDataVisible && 
        <>
          <div className="fixed left-[3rem] top-[0.8rem] h-[2rem] w-[2rem] bg-blue-700 rounded-full border-black border-[0.1rem]">
          </div>
          <div className="fixed left-[0.3rem] top-[3.5rem] h-[2rem] w-[2rem] bg-blue-700 rounded-full border-black border-[0.1rem]">
          </div>
        </>    
      }

    </div>
  )
}

export default NavButton