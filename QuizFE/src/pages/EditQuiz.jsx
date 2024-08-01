import { useLocation, Link } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';

const EditQuiz = () => {
  const location = useLocation();
  const quizData = location.state?.quizData || { quiz: [], quizName: '' }; // Default to empty if undefined

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      quizName: quizData.quizName,
      quiz: quizData.quiz
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'quiz'
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#464545] rounded-md p-[1rem] min-h-screen">
      <Link to="/DashBoard">
        <button className="bg-yellow-600 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white flex items-end">
          Return
        </button>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#464545] rounded-md min-h-screen">
        <div className="mb-4">
          <label className="text-white block mb-1">Quiz Name</label>
          <input
            {...register('quizName', { required: "Quiz Name is required" })}
            className="w-full p-2"
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
              {...register(`quiz.${index}.question`, { required: "Question is required" })}
              defaultValue={field.question} // Use defaultValue here
              className="w-full p-2"
            />
            {errors.quiz?.[index]?.question && (
              <p className="text-red-500">{errors.quiz[index]?.question?.message}</p>
            )}

            <label className="text-white block mb-1">Answer</label>
            <input
              {...register(`quiz.${index}.answer`, { required: "Answer is required" })}
              defaultValue={field.answer} // Use defaultValue here
              className="w-full p-2"
            />
            {errors.quiz?.[index]?.answer && (
              <p className="text-red-500">{errors.quiz[index]?.answer?.message}</p>
            )}

            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-600 text-white px-2 py-1 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ question: '', answer: '' })}
          className="bg-green-600 text-white px-2 py-1 rounded mb-4"
        >
          Add Question
        </button>

        <button type="submit" className="bg-yellow-600 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditQuiz;
