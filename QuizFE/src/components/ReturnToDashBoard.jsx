import { Link } from "react-router-dom"


const ReturnToDashBoard = () => {

    return (
        <Link to={"/DashBoard"}>
            <button className="bg-yellow-600 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white flex items-end"
            >
                Return
            </button>
        </Link>
    )
}

export default ReturnToDashBoard