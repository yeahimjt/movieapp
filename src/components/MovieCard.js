import React, {useEffect, useState} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useGetMovieGenresQuery } from '../redux/services/tmdbAPI';
import { useGetTvGenresQuery } from '../redux/services/tmdbAPI';
import { useGetMovieByIDQuery } from '../redux/services/tmdbAPI';

import { Link } from 'react-router-dom';

const MovieCard = ({ data, movie, i, filter }) => {
  let movieid = movie?.id

  const {data:movieData, isFetching:movieIsFetching, error:movieError} = useGetMovieByIDQuery({ filter,movieid })
  if (movieIsFetching) return ;
  if (movieError) return <h1>Error</h1>
  return (
    <>
    <Link to={filter === "movie" ? `/movies/${movie?.id}` : `/tv/${movie?.id}`}>
    <div className="w-[307px] h-[500px] bg-gray-100 mb-8 p-10 shadow-2xl shadow-white-500 animate-slideup  backdrop-blur-sm hover:bg-slate-900 hover:drop-shadow-4xl hover:scale-105 transition-all hover:cursor-pointer hover:text-white">
          <div className="">
            <div className="flex justify-center items-center">
            {movie?.poster_path ? <img className="" src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} alt="movie poster"/> : <p className="w-[200px] h-[300px]  flex text-red-500 justify-center items-center">Not found</p>}
            </div>
            <div className="p-2">
              <div className="flex justify-between" key={movie.i} value={movie.id}>
                <p>{movie.title}</p>
                <div className="flex justify-center items-center gap-1">
                  <AiFillStar className="text-yellow-500"/>
                  <p>{Math.round(movie.vote_average)}</p>
                </div>
              </div>
                <h1 className="text-[12px] mt-3 italic text-gray-400">{movieData?.genres?.map((genre)=> { return <p key={genre.id}>{genre.name}</p>})}</h1>
            </div>
          </div>
    </div>
    </Link>
    </>
  )
}

export default MovieCard