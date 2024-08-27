import { useLocation, useNavigate } from "react-router-dom";
import ReturnToDashBoard from "../components/ReturnToDashBoard";
import { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import Confetti from "react-confetti";
import 'react-toastify/dist/ReactToastify.css';

const TakeQuiz = () => {
    const location = useLocation();
    const quizData = location.state.quizData;
    const navigate = useNavigate();

    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState(quizData.quiz.map(() => ""));
    const [showConfetti, setShowConfetti] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false); // Disable all interaction
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const modalRef = useRef(null);

    // Handle window size for Confetti to prevent scrollbar issues
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        setShowConfirmModal(true);
    };

    const confirmSubmit = () => {
        let newScore = 0;
        quizData.quiz.forEach((el, index) => {
            if (el.answer.toLowerCase() === answers[index].toLowerCase()) {
                newScore += 1;
            }
        });
        setScore(newScore);

        // Determine the message and toast type based on the score
        let message = "";
        let toastType = toast.success; // Default to success
        if (newScore === 0) {
            message = "Try again!";
            toastType = toast.error;
        } else if (newScore < quizData.quiz.length / 2) {
            message = "Nice try!";
            toastType = toast.warning;
        } else if (newScore < quizData.quiz.length) {
            message = "Good job!";
            toastType = toast.success;
        } else {
            message = "Congrats! You got a perfect score!";
            toastType = toast.success;
        }

        // Disable all buttons/inputs until confetti & toast finish
        setIsDisabled(true);
        setShowConfetti(true);

        toastType(`${message} Your score is: ${newScore}/${quizData.quiz.length}`, {
            position: "top-center",
            autoClose: 2500,
            className: "text-xs sm:text-sm bg-gray-900 border border-gray-600 text-gray-200 p-3 rounded-md shadow-lg ",
            bodyClassName: "text-gray-100",
            toastClassName: "bg-white p-2 sm:p-4 rounded-md shadow-lg text-xs sm:text-sm",
            onClose: () => {
                setShowConfetti(false); // Stop confetti after toast
                navigate("/dashboard");
            }
        });

        setShowConfirmModal(false); // Hide the confirmation modal
    };

    const cancelSubmit = () => {
        setShowConfirmModal(false); // Hide the confirmation modal
    };

    // Close modal when clicking outside
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            cancelSubmit();
        }
    };

    useEffect(() => {
        if (showConfirmModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showConfirmModal]);

    return (
        <div className={`bg-gray-900 text-gray-300 rounded-md p-6 min-h-screen flex flex-col ${isDisabled ? 'pointer-events-none' : ''}`}>
            {showConfetti && (
                <Confetti
                    width={windowDimensions.width-100}
                    height={windowDimensions.height}
                    recycle={false}
                    numberOfPieces={400}
                />
            )}

            <ToastContainer
                className="top-4 left-1/2 transform -translate-x-1/2 w-4/5 sm:w-3/5 lg:w-2/5"
                toastClassName="bg-white p-2 sm:p-4 rounded-md shadow-lg text-xs sm:text-sm"
                bodyClassName="text-gray-900"
                closeButton={false}
            />

            {showConfirmModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div
                        ref={modalRef}
                        className="bg-gray-800 text-gray-200 p-4 sm:p-6 rounded-md shadow-lg max-w-sm w-full mx-[2.2rem] xs:mx-[3.5rem] s:mx-[4.8rem]"
                    >
                        <p className="text-sm sm:text-lg mb-4">Are you sure you want to finalize the test?</p>
                        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
                            <button
                                className="bg-teal-500 hover:bg-teal-600 text-gray-200 font-semibold px-3 py-1 rounded-md border border-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-xs sm:text-sm"
                                onClick={confirmSubmit}
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-gray-200 font-semibold px-3 py-1 rounded-md border border-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-xs sm:text-sm"
                                onClick={cancelSubmit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-start mb-4">
                <ReturnToDashBoard />
            </div>

            <p className="text-2xl font-bold mb-4 text-center">
                {quizData.quizName}
            </p>

            {quizData.quiz.map((el, index) => (
                <div
                    key={index}
                    className="border border-gray-600 mb-4 p-4 flex flex-col rounded-md bg-gray-800"
                >
                    <p className="mb-2 text-lg">{index + 1}. {el.question}</p>
                    <input
                        id={`question-${el.id}`}
                        className="bg-gray-700 text-gray-200 rounded-md p-2"
                        value={answers[index]}
                        onChange={(e) => handleInputChange(e, index)}
                        disabled={isDisabled} // Disable inputs if interactions are locked
                    />
                </div>
            ))}

            <div className="flex justify-end mt-4">
                <button
                    className={`bg-teal-500 hover:bg-teal-600 text-gray-200 font-semibold px-4 py-2 rounded-md border border-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 ${isDisabled ? 'opacity-50' : ''}`}
                    onClick={handleSubmit}
                    disabled={isDisabled} // Disable the button
                >
                    Finalize Test
                </button>
            </div>
        </div>
    );
};

export default TakeQuiz;