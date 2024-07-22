
import { axiosSample } from "./axios/axiosConfig"
import { useState, useEffect } from "react"

const App = () => {

  const [data, setData] = useState([])

  const sample = async()=>{
    await axiosSample()
      .then(res=>setData(res.data))
      .catch(err=>console.log(err))
  }
  

  useEffect(()=>{
    sample()
    console.log(data)
  },[])
  console.log(data)

  return (
    <div className='font-bold'>App</div>
  )
}

export default App