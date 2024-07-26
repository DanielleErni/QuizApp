import { useState } from "react"

const LoginForm = () => {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')


  return (
    <div className="bg-[#D9D9D9] h-min m-[1.5rem] rounded-md pb-[0.9rem] pt-[0.8rem] px-[1rem] flex flex-col">


      <div>
        <label className="text-black mb-[0.3rem]">
          Username:
        </label>
        <input className="rounded-md mb-[0.4rem] text-black border-[0.1rem] border-black" 
          type="text"
          value={Username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      
          
      <div>
        <label className="text-black mb-[0.3rem]">
          Password:
        </label>

        <input className="rounded-md text-black mb-[0.6rem] border-[0.1rem] border-black" 
          type="password"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
        />
       
      </div>

      <div className="flex justify-end">
        <button
          className="text-black bg-green-500 p-[0.3rem] px-[0.5rem] rounded-md border-[0.1rem] border-black"
        >
          Login
        </button>
      </div>
      

    </div>
  )
}

export default LoginForm