import { Link } from "react-router-dom"

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
  )
}

export default QuizListComp