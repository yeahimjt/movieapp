import React, {useState} from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components'
import { useGetPeopleByIdQuery } from '../redux/services/tmdbAPI'
import { useGetPeopleKnownForQuery } from '../redux/services/tmdbAPI'
import { NavLink } from 'react-router-dom'
const ActorDetails = () => {
  const {personid} = useParams()
  const {data, isFetching, error} = useGetPeopleByIdQuery(personid)
  const [movieFilter, setMovieFilter] = useState(true)
  const [tvFilter, setTvFilter] = useState(false)
  const [filter, setFilter] = useState("movie_credits")
  const {data:known,isFetching:knownFetching,error:knownError,} = useGetPeopleKnownForQuery({filter, personid});
  console.log(known)
  const updateFilters = () => {
    setMovieFilter(!movieFilter)
    setTvFilter(!tvFilter)
    if (!movieFilter) {
      setFilter("movie_credits")

    }
    else if (!tvFilter) {
      setFilter("tv_credits")

    }
    console.log(filter)
  }

  if (isFetching) return ;
  if (error) return <h1>Error</h1>
  return (
    <>
    <div className="flex w-full justify-center ">
      <div className="bg-gray-100 w-[90%] max-w-[800px] flex flex-col p-4">
        <div className="flex justify-center">
          <img className="w-[300px] h-[300px] object-contain" src={`https://image.tmdb.org/t/p/w200/${data.profile_path}`} type="img/jpg" alt="movie poster"/>
        </div>
        <div className="flex flex-col">
          <div className="flex  gap-4 ">
            <div>
              <p className="text-3xl pt-2">{data.name}</p>
            </div>
            <div className="flex md:justify-center items-end gap-2">
              <AiFillStar className="text-yellow-400 mb-1"/>
              <p>{Math.round(data.popularity)}</p>
            </div>
          </div>
          <p className="italic text-sm">Known {data.known_for_department}</p>
          <div className="flex">
            <p className="pt-2 text-left">Born <br/><p className="pt-1">{data.birthday},  {data.place_of_birth}</p></p>

          </div>
          {data.deathday && <p className="pt-2">Died<p className="pt-1">{data.deathday}</p></p>}
          <p className="pt-2">Biography<p className="p-4 pt-1 ">{data.biography}</p></p>
        </div>
      </div>
    </div>
    {known?.cast?.length > known?.crew?.length ? 
      <div className="flex relative flex-col w-full pt-4">
        <p className="text-center text-2xl p-4 py-0">Appears In</p>
        <div className="flex w-full flex-wrap gap-6 justify-center items-center mt-4">
        {window.location.pathname === `/people/${data.id}` ? 
          <>
          <div className="flex w-full mx-auto justify-center items-center ">
            <div className="flex gap-6">
              <button className={movieFilter ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full" : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={movieFilter ? null : updateFilters}>Movies</button>
              <button className={tvFilter ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={tvFilter ? null : updateFilters}>TV</button>
            </div>

          </div>
          </>
          : 
          <div className="flex w-[90%] mx-auto justify-end items-center ">
            <NavLink to="/discover" className="text-sm flex  text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</NavLink>
          </div>
          }
            {known?.cast?.map((item,i) => {return (
                filter==="movie_credits" ? <MovieCard key={i} data={known} movie={item} i={i} filter="movie"/> : <MovieCard key={i} data={known} movie={item} i={i} filter="tv"/>
            )})}
        </div>
      </div>
      :
      <div className="flex relative flex-col w-full pt-4">
        <p className="text-center text-2xl p-4 py-0">Part of crew for</p>
        <div className="flex w-full flex-wrap gap-6 justify-center items-center mt-4">
        {window.location.pathname === `/people/${data.id}` ? 
          <>
          <div className="flex w-full mx-auto justify-center items-center ">
            <div className="flex gap-6">
              <button className={movieFilter ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full" : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={movieFilter ? null : updateFilters}>Movies</button>
              <button className={tvFilter ? "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] bg-slate-600 text-white rounded-full " : "left-0 gap-4 border-2 p-2 border-slate-600 w-[80px] rounded-full hover:cursor-pointer hover:bg-slate-600 hover:text-white hover:scale-110" } onClick={tvFilter ? null : updateFilters}>TV</button>
            </div>

          </div>
          </>
          : 
          <div className="flex w-[90%] mx-auto justify-end items-center ">
            <NavLink to="/discover" className="text-sm flex  text-gray-500  hover:cursor-pointer hover:text-slate-400 hover:scale-105">view all...</NavLink>
          </div>
          }
            {known?.crew?.map((item,i) => {return (
              filter==="movie_credits" ? <MovieCard key={i} data={known} movie={item} i={i} filter="movie"/> : <MovieCard key={i} data={known} movie={item} i={i} filter="tv"/>

            )})}
        </div>
      </div>
    }
    </>
  )
}

export default ActorDetails