import React, {useEffect} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useGetMovieGenresQuery } from '../redux/services/tmdbAPI';
import { useGetTvGenresQuery } from '../redux/services/tmdbAPI';
import { useGetMovieByIDQuery } from '../redux/services/tmdbAPI';

import { Link } from 'react-router-dom';

const MovieCard = ({ data, movie, i }) => {
  const {data:movieData, isFetching:movieIsFetching, error:movieError} = useGetMovieByIDQuery(movie.id)
  


  return (
    <>
    <Link to={`/movies/${movie?.id}`}>
    <div className="w-[307px] h-[500px] bg-gray-100 p-10 shadow-2xl shadow-white-500 animate-slideup  backdrop-blur-sm hover:bg-slate-900 hover:drop-shadow-4xl hover:scale-105 transition-all hover:cursor-pointer hover:text-white">
          <div className="">
            <div className="flex justify-center items-center">
              <img className="w-[300px] h-[300px] object-fill" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} type="img/jpg" alt="movie poster"/>
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