import ModalSettings from "./ModalSettings"

const QuizListComp = ({ quizData, HandleNavigateUser, userRole, ToggleSettings, handleToggleSetting }) => {
  return (
    <div className='border-black border-[0.1rem] px-[0.7rem] py-[0.27rem] rounded-full bg-white flex justify-between mb-[0.4rem]'>
      <p className=''>
        {quizData.quizName}
      </p>

      <img 
        className='h-[1.5rem]' 
        src={
          userRole === "admin" ? `https://www.svgrepo.com/show/527439/settings.svg` 
          : userRole === "user" ? `https://www.svgrepo.com/show/294571/play-button-movie.svg` 
          : null
        }
        onClick={() => { userRole === "admin" ? handleToggleSetting() : HandleNavigateUser(); }}
      /> 

      {ToggleSettings && <ModalSettings />}
    </div>
  )
}

export default QuizListComp