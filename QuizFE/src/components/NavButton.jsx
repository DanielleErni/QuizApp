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
    <div className="flex ">
      <button className="-rotate-45 fixed left-[0.6rem] text-white font-bold h-[1.5rem] w-[1.5rem] bg-red-600 border-[0.1rem] border-white s:h-[2rem] s:w-[2rem] s:left-[0.49rem] m:h-[2.5rem] m:w-[2.5rem] m:left-[1rem] l:h-[3rem] l:w-[3rem] l:left-[1.8rem] xl:h-[4rem] xl:w-[4rem] xl:left-[2rem]"
        onClick={toggleNavButton}
      >
      </button>

      {IsNavDataVisible && 
        <>
          {userRole === 'admin' ?
            <Link to="/CreateQuiz" className="fixed left-[3rem] top-[0.8rem] px-[0.3rem] bg-green-700 rounded-md border-white border-[0.1rem] text-white m:left-[5rem] m:top-[2.3rem] l:text-[1.5rem] l:left-[6rem] l:top-[3rem] xl:text-[2rem] xl:left-[8rem] xl:top-[4.5rem]"
            >
              Create
            </Link>
            :
            null
          }
          <button className="fixed left-[0.3rem] top-[3.5rem] px-[0.3rem] bg-black rounded-md border-white border-[0.1rem] text-white cursor-pointer s:top-[4rem] m:top-[5.6rem] l:text-[1.5rem] l:top-[7.2rem] xl:text-[2rem] xl:top-[10rem]" 
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