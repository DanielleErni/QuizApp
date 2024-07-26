import NavButton from "../../components/NavButton"
import QuizListComp from "../../components/QuizListComp"


const AdminDashboard = () => {
    var sampleProps = [
        {
          Title: "sample quiz name",
          Questions: ["sample"],
          Answers: ["sample"],
          Role: "user",
          Logo: "https://www.svgrepo.com/show/527439/settings.svg"
        }
      ]
      
    return (
    <div className="p-[1rem]">
        <NavButton/>
        <div className="bg-[#464545] h-[92.9vh] rounded-md p-[1rem]">
        <QuizListComp sampleProps={sampleProps}/>
        </div>
    </div>
    )
}

export default AdminDashboard