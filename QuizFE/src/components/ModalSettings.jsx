

const ModalSettings = () => {
  return (
    <div 
        className="rounded-md absolute right-[3.3rem] top-[3.1rem] bg-gray-500 h-min p-[0.4rem] flex flex-col border-black border-[0.1rem]"
        
    >
        <button className="bg-blue-800 rounded-md mb-[0.3rem] border-black border-[0.1rem] text-white">
            Edit
        </button>
        <button className="rounded-md bg-red-600 px-[0.3rem] border-black border-[0.1rem] text-white">
            Delete
        </button>
    </div>
  )
}

export default ModalSettings