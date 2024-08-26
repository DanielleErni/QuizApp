import { useState, useRef, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles
import ReturnToDashBoard from "../components/ReturnToDashBoard";
import { AxiosCreateQuizList, AxiosUpdateQuizList } from "../axios/axiosConfig";
import DeleteQuizButton from "../components/DeleteQuizButton";

const ReactHookFormsTemp = ({ submitType }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const quizData = location.state?.quizData || { quiz: [], quizName: "" };

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false); // New state for submit modal
  const [removeIndex, setRemoveIndex] = useState(null);
  const modalRef = useRef(null);
  const submitModalRef = useRef(null); // New ref for submit modal

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
    toast.success("Action has been successfully executed", {
      position: "top-center",
      autoClose: 1000, // Toast duration
      className: "text-xs sm:text-sm bg-gray-900 border border-gray-600 text-gray-200 p-3 rounded-md shadow-lg mt-[3.5rem] mx-[2rem]", // Background, border, and padding
      bodyClassName: "text-gray-100",
      toastClassName: "bg-gray-800 border border-gray-600 text-gray-200 p-3 rounded-md shadow-lg", // Background, border, and padding
      onClose: () => {
        setShowConfirmModal(false); // Close the confirmation modal after success
        navigate("/Dashboard"); // Navigate after the toast closes
      }
    });
  };
  

  const handleRemoveClick = (index) => {
    setRemoveIndex(index);
    setShowConfirmModal(true); // Show confirmation modal when attempting to remove
  };

  const confirmRemove = () => {
    remove(removeIndex); // Remove the question
    setShowConfirmModal(false); // Close the modal after confirmation
  };

  const cancelRemove = () => {
    setShowConfirmModal(false); // Close the modal without removing
  };

  const handleClickOutside = (e) => {
    // Close modal if clicked outside the confirm modal
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      cancelRemove();
    }
    // Close submit modal if clicked outside the submit modal
    if (submitModalRef.current && !submitModalRef.current.contains(e.target)) {
      cancelSubmit();
    }
  };

  useEffect(() => {
    if (showConfirmModal || showSubmitModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showConfirmModal, showSubmitModal]);

  const handleFormSubmit = () => {
    console.log("Form submit clicked");
    setShowSubmitModal(true); // Trigger submit confirmation modal
  };

  const confirmSubmit = async (data) => {
    console.log("Submit confirmed with data:", data);
    setShowSubmitModal(false); // Close submit modal after confirmation

    if (data.quiz.length === 0) {
      toast.error("Please add at least one question", {
        position: "top-center",
        autoClose: 1000, // Toast duration
        className: "text-xs sm:text-sm bg-gray-900 border border-gray-600 text-gray-200 p-3 rounded-md shadow-lg mt-[3.5rem] mx-[2rem]", // Background, border, and padding
        bodyClassName: "text-gray-100",
        toastClassName: "bg-gray-800 border border-gray-600 text-gray-200 p-3 rounded-md shadow-lg", // Background, border, and padding
      });
      return;
    }

    try {
      if (submitType === "Create") {
        await AxiosCreateQuizList.post("", data);
        SuccessActionAlert();
      } else if (submitType === "Edit") {
        await AxiosUpdateQuizList.put(`/${id}`, data);
        SuccessActionAlert();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cancelSubmit = () => {
    setShowSubmitModal(false); // Close submit modal without submitting
  };

  return (
    <>
      <ToastContainer pauseOnHover={false} hideProgressBar={true} /> {/* Add ToastContainer here */}
      <div className="bg-gray-800 rounded-md min-h-screen p-4 s:p-6 m:p-8 l:p-10 xl:p-12 text-gray-200">
        <div className="flex justify-between items-center mb-6">
          <ReturnToDashBoard />
          {submitType === "Edit" && (
            <DeleteQuizButton
              id={id}
              SuccessActionAlert={SuccessActionAlert}
              ConfirmationAlert={() => setShowConfirmModal(true)}
            />
          )}
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-6">
            <label className="block text-teal-400 font-semibold mb-2">Quiz Name</label>
            <input
              {...register("quizName", { required: "Quiz Name is required" })}
              className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-teal-500"
            />
            {errors.quizName && (
              <p className="text-red-500 mt-2">{errors.quizName?.message}</p>
            )}
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="mb-6 p-4 rounded-lg bg-gray-700 border border-gray-600">
              <label className="block text-teal-400 font-semibold mb-2">Question {index + 1}</label>
              <input
                {...register(`quiz.${index}.question`, { required: "Question is required" })}
                defaultValue={field.question}
                className="w-full p-3 rounded-md bg-gray-600 text-gray-200 border border-gray-500 mb-4 focus:ring-teal-500"
              />
              {errors.quiz?.[index]?.question && (
                <p className="text-red-500">{errors.quiz[index]?.question?.message}</p>
              )}

              <label className="block text-teal-400 font-semibold mb-2">Answer</label>
              <input
                {...register(`quiz.${index}.answer`, { required: "Answer is required" })}
                defaultValue={field.answer}
                className="w-full p-3 rounded-md bg-gray-600 text-gray-200 border border-gray-500 focus:ring-teal-500"
              />
              {errors.quiz?.[index]?.answer && (
                <p className="text-red-500 mt-2">{errors.quiz[index]?.answer?.message}</p>
              )}

              <button
                type="button"
                onClick={() => handleRemoveClick(index)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md border border-red-700 transition-all duration-200"
              >
                Remove Question
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => append({ question: "", answer: "" })}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md border border-green-700 transition-all duration-200"
            >
              Add Question
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md border border-blue-700 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>

        {showConfirmModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
              ref={modalRef}
              className="bg-gray-800 text-gray-200 p-6 rounded-md shadow-lg max-w-sm w-full mx-[1.2rem]"
            >
              <p className="text-sm md:text-lg mb-4">
                Are you sure you want to remove this question? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                  onClick={confirmRemove}
                >
                  Yes, Remove
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                  onClick={cancelRemove}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showSubmitModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
              ref={submitModalRef} // Ref for the submit modal
              className="bg-gray-800 text-gray-200 p-6 rounded-md shadow-lg max-w-sm w-full mx-[1.2rem]"
            >
              <p className="text-sm md:text-lg mb-4 ">
                Are you sure you want to submit this quiz? This action will save your changes.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                  onClick={handleSubmit(confirmSubmit)}
                >
                  Yes, Submit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                  onClick={cancelSubmit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReactHookFormsTemp;
