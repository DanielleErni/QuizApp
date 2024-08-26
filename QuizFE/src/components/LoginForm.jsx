import { useEffect, useState } from "react";
import { UserAuthenticate } from "../axios/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";

const LoginForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.User);

  const sendData = async () => {
    if (Username === "" || Password === "") {
      setErrorMsg("Please fill in all fields");
      return;
    }
    try {
      const res = await UserAuthenticate.post("", { Username, Password });
      dispatch(setUser({ Username, Role: res.data }));
      navigate("/Dashboard");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setErrorMsg("Username/Password Incorrect");
      } else {
        setErrorMsg("An error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (user.Role === "admin" || user.Role === "user") {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto ">
      {errorMsg && (
        <div className="bg-red-500 text-white p-3 rounded-lg mb-4 text-center">
          {errorMsg}
        </div>
      )}
      <h2 className="text-white text-3xl font-extrabold mb-6 text-center">Welcome To QuizWiz!</h2>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">Username</label>
        <input
          type="text"
          className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-600 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          value={Username}
          onChange={(e) => {setUsername(e.target.value); setErrorMsg("");}}
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-300 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-600 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          value={Password}
          onChange={(e) => {setPassword(e.target.value); setErrorMsg("");}}
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-between items-center space-x-4">
        <button
          className="w-full py-6 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 m:py-3"
          onClick={sendData}
        >
          Login
        </button>
        <button
          className="w-full py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 xs:px-3 "
          onClick={() => {
            dispatch(setUser({ Username: "Guest", Role: "user" }));
            navigate("/Dashboard");
          }}
        >
          Login As Guest
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
