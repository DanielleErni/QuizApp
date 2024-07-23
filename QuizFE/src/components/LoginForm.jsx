import { useState } from "react"

const LoginForm = () => {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')


  return (
    <div className="bg-[#D9D9D9] h-[10rem] m-[1.5rem] rounded-md p-[0.9rem] flex flex-col">


      <div>
        <label className="text-black mb-[0.3rem]">
          Username:
        </label>
        <input className="rounded-md mb-[0.6rem] text-black" 
          type="text"
          value={Username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      
          
      <div>
        <label className="text-black mb-[0.3rem]">
          Password:
        </label>

        <input className="rounded-md text-black" 
          type="password"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
        />
       
      </div>
      

    </div>
  )
}

export default LoginForm