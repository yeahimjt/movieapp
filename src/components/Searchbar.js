import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
const Searchbar = () => {

  const [search, setSearch] = useState(null)
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(null)
  const [animate, setAnimate] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false)
    },1000)
    return () => clearTimeout(timer);
  },)

  const updateSearch = (e) => {
    setSearch(e.target.value)

  } 
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      initiateSearch()
    }
  }

  const initiateSearch = () => {
    if (search) {
      setError(null)
      setSearch("")
      navigate(`/search/${search}`)
    }
    else {
      setOpen(true)
      setAnimate(true)
      setError("Oops! You forgot to add something in the search bar.")
    }
  }
  return (
    <>
    <div className="flex w-full justify-center items-center p-4 animate-slidedown">
      <input value={search} className={animate ? 'w-[50%] border-2 focus:border-slate-900 max-w-[800px] border-none shadow-2xl bg-gray-100 px-6 py-4 text-xs animate-shake' : 'w-[50%] border-2 focus:border-slate-900 max-w-[800px] border-none shadow-2xl bg-gray-100 px-6 py-4 text-xs'} type="text" placeholder="Search by name or title..." onKeyDown={handleKeyDown} onChange={(e)=>updateSearch(e)}/>
      <BiSearch className="relative -left-6 hover:cursor-pointer hover:scale-110" onClick={initiateSearch}/>
    </div>
    {error && open && <div className="flex flex-row  bg-slate-800 absolute bottom-0 right-0 z-10 m-4 mx-8 rounded-xl justify-center items-center p-4 gap-4 animate-slideright"><h1 className='text-sm text-red-400'>{error}</h1><AiFillCloseCircle size={20} className="text-white hover:cursor-pointer hover:scale-110" onClick={()=>setOpen(!open)}/></div>}
    </>
  )
}

export default Searchbar