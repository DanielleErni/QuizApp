import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { logout } from "../redux/userSlice";

const NavButton = ({ IsNavDataVisible, toggleNavButton, userRole }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const modalRef = useRef(null);
  const navRef = useRef(null);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (
      navRef.current && !navRef.current.contains(e.target) &&
      modalRef.current && !modalRef.current.contains(e.target)
    ) {
      toggleNavButton();
      cancelLogout();
    }
  };

  useEffect(() => {
    if (IsNavDataVisible || showLogoutModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [IsNavDataVisible, showLogoutModal]);

  return (
    <div className="fixed z-50 flex flex-col">
      <button
        className="rotate-45 text-white font-bold h-8 w-8 bg-indigo-600 border border-gray-400 transition-transform duration-500 ease-in-out hover:bg-indigo-700 transform hover:rotate-[360deg]"
        onClick={toggleNavButton}
      >
        {/* Icon */}
      </button>

      {IsNavDataVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      <div
        ref={navRef}
        className={`fixed top-0 left-0 z-50 flex flex-col space-y-4 bg-gray-800 h-screen w-[50vw] p-6 transition-all duration-500 ease-in-out transform m:w-[30vw] l:w-[20vw] ${
          IsNavDataVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {userRole === "admin" && (
          <Link
            to="/CreateQuiz"
            className="bg-teal-500 px-2 py-2 rounded-md text-white text-center transition-colors duration-300 hover:bg-teal-600"
          >
            Create Quiz
          </Link>
        )}
        <button
          className="bg-red-600 px-4 py-2 rounded-md text-white transition-colors duration-300 hover:bg-red-700"
          onClick={handleLogout}
        >
          Log-out
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="bg-gray-800 text-gray-200 p-6 rounded-md shadow-lg max-w-sm w-full mx-[2rem] xs:mx-[3rem] s:mx-[4rem]"
          >
            <p className="text-lg mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={confirmLogout}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={cancelLogout}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavButton;