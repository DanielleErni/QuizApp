import { useState, useEffect } from "react";
import NavButton from "../components/NavButton";
import QuizListComp from "../components/QuizListComp";
import { useSelector } from "react-redux";
import { AxiosGetQuizList } from "../axios/axiosConfig";

const Dashboard = () => {
  const [IsNavDataVisible, SetIsNavDataVisible] = useState(false);
  const [QuizList, setQuizList] = useState([]);

  const user = useSelector((state) => state.user.User);

  const toggleNavButton = () => {
    SetIsNavDataVisible(!IsNavDataVisible);
  };

  const getQuizList = async () => {
    await AxiosGetQuizList.get()
      .then((res) => {
        setQuizList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen z-10 bg-indigo-900" // Indigo background to match palette
        onClick={() => {
          if (IsNavDataVisible) SetIsNavDataVisible(false);
        }}
      >
        <NavButton
          toggleNavButton={toggleNavButton}
          IsNavDataVisible={IsNavDataVisible}
          userRole={user.Role}
        />

        <div
          className={`min-h-screen rounded-md flex flex-col p-6 transition-all duration-500 ease-in-out bg-gray-900 text-gray-300 ${
            IsNavDataVisible ? "blur-sm" : "blur-none"
          }`}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-100">Dashboard</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {QuizList.length > 0 ? (
              QuizList.map((el, index) => (
                <div
                  key={index}
                  className="bg-indigo-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-out"
                >
                  <QuizListComp quizData={el} userRole={user.Role} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400">No quizzes available.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
