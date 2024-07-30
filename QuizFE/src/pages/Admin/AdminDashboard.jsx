import { useState } from "react"

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
  
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user.User);
  //console.log(user.Role)

    const HandleNavigateUser = () =>{
      sampleProps[0].Role === "user" ? 
        Navigate('/quiz')
        :
        setToggleSettings(true)
    }

    const toggleNavButton = () =>{
      SetIsNavDataVisible(!IsNavDataVisible)
    }
    
    const getQuizList = async() =>{
      await AxiosGetQuizList.get()
        .then(res=>setQuizList(res.data))
        .catch(err=>console.log(err))
    }
    useState(()=>{
      getQuizList()
      console.log(QuizList)
    },[])

    var sampleProps = [
      {
        Title: "sample quiz name",
        Questions: ["sample"],
        Answers: ["sample"],
        Role: "admin",
        Logo: "https://www.svgrepo.com/show/527439/settings.svg"
      }
    ]
      
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
          <QuizListComp 
            sampleProps={sampleProps} 
            HandleNavigateUser={HandleNavigateUser}
          />
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