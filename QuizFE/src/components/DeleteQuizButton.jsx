import { AxiosDeleteQuizList } from "../axios/axiosConfig"

const DeleteQuizButton = ({id, SuccessActionAlert}) => {

  const DeleteQuizData = async()=>{
    await AxiosDeleteQuizList.delete(`/${id}`)
      .then(res=>{
        console.log(res.data)
        SuccessActionAlert()
      })
      .catch(err=>{console.log(err)})
  }

  return (

    <button className="bg-red-600 px-[1rem] py-[0.3rem] rounded-md border-black border-[0.1rem] text-white flex items-end"
      onClick={()=>{DeleteQuizData()}}
    >
      Delete Quiz
    </button>
)     

}

export default DeleteQuizButton