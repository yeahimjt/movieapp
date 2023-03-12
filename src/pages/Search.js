import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useGetSearchMultiQuery } from '../redux/services/tmdbAPI'

import { MovieCard,MultiCard, Paginate, TVCard } from '../components';

const Search = () => {
    const search = useParams()
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("multi")
    let searchFor = search.search
    const {data, isFetching, error} = useGetSearchMultiQuery({filter,searchFor, page})

    useEffect(()=> {
        setFilter("multi")
    },[search])

    const increment = () => {
        if (page === data?.total_pages) {

        }
        else {
        setPage(page+1)
        }
      }
      const decrement = () => {
        if (page === 1) {
        }
        else {
          setPage(page-1)
        }
      }
      const updateFilters = (e) => {
        let option = e.target.value
        setFilter(option)
        setPage(1)
      }


  return (

        <div className="flex flex-col w-full gap-4 p-4 mt-24 items-start">
            <h1 className="text-3xl  animate-slidedown flex flex-wrap gap-4 items-center pl-8"><p>Results for </p><p className="text-2xl italic text-slate-600">{search.search}</p><p className="text-sm relative top-1 italic">with filters {filter==="multi" ? "all" : filter}</p></h1>
            
            {data.results.length === 0 ? 
                <div className="w-full">
                <div className="flex gap-6">
                    <button value="movie" className={filter==="movie"  ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full" : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={filter==="movie" ? null : updateFilters}>Movies</button>
                    <button value="tv" className={filter==="tv" ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={filter==="tv" ? null : updateFilters}>TV </button>
                    <button value="person" className={filter==="person" ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={filter==="person" ? null : updateFilters}>People </button>
                    </div>
                <p className=" m-5 text-center text-red-400">No Results Match Filter</p>

                </div>
            :
            <>
            <div className="flex  flex-wrap gap-y-7 gap-x-4 w-[95%] justify-center xll:justify-center">
                <div className="flex w-[90%] mx-auto justify-between items-center ">
                    <div className="flex gap-6">
                    <button value="movie" className={filter==="movie"  ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full" : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={filter==="movie" ? null : updateFilters}>Movies</button>
                    <button value="tv" className={filter==="tv" ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={filter==="tv" ? null : updateFilters}>TV </button>
                    <button value="person" className={filter==="person" ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={filter==="person" ? null : updateFilters}>People </button>
                    </div>
                    <Paginate increment={increment} decrement={decrement} page={page} max={data?.total_pages}/>
                </div>
            </div>
            <div className="flex  flex-wrap gap-y-7 gap-x-4 w-[95%] justify-center xll:justify-center">
                {data?.results?.map((item,i) => (
                    <MultiCard key={item.id} data={data} multi={item} i={i} filter={filter}/>
                ))}
            </div>
            </>
            }
        </div>
  )
}

export default Search