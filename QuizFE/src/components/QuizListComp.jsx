import { Link } from "react-router-dom"

<<<<<<< HEAD
const QuizListComp = ({quizData, quizIndex}) => {
  return (
    <>
      <Link to={`/Edit/${quizIndex}`} state={{quizData}}>
        <div className='border-black border-[0.1rem] px-[0.7rem] py-[0.27rem] rounded-full bg-white flex justify-between mb-[0.4rem]'>
          <p className=''>
            {quizData.quizName}
          </p>
        </div>
      </Link>
    </>
=======


const QuizListComp = ({quizData, HandleNavigateUser, userRole}) => {
  //console.log(quizData.quizName)

  return (
    <div className='border-black border-[0.1rem] px-[0.7rem] py-[0.27rem] rounded-full bg-white flex justify-between mb-[0.4rem]'>

        <p className=''>
          {quizData.quizName}
        </p>
        
        <img 
          className='h-[1.5rem]' 
          src={
            userRole === "admin" ? `https://www.svgrepo.com/show/527439/settings.svg` 
            : userRole === "user" ? `https://www.svgrepo.com/show/294571/play-button-movie.svg` : null
            
          }
          onClick={()=>{HandleNavigateUser()}}
        > 
        </img>
        
    </div>
>>>>>>> 8756d6c46283d2d51b5b4418c591822efb390e2b
  )
}

export default QuizListComp