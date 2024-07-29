
const NavButton = ({IsNavDataVisible, toggleNavButton}) => {

  return (
    <div className="flex" >
      <button className="-rotate-45 fixed left-[0.6rem] text-white font-bold h-[1.5rem] w-[1.5rem] bg-red-600 border-[0.1rem] border-white"
        onClick={toggleNavButton}
      >
      </button>

      {IsNavDataVisible && 
        <>
          <div className="fixed left-[3rem] top-[0.8rem] px-[0.3rem] bg-green-700 rounded-md border-black border-[0.1rem] text-white">
            Create
          </div>
          <div className="fixed left-[0.3rem] top-[3.5rem] px-[0.3rem] bg-black rounded-md border-white border-[0.1rem] text-white">
            Log-out
          </div>
        </>    
      }

    </div>
  )
}

export default NavButton