import React from 'react'
import { useGetPopularPeopleQuery } from '../redux/services/tmdbAPI'
import { ActorsCard } from '../components';

import { Link, NavLink } from 'react-router-dom';

const Actors = () => {
const {data, isFetching, error} = useGetPopularPeopleQuery();

if (isFetching) return  ;
if (error) return <h1>Error</h1>
console.log(data.results)
  return (
    <>
    <div className="flex flex-col w-full gap-4 p-4 mt-24 items-center">
      <div className="w-[100%]">
        <h1 className="text-3xl text-center animate-slidedown ">{isFetching ? 'Fetching' : 'People'}</h1>
        <div className="w-[90%] flex justify-end">
          {window.location.pathname === '/people' ? null : <NavLink to="/actors" className="text-sm text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</NavLink>} 
        </div>
      </div>
      <div className="flex  flex-wrap gap-y-7 gap-x-4 w-[95%] justify-center xll:justify-between">
        {data.results.map((item,i) => (
          <ActorsCard key={item.id} data={data} actor={item} i={i} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Actors