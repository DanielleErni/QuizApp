import { useState } from "react"
import { UserAuthenticate } from "../axios/axiosConfig"
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setUser } from "../redux/userSlice"

const LoginForm = () => {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendData = async() =>{
    if(Username == '' || Password == ''){
      alert('Please fill in all fields')
      return
    }
    await UserAuthenticate.post('',{
      Username: Username,
      Password: Password
    })
      .then(res=>{
        dispatch(setUser({Username: Username, Role: res.data}));
        if (res.data) {navigate('/Dashboard')}
      })
      .catch(err=>console.log(err.response.data))
  }

  return (
    <div className="bg-[#D9D9D9] h-min m-[1.5rem] rounded-md pb-[0.9rem] pt-[0.8rem] px-[1rem] flex flex-col">


      <div>
        <label className="text-black mb-[0.3rem]">
          Username:
        </label>
        <input className="rounded-md mb-[0.4rem] text-black border-[0.1rem] border-black" 
          type="text"
          value={Username}
          required
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
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
       
      </div>

      <div className="flex justify-end">
        <button
          className="text-black bg-green-500 p-[0.3rem] px-[0.5rem] rounded-md border-[0.1rem] border-black"
          onClick={()=>{sendData()}}
          
        >
          Login
        </button>
      </div>
      

    </div>
  )
}

export default LoginForm