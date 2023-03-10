import React, {useEffect} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useGetMovieGenresQuery } from '../redux/services/tmdbAPI';
import { useGetTvGenresQuery } from '../redux/services/tmdbAPI';
import { useGetMovieByIDQuery } from '../redux/services/tmdbAPI';

import { Link } from 'react-router-dom';

import { useGetTVByIDQuery } from '../redux/services/tmdbAPI';

const TVCard = ({ data, tv, i }) => {
  const {data:tvData , isFetching: tvIsFetching, error: tvError} = useGetTVByIDQuery(tv?.id)
  if (tvIsFetching) return ;
  if (tvError) return 
  return (
    <>
    <Link to={`/tv/${tv.id}`}>
    <div className="w-[307px] h-[500px] bg-gray-100 p-10 shadow-2xl shadow-white-500 animate-slideup  backdrop-blur-sm hover:bg-slate-900 hover:drop-shadow-4xl hover:scale-105 transition-all hover:cursor-pointer hover:text-white">
          <div className="">
            <div className="flex justify-center items-center">
            {tv?.poster_path ? <img className="" src={`https://image.tmdb.org/t/p/w200/${tv?.poster_path}`} alt="movie poster"/> : <p className="w-[200px] h-[300px]  flex text-red-500 justify-center items-center">Not found</p>}
            </div>
            <div className="p-2">
              <div className="flex justify-between" key={tv.i} value={tv.id}>
                <p>{tv.name}</p>
                <div className="flex justify-center items-center gap-1">
                  <AiFillStar className="text-yellow-500"/>
                  <p>{Math.round(tv.vote_average)}</p>
                </div>
              </div>
              <h1 className="text-[12px] mt-3 italic text-gray-500">{tvData.genres.map((genre)=> { return <p key={genre.id}>{genre.name}</p>})}</h1>
            </div>
          </div>
    </div>
    </Link>
    </>
  )
}

export default TVCard