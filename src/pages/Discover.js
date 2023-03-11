import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetDiscoverQuery } from '../redux/services/tmdbAPI';

import { MovieCard, Paginate, TVCard } from '../components';
import { NavLink } from 'react-router-dom';


const Discover = ({limit}) => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [movieFilter, setMovieFilter] = useState(true)
  const [tvFilter, setTvFilter] = useState(false)
  const [filter, setFilter] = useState("movie")
  const { data, isFetching, error} = useGetDiscoverQuery({filter,page});
  console.log(filter)

  let tempData;
  if (limit) {
     tempData  = data?.results?.slice(0,8)
  }
  const increment = () => {
    setPage(page+1)
  }
  const decrement = () => {
    if (page === 1) {

    }
    else {
      setPage(page-1)
    }
  }

  const updateFilters = () => {
    setMovieFilter(!movieFilter)
    setTvFilter(!tvFilter)
    if (!movieFilter) {
      setFilter("movie")
      setPage(1)
    }
    else if (!tvFilter) {
      setFilter("tv")
      setPage(1)
    }
    console.log(filter)
  }

  if (isFetching) return ;
  if (error) return <h1>Error</h1>

  return (
    <div className="flex flex-col w-full gap-4 p-4 mt-24 items-center">
      <div className="w-[100%]">
        <h1 className="text-3xl text-center animate-slidedown ">{isFetching ? 'Fetching' : 'Discover'}</h1>
        <div className="w-[100%] flex justify-end">
          {window.location.pathname === '/discover' ? 
          <>
          <div className="flex w-[90%] mx-auto justify-between items-center bg-red-50">
            <div className="flex gap-6">
              <button className={movieFilter ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full" : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={movieFilter ? null : updateFilters}>Movies</button>
              <button className={tvFilter ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={tvFilter ? null : updateFilters}>TV</button>
            </div>
            <Paginate increment={increment} decrement={decrement} page={page} />
          </div>
          </>
          : <NavLink to="/discover" className="text-sm text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</NavLink>} 
        </div>
      </div>
      <div className="flex  flex-wrap gap-y-7 gap-x-4 w-[95%] justify-center xll:justify-between">
        {tempData ?
        tempData.map((item,i) => (
          <MovieCard key={item.id} data={data} movie={item} i={i} filter={filter}/>
        ))
        :
        data.results.map((item,i) => (
          <MovieCard key={item.id} data={data} movie={item} i={i} filter={filter}/>
        ))
        }
      </div>
    </div>
  )
}

export default Discover