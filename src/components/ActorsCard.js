import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
const ActorsCard = ({ data, actor, i }) => {

  return (
    <>
    <Link to={`/people/${actor?.id}`}>
    <div className="w-[307px] h-[500px] bg-gray-100 p-10 shadow-2xl shadow-white-500 animate-slideup  backdrop-blur-sm hover:bg-slate-900 hover:drop-shadow-4xl hover:scale-105 transition-all hover:cursor-pointer hover:text-white">
          <div className="">
            <div className="flex justify-center items-center">
              <img className="w-[300px] h-[300px] object-fill" src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} type="img/jpg" alt="movie poster"/>
            </div>
            <div className="p-2">
              <div className="flex justify-between" key={i} value={actor.id}>
                <p>{actor.name}</p>
                <div className="flex justify-center items-center gap-1">
                  <AiFillStar className="text-yellow-500"/>
                  <p>{Math.round(actor.popularity)}</p>
                </div>
              </div>
            <div className="text-sm">Known {actor.known_for_department}</div>
            <h1 className="text-[12px] mt-3 italic text-gray-400 overflow-ellipsis">{actor?.known_for?.map((appear)=> {
                return (
                    <p key={appear.id} className="pt-1">{appear.title ? appear.title : appear.name}</p>
                )
            })}</h1>
            </div>
          </div>
    </div>
    </Link>
    </>
  )
}

export default ActorsCard