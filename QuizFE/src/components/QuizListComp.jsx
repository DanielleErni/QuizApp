import { Link } from "react-router-dom";

const QuizListComp = ({ quizData, userRole }) => {
  return (
    <Link to={userRole === 'admin' ? `/Edit/${quizData.id}` : `/Play/${quizData.id}`} state={{ quizData }}>
      <div className='bg-white border border-gray-300 rounded-lg flex justify-between p-4 mb-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
        <p className='text-lg font-medium text-gray-800'>
          {quizData.quizName}
        </p>
        <img 
          className='h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10'
          src={
            userRole === "admin" ? `https://www.svgrepo.com/show/527439/settings.svg` 
            : userRole === "user" ? `https://www.svgrepo.com/show/294571/play-button-movie.svg` 
            : null
          }
          alt={userRole === "admin" ? "Edit" : "Play"}
        /> 
      </div>
    </Link>
  );
};

export default QuizListComp;
