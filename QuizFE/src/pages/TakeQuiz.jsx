import { useLocation, useNavigate } from "react-router-dom"
import ReturnToDashBoard from "../components/ReturnToDashBoard"
import { useState } from "react"


const TakeQuiz = () => {
    const location = useLocation()
    const quizData = location.state.quizData
    const navigate = useNavigate()

    const [score, setScore] =useState(0)
    const [answers, setAnswers] = useState(quizData.quiz.map(() => ""));
    
    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        quizData.quiz.forEach((el, index) => {
            if (el.answer.toLowerCase() === answers[index].toLowerCase()) {
                newScore += 1;
            }
        });
        setScore(newScore);
        alert(`Congrats your score is: ${newScore}/${quizData.quiz.length}`);
        navigate("/dashboard");
    };

  return (
    <div className="bg-[#464545] rounded-md p-[1rem] min-h-screen s:p-[1.5rem] m:p-[2rem] l:p-[2.5rem] xl:p-[3rem]">

        <ReturnToDashBoard/>

        <p
            className="flex justify-center text-[1.7rem] mb-[0.3rem]"
        >
            {quizData.quizName}
        </p>

        

        {quizData.quiz.map((el, index)=>(
            <div key={index}
                className="border-white border mb-[1rem] p-[1rem] flex flex-col rounded-md"
            >
                <p
                    className="mb-[0.7rem]"
                >{index+1}. {el.question}</p>
                <input
                    id={`question-${el.id}`}
                    className="rounded-md p-[0.2rem] px-[0.2rem]"
                    value={answers[index]} 
                    onChange={(e) => handleInputChange(e, index)}></input>
            </div>
        ))}
        <div className="flex justify-end">
            <button
                className="text-white bg-green-700 rounded-md px-[1rem] py-[0.4rem] border-[0.1rem] border-black"
                onClick={()=>{handleSubmit()}}
            >
                Finalized Test
            </button>
        </div>

    </div>
  )
}

export default TakeQuiz