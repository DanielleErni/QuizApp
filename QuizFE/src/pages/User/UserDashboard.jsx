import { useDispatch, useSelector } from "react-redux"
import {useForm} from "react-hook-form"

const UserDashboard = () => {

  const dispatch = useDispatch()
  const questions = useSelector((state)=>state.questions)
  const {register, handleSubmit, reset} = useForm()
  return (
    <div >
      
    </div>
  )
}

export default UserDashboard