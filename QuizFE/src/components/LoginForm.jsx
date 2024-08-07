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
    if (Username == "" || Password == "") {
      alert("Please fill in all fields");
      return;
    }
    await UserAuthenticate.post("", {
      Username: Username,
      Password: Password,
    })
      .then((res) => {
        dispatch(setUser({ Username: Username, Role: res.data }));
        if (res.data) {
          navigate("/Dashboard");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorMsg("Username/Password Incorrect");
        }
      });
  };

  useEffect(() => {
    if (user.Role === "admin" || user.Role === "user") {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <div className="bg-gray-700 relative bottom-[-6.7rem] h-min m-[1.5rem] rounded-md pb-[0.9rem] pt-[0.8rem] px-[1rem] flex flex-col m:bottom-[-9rem] l:bottom-[-11rem]">
      {errorMsg && <span className="text-red-300 text-center mb-[0.5rem]">{errorMsg}</span>}
      <div className="s:flex flex-row gap-[0.5rem]">
        <label className="text-white mb-[0.3rem]">Username:</label>
        <input
          className="rounded-md mb-[0.6rem] text-black border-[0.1rem] border-black w-full p-[0.2rem] px-[0.2rem]"
          type="text"
          value={Username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="s:flex flex-row gap-[0.75rem]">
        <label className="text-white mb-[0.3rem]">Password:</label>

        <input
          className="rounded-md text-black mb-[0.6rem] border-[0.1rem] border-black w-full p-[0.2rem] px-[0.2rem]"
          type="password"
          value={Password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <button
          className="text-white bg-green-500 p-[0.3rem] px-[0.5rem] rounded-md border-[0.1rem] border-black"
          onClick={() => {
            sendData();
          }}
        >
          Login
        </button>
      </div>

      <div className="flex justify-end mt-[0.3rem]">
        <button
          className="text-white bg-gray-500 p-[0.3rem] px-[0.5rem] rounded-md border-[0.1rem] border-black"
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
