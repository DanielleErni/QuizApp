import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const ReturnToDashboard = () => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const modalRef = useRef(null);

  const handleReturn = () => {
    setShowConfirmModal(true);
  };

  const confirmReturn = () => {
    navigate("/Dashboard");
  };

  const cancelReturn = () => {
    setShowConfirmModal(false);
  };

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      cancelReturn();
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
    <div>
      <button
        onClick={handleReturn}
        className="bg-indigo-500 hover:bg-indigo-600 text-gray-200 font-semibold px-4 py-2 rounded-md shadow-md border border-teal-700 transition-all duration-100 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Return
      </button>

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="bg-gray-800 text-gray-200 p-6 rounded-md shadow-lg max-w-sm w-full mx-[2rem] xs:mx-[3rem] s:mx-[4rem]"
          >
            <p className="text-sm md:text-lg mb-4">
              You have unsaved changes. Are you sure you want to return to the dashboard without saving?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={confirmReturn}
              >
                Yes
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={cancelReturn}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnToDashboard;
