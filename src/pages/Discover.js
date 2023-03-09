import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTopMoviesQuery } from '../redux/services/tmdbAPI';
import { useGetDiscoverMoviesQuery } from '../redux/services/tmdbAPI';
import { useGetMovieGenresQuery } from '../redux/services/tmdbAPI'
import { useGetTvGenresQuery } from '../redux/services/tmdbAPI'

import { MovieCard, TVCard } from '../components';

const Discover = () => {
  const dispatch = useDispatch();
  const { data, isFetching, error} = useGetDiscoverMoviesQuery();

  const tempData  = data?.results?.slice(0,12)

  if (isFetching) return ;
  if (error) return <h1>Error</h1>

  return (
    <div className="flex flex-col w-full gap-4 p-4 mt-24 items-center">
      <div className="w-[100%]">
        <h1 className="text-3xl text-center animate-slidedown ">{isFetching ? 'Fetching' : 'Discover'}</h1>
        <div className="w-[97%] flex justify-end">
          <p className="text-sm text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</p>
        </div>
      </div>
      <div className="flex  flex-wrap gap-y-7 gap-x-4 w-[95%] justify-center sm:justify-between">
        {tempData.map((item,i) => (
          <MovieCard key={item.id} data={data} movie={item} i={i} />
        ))}
      </div>
    </div>
  )
}

export default Discover