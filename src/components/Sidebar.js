import React from 'react'
import { MdOutlineExplore, MdPerson4 } from 'react-icons/md'
import { FiTrendingUp } from 'react-icons/fi'
import { AiFillStar, AiFillHome } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col w-[300px] py-10 px-4 animate-slideleft bg-slate-900">
      <h1>Film Review</h1>
      <div className="flex flex-col h-full mt-24 p-6 items-center gap-8 text-white animate-wave">
        <NavLink to="/"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><AiFillHome/>Home</div></NavLink>
        <NavLink to="/discover"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><MdOutlineExplore/>Discover</div></NavLink>
        <NavLink to="/trending"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><FiTrendingUp/>Trending</div></NavLink>
        <NavLink to="/actors"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><MdPerson4/>Actors</div></NavLink>
        <NavLink to="/reviews"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><AiFillStar/>Reviews</div></NavLink>
      </div>
    </div>
  )
}

export default Sidebar