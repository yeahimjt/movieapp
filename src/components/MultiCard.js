import React from 'react'
import { AiFillStar } from 'react-icons/ai'


import { useGetMultiQuery } from '../redux/services/tmdbAPI';

import { Link } from 'react-router-dom';

const MultiCard = ({ data, multi, i, filter }) => {
  let page=1
  const {data:movieData, isFetching:movieIsFetching, error:movieError} = useGetMultiQuery({filter,page})
  if (movieIsFetching) return ;
  if (movieError) return <h1>Error</h1>
  console.log(multi)
  let partPath;
  if (multi?.media_type==="movie") {
    partPath = "movies"
  }

  else if(multi?.known_for_department) {
    partPath="people"
  }
  else {
    partPath = "tv"
  }
  console.log(partPath)
  console.log("I am in multicard",multi)
  return (
    <>
    <Link to={`/${partPath}/${multi?.id}`}>
    {multi.profile_path ?
    <div className="w-[307px] h-[500px] bg-gray-100 mb-8 p-10 shadow-2xl shadow-white-500 animate-slideup  backdrop-blur-sm hover:bg-slate-900 hover:drop-shadow-4xl hover:scale-105 transition-all hover:cursor-pointer hover:text-white">
        <div className="">
            <div className="flex justify-center items-center">
            {multi?.profile_path ? <img className="" src={`https://image.tmdb.org/t/p/w200/${multi?.profile_path}`} alt="movie poster"/> : <img className="" src={`https://image.tmdb.org/t/p/w200/${multi?.poster_path}`} alt="movie poster"/>}
            </div>
            <div className="p-2">
                <div className="flex justify-between" key={multi.i} value={multi.id}>
                {multi?.name ? <p>{multi?.name}</p> : <h1>{multi?.title}</h1>}
                <div className="flex justify-center items-center gap-1">
                    <AiFillStar className="text-yellow-500"/>
                    {filter==="people" ? <p>{Math.round(multi.popularity)}</p> : <p>{Math.round(multi.vote_average)}</p>}
                </div>
                </div>
                <h1 className="text-[12px] mt-3 italic text-gray-400">{multi?.genres?.map((genre)=> { return <p key={genre.id}>{genre.name}</p>})}</h1>
            </div>
        </div>
    </div>
    :
    multi.poster_path ? 
    <div className="w-[307px] h-[500px] bg-gray-100 mb-8 p-10 shadow-2xl shadow-white-500 animate-slideup  backdrop-blur-sm hover:bg-slate-900 hover:drop-shadow-4xl hover:scale-105 transition-all hover:cursor-pointer hover:text-white">
        <div className="">
            <div className="flex justify-center items-center">
            {multi?.poster_path ? <img className="" src={`https://image.tmdb.org/t/p/w200/${multi?.poster_path}`} alt="movie poster"/> : <p className="w-[200px] h-[300px]  flex text-red-500 justify-center items-center">Not found</p>}
            </div>
            <div className="p-2">
                <div className="flex justify-between" key={multi.i} value={multi.id}>
                {multi?.name ? <p>{multi?.name}</p> : <h1>{multi?.title}</h1>}
                <div className="flex justify-center items-center gap-1">
                    <AiFillStar className="text-yellow-500"/>
                    {filter==="people" ? <p>{Math.round(multi.popularity)}</p> : <p>{Math.round(multi.vote_average)}</p>}
                </div>
                </div>
                <h1 className="text-[12px] mt-3 italic text-gray-400">{multi?.genres?.map((genre)=> { return <p key={genre.id}>{genre.name}</p>})}</h1>
            </div>
        </div>
    </div>
    
    :
    <></>
    }
    
    </Link>
    </>
  )
}

export default MultiCard