import React from 'react'

const QuizListComp = ({sampleProps}) => {
    //console.log(sampleProps[0])
  return (
    <div className='border-black border-[0.1rem] px-[0.7rem] py-[0.27rem] rounded-full bg-white flex justify-between'>

        <p className=''>
            {sampleProps[0].Title}
        </p>
        
        <img className='h-[1.5rem]' src={sampleProps[0].Logo}></img>
    </div>
  )
}

export default QuizListComp