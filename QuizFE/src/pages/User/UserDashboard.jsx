import { useDispatch, useSelector } from "react-redux"
import {useForm} from "react-hook-form"
import QuizListComp from "../../components/QuizListComp"
import NavButton from "../../components/NavButton"


const UserDashboard = () => {

  const dispatch = useDispatch()
  const questions = useSelector((state)=>state.questions)
  const {register, handleSubmit, reset} = useForm()

  var sampleProps = [
    {
      Title: "sample quiz name",
      Questions: ["sample"],
      Answers: ["sample"],
      Role: "user",
      Logo: "https://www.svgrepo.com/show/294571/play-button-movie.svg"
    }
  ]
  return (
    <div className="p-[1rem]">
      <NavButton/>
      <div className="bg-[#464545] h-[92.9vh] rounded-md p-[1rem]">
        <QuizListComp sampleProps={sampleProps}/>
      </div>
    </div>
  )
}

export default UserDashboard