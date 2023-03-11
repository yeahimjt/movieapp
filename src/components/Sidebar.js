import React from 'react'
import { MdOutlineExplore, MdPerson4 } from 'react-icons/md'
import { FiTrendingUp } from 'react-icons/fi'
import { AiFillStar, AiFillHome } from 'react-icons/ai'


import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col w-[300px] py-10 px-4 animate-slideleft bg-slate-900">
      <div className="flex justify-center items-center">
      <svg width="80" height="84" viewBox="0 0 80 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.5 2H1V83H23V53.5H40V37.5H23V21.5H50.5V2Z" fill="white" stroke="white"/>
        <path d="M44 83V25H79.5V53.5H69.5V37.5H59.5V83H44Z" fill="white" stroke="white"/>
        <path d="M65 0L67.6942 8.2918H76.4127L69.3593 13.4164L72.0534 21.7082L65 16.5836L57.9466 21.7082L60.6407 13.4164L53.5873 8.2918H62.3058L65 0Z" fill="white"/>
      </svg>

      </div>
      <div className="flex flex-col h-full mt-24 p-6 items-center gap-8 text-white animate-wave">
        <NavLink to="/"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><AiFillHome/>Home</div></NavLink>
        <NavLink to="/discover"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><MdOutlineExplore/>Discover</div></NavLink>
        <NavLink to="/trending"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><FiTrendingUp/>Trending</div></NavLink>
        <NavLink to="/people"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><MdPerson4/>People</div></NavLink>
        <NavLink to="/reviews"><div className="flex gap-4 justify-start items-center hover:text-gray-400"><AiFillStar/>Reviews</div></NavLink>
      </div>
    </div>
  )
}

export default Sidebar