import {useForm, useFieldArray} from "react-hook-form"
import { useNavigate, Link } from "react-router-dom";
import { AxiosCreateQuizList } from "../axios/axiosConfig";

const CreateQuiz = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            quiz: [{ question: '', answer: '' }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'quiz'
    });

    const onSubmit = async(data) => {
        console.log(data);
        // await AxiosCreateQuizList.post('', data)
        //     .then(res=>{console.log(res.data)})
        //     .catch(err=>console.log(err))
    };
    

  return (
    <div className="">
        
        <div className="bg-[#464545] min-h-screen rounded-md p-[1rem]">
            
            <Link to={"/DashBoard"}>
                <button className="bg-yellow-600 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white flex items-end"
                >
                    Return
                </button>
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[0.7rem] items-end "
            >
                <div>
                    <label htmlFor="quizName">Quiz Name:</label>
                    <input
                        className="rounded-md px-[0.2rem] w-full mt-[0.2rem] border-black border-[0.1rem]"
                        id="quizName"
                        {...register('quizName', { required: true })}
                    />
                    {errors.quizName && <p className="text-red-600">Quiz Name is required!</p>}
                </div>

                {fields.map((field, index)=>(
                    <div key={field.id}
                        className="flex flex-col gap-[0.2rem] items-end"
                    >
                        
                        {index != 0 && ( 
                        <button type="button" onClick={() => remove(index)}
                        className="bg-red-700 py-[0.4rem] px-[1rem] rounded-md border-black border-[0.1rem] text-white"
                            >
                                Remove
                        </button>
                        )}

                        <div>
                            <label htmlFor="question">Question {index+1}:</label>
                            <input
                                className="w-full rounded-md px-[0.2rem] border-black border-[0.1rem] mt-[0.2rem]"
                                id={`quiz[${index}].question`}
                                {...register(`quiz[${index}].question`, { required: true })}
                            />
                            {errors.quiz?.[index]?.question && <p className="text-red-600">Question is required!</p>}
                        </div>

                        <div>
                            <label htmlFor="answer">Answer:</label>
                            <input
                                className="w-full rounded-md px-[0.2rem] mt-[0.2rem] border-black border-[0.1rem]"
                                id={`quiz[${index}].answer`}
                                {...register(`quiz.[${index}].answer`, { required: true })}
                            />
                            {errors.quiz?.[index]?.answer && <p className="text-red-600">Answer is required!</p>}
                        </div>

                       
                        
                    </div>
                ))}

                <button onClick={() => append({ question: '', answer: '' })} className="bg-blue-700 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white">
                    Add
                </button>
                <button className="bg-green-700 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white" type="submit">
                    Submit
                </button>
            </form>
        </div>

    </div>
  )
}

export default CreateQuiz