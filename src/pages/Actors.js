import React, {useState} from 'react'
import { useGetPeopleQuery } from '../redux/services/tmdbAPI'
import { useParams } from 'react-router-dom'
import { ActorsCard } from '../components';
import {Paginate} from '../components';
import { Link, NavLink } from 'react-router-dom';
import { MdPerson4 } from 'react-icons/md';

const Actors = () => {
const [page, setPage] = useState(1);
const [popularFilter, setPopularFilter] = useState(true)
const [latestFilter, setLatestFilter] = useState(false)
const [filter, setFilter] = useState("popular")
const {data, isFetching, error} = useGetPeopleQuery({filter,page});

let idk = useParams()
console.log(idk)

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
  setPopularFilter(!popularFilter)
  setLatestFilter(!latestFilter)
  if (!popularFilter) {
    setFilter("popular")
    setPage(1)
  }
  else if (!latestFilter) {
    setFilter("latest")
    setPage(1)
  }

}

if (isFetching) return  ;
if (error) return <h1>Error</h1>

  return (
    <>
    <div className="flex flex-col w-full gap-4 p-4 mt-24 items-center">
      <div className="w-[100%]">
        <h1 className="text-3xl text-center animate-slidedown flex justify-center items-center gap-4 "><MdPerson4/>People</h1>
        <div className="w-[90%] flex justify-end">
        {window.location.pathname === '/people' ?
          <>
          <div className="flex w-[100%] mx-auto justify-end items-center ">
            <Paginate increment={increment} decrement={decrement} page={page} />
          </div>
          </>
          :
          <div className="flex w-[90%] mx-auto justify-end items-center ">
            <NavLink to="/discover" className="text-sm flex  text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</NavLink>
          </div>
          }
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