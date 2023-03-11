import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTopMoviesQuery } from '../redux/services/tmdbAPI';
import { NavLink } from 'react-router-dom';

import { MovieCard, TVCard } from '../components';


const Trending = ({limit}) => {
  const dispatch = useDispatch();
  const { data:trendingData, isFetching:trendingIsFetching, error: trendingError} = useGetTopMoviesQuery();

  let tempData;
  if (limit) {
     tempData  = trendingData?.results?.slice(0,8)
  }

  if (trendingIsFetching) return;
  if (trendingError) return <h1>Error</h1>

  return (
    <div className="flex flex-col w-full gap-4 p-4 mt-24 items-center">
      <div className="w-[100%]">
        <h1 className="text-3xl text-center ">Trending</h1>
        <div className="w-[90%] flex justify-end ">
        {window.location.pathname === '/trending' ? null : <NavLink to="/discover" className="text-sm text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</NavLink>} 
        </div>
      </div>
      <div className="flex  flex-wrap gap-y-7 gap-x-4 w-[95%] justify-center xll:justify-between">
        { tempData ? 
        tempData.map((item,i) => (
          item.title ? <MovieCard key={item.id} data={trendingData} movie={item} i={i} filter="movie" />
          : <TVCard key={item.id} data={trendingData} tv={item} i={i} />
          ))
        :
        trendingData.results.map((item,i) => (
          item.title ? <MovieCard key={item.id} data={trendingData} movie={item} i={i} />
          : <TVCard key={item.id} data={trendingData} tv={item} i={i} />
          ))
        }
      </div>
    </div>
  )
}

export default Trending