import { useState, useEffect } from "react"
import NavButton from "../components/NavButton"
import QuizListComp from "../components/QuizListComp"
import { useSelector } from "react-redux"
import { AxiosGetQuizList } from "../axios/axiosConfig"

const Dashboard = () => {
  const [IsNavDataVisible, SetIsNavDataVisible] = useState(false)
  const [QuizList, setQuizList] = useState([])

  const user = useSelector(state => state.user.User);

  const toggleNavButton = () => {
    SetIsNavDataVisible(!IsNavDataVisible)
  }

  const getQuizList = async() => {
    await AxiosGetQuizList.get()
      .then(res => {
        setQuizList(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getQuizList()
  }, [])

  return (
    <>
      <div className="" 
        onClick={() => {
          if (IsNavDataVisible) SetIsNavDataVisible(false)
        }}
      >
        <NavButton toggleNavButton={toggleNavButton} IsNavDataVisible={IsNavDataVisible} userRole={user.Role}/>

        <div className="bg-[#464545] rounded-md p-[1rem] pt-[1.7rem] min-h-screen ">
          {QuizList.map((el, index) => {
            return (
              <div key={index}>
                <QuizListComp  
                  quizData={el}
                  userRole={user.Role}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard