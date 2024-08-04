import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { logout } from "../redux/userSlice"

const NavButton = ({IsNavDataVisible, toggleNavButton, userRole}) => {
  
  const dispatch = useDispatch()
  //const user = useSelector()
  const navigate = useNavigate()

  const Logout = ()=>{
    dispatch(logout());
    navigate("/")
  }
  return (
    <div className="flex" >
      <button className="-rotate-45 fixed left-[0.6rem] text-white font-bold h-[1.5rem] w-[1.5rem] bg-red-600 border-[0.1rem] border-white"
        onClick={toggleNavButton}
      >
      </button>

      {IsNavDataVisible && 
        <>
          {userRole === 'admin' ?
            <Link to="/CreateQuiz" className="fixed left-[3rem] top-[0.8rem] px-[0.3rem] bg-green-700 rounded-md border-black border-[0.1rem] text-white"
            >
              Create
            </Link>
            :
            null
          }
          <button className="fixed left-[0.3rem] top-[3.5rem] px-[0.3rem] bg-black rounded-md border-white border-[0.1rem] text-white cursor-pointer"
            onClick={()=>{Logout()}}
          >
            Log-out
          </button>
        </>    
      }

    </div>
  )
}

export default NavButton