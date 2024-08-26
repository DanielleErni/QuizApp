import { useState, useRef, useEffect } from "react";
import { AxiosDeleteQuizList } from "../axios/axiosConfig";

const DeleteQuizButton = ({ id, SuccessActionAlert }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const modalRef = useRef(null);

  const DeleteQuizData = async () => {
    setShowConfirmModal(false); // Hide modal after confirmation
    try {
      const res = await AxiosDeleteQuizList.delete(`/${id}`);
      console.log(res.data);
      SuccessActionAlert(); // Trigger success action on deletion
    } catch (err) {
      console.error(err);
    }
  };

  const cancelDelete = () => {
    setShowConfirmModal(false); // Hide the confirmation modal on cancel
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      cancelDelete(); // Close modal if clicked outside
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
    <>
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md border border-red-700 transition-all duration-200 flex items-center"
        onClick={() => setShowConfirmModal(true)}
      >
        Delete Quiz
      </button>

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="bg-gray-800 text-gray-200 p-6 rounded-md shadow-lg max-w-sm w-full mx-[1.5rem]"
          >
            <p className="text-sm md:text-lg mb-4">
              Are you sure you want to delete this quiz? This action cannot be undone.
            </p>
            <div className="flex justify-around gap-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={DeleteQuizData}
              >
                Yes, Delete
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteQuizButton;
