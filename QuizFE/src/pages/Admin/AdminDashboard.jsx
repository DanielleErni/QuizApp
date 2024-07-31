import { useState, useEffect } from "react"

import NavButton from "../../components/NavButton"
import QuizListComp from "../../components/QuizListComp"
import ModalSettings from "../../components/ModalSettings"

import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { AxiosGetQuizList } from "../../axios/axiosConfig"


const AdminDashboard = () => {

  const [ToggleSettings, setToggleSettings] = useState(false)
  const [IsNavDataVisible, SetIsNavDataVisible] = useState(false)
  const [QuizList, setQuizList] = useState([])

  const user = useSelector(state => state.user.User);
  console.log(user)
  
  const Navigate = useNavigate();

    const HandleNavigateUser = () =>{
      user.Role === "user" ? 
        Navigate('/quiz')
        :
        setToggleSettings(true)
    }

    const toggleNavButton = () =>{
      SetIsNavDataVisible(!IsNavDataVisible)
    }
    
    const getQuizList = async() =>{
      await AxiosGetQuizList.get()
        .then(res=>{setQuizList(res.data)})
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
      getQuizList()
      
    },[])

    //console.log(QuizList)
      
    return (
    <>
    
      <div className="p-[1rem]" 
        onClick={()=>{
            if(ToggleSettings)setToggleSettings(false)
            if(IsNavDataVisible)SetIsNavDataVisible(false)
        }}
      >
          <NavButton toggleNavButton={toggleNavButton} IsNavDataVisible={IsNavDataVisible}/>

          <div className="bg-[#464545] h-[92.9vh] rounded-md p-[1rem]">

          {QuizList.map((el, index)=>{
            return (
              <div key={index}>
                <QuizListComp  
                  quizData = {el}
                  HandleNavigateUser={HandleNavigateUser}
                  userRole={user.Role}
                />
              </div>
            )
          })}

          </div>
      </div>
      

      {ToggleSettings ? 
        <ModalSettings/>
        :
        null 
      }
    </>
    
    )
}

export default AdminDashboard