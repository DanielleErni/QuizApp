import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import ReturnToDashBoard from "../components/ReturnToDashBoard";
import { AxiosCreateQuizList, AxiosUpdateQuizList } from "../axios/axiosConfig";
import DeleteQuizButton from "../components/DeleteQuizButton";

const ReactHookFormsTemp = ({submitType}) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const location = useLocation();
  const quizData = location.state?.quizData || { quiz: [], quizName: "" };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quizName: quizData.quizName,
      quiz: quizData.quiz,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "quiz",
  });

  const SuccessActionAlert = () => {
    alert("Action has been succesfully executed")
    navigate("/Dashboard")
  }

  const ConfirmationAlert = () =>{
    return confirm("Are you sure you want to perform this action?");
  }

  const onSubmit = async (data) => {
    if (data.quiz == '') {
      alert("pls add atleast one question");
      return;
    }
    if(submitType === "Create"){
      await AxiosCreateQuizList.post('', data)
        .then(res=>{console.log(res.data)
          SuccessActionAlert()
        })
        .catch(err=>console.log(err))
    }
    else if(submitType === "Edit"){
      await AxiosUpdateQuizList.put(`/${id}`, data)
        .then(
          res=>{
            // console.log(res.data)
            SuccessActionAlert()
          }
        )
        .catch(err=>console.log(err))
    }
  };
  
  return (
    <div className=" rounded-md  min-h-screen">
      <div
        className="bg-[#464545] p-[1rem] rounded-md min-h-screen s:p-[1.5rem] m:p-[2rem] l:p-[2.5rem] xl:p-[3rem]"
      >
        

        <div className="flex justify-between mb-[1rem]">
          <ReturnToDashBoard />
          {
            submitType === "Edit" ? 
            <DeleteQuizButton id={id} SuccessActionAlert={SuccessActionAlert} ConfirmationAlert={ConfirmationAlert}/>
            :
            null
          }
          
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="text-white block mb-1">Quiz Name</label>
            <input
              {...register("quizName", { required: "Quiz Name is required" })}
              className="w-full p-2 rounded-md"
            />
            {errors.quizName && (
              <p className="text-red-500">{errors.quizName?.message}</p>
            )}
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="mb-4 p-2 border border-white rounded">
              <label className="text-white block mb-1">
                Question {index + 1}
              </label>
              <input
                {...register(`quiz.${index}.question`, {
                  required: "Question is required",
                })}
                defaultValue={field.question} // Use defaultValue here
                className="w-full p-2 rounded-md"
              />
              {errors.quiz?.[index]?.question && (
                <p className="text-red-500">
                  {errors.quiz[index]?.question?.message}
                </p>
              )}

              <label className="text-white block mb-1">Answer</label>
              <input
                {...register(`quiz.${index}.answer`, {
                  required: "Answer is required",
                })}
                defaultValue={field.answer} // Use defaultValue here
                className="w-full p-2 rounded-md"
              />
              {errors.quiz?.[index]?.answer && (
                <p className="text-red-500">
                  {errors.quiz[index]?.answer?.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-600 text-white px-2 py-1 rounded mt-2 border-black border-[0.1rem]"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => append({ question: "", answer: "" })}
              className="bg-green-600 text-white px-2 py-1 rounded mb-4 border-black border-[0.1rem]"
            >
              Add Question
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-2 py-1 rounded mb-4 border-black border-[0.1rem]"
            >
              Submit
            </button>
          </div>
        </form>
          
      </div>
    </div>
  );
};

export default ReactHookFormsTemp;
