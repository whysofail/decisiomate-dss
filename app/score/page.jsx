import React from 'react'
import Score from '@/components/Score/Score'

const Scores = () => {
  return (
    <div>
         <div className="flex flex-col flex-wrap min-h-screen pt-28 sm:pt-12 bg-white">
      <div className="w-full sm:w-[50%] self-center">
        <div className="self-start">
          <h1 className="text-3xl font-semibold">Add your Criteria</h1>
          <small>Add Criteria to be calculated.</small>
        </div>
        <div className="">
         <Score />    
        </div>
        
       
      </div>
    </div>
    </div>
  )
}

export default Scores