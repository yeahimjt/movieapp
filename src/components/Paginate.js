import React from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Paginate = ({increment, decrement, page}) => {
  return (
    <>
    <div className="flex gap-4 items-center">
        <AiOutlineArrowLeft  lineArrowLeft className={page===1 ? "text-gray-400" : "hover:cursor-pointer hover:text-slate-500 hover:scale-110"} size={24} onClick={decrement}></AiOutlineArrowLeft>
            <p className="text-2xl">{page}</p>
        <AiOutlineArrowRight className={"hover:cursor-pointer hover:text-slate-500 hover:scale-110"} size={24} onClick={increment}></AiOutlineArrowRight>
    </div>
    </>
  )
}

export default Paginate