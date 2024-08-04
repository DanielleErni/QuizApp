import { Link } from "react-router-dom"

const QuizListComp = ({quizData, userRole}) => {
  return (
    <>
      <Link to={userRole === 'admin' ? `/Edit/${quizData.id}` : `/Play/${quizData.id}`} state={{quizData}}>
        <div className='border-black border-[0.1rem] px-[0.7rem] py-[0.27rem] rounded-md bg-white flex justify-between mb-[0.8rem] items-center s:mb-[1.2rem]'>
          <p className='s:text-[1.2rem] m:text-[1.5rem] l:text-[1.5rem] xl:text-[2rem]'>
            {quizData.quizName}
          </p>
          <img 
            className='h-[1.5rem] m:h-[2.5rem] xl:h-[3rem]' 
            src={
              userRole === "admin" ? `https://www.svgrepo.com/show/527439/settings.svg` 
              : userRole === "user" ? `https://www.svgrepo.com/show/294571/play-button-movie.svg` 
              : null
            }
          /> 
        </div>
      </Link>
    </>
  )
}

export default QuizListComp