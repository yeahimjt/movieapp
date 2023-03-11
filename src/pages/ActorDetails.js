import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components'
import { useGetPeopleByIdQuery } from '../redux/services/tmdbAPI'
import { useGetPeopleKnownForQuery } from '../redux/services/tmdbAPI'
const ActorDetails = () => {
  const {personid} = useParams()
  const {data, isFetching, error} = useGetPeopleByIdQuery(personid)
  const {data:known,isFetching:knownFetching,error:knownError,} = useGetPeopleKnownForQuery(personid);

  if (isFetching) return <h1>Loading</h1> ;
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
            {known?.cast?.map((item,i) => {return (
                <MovieCard key={i} data={known} movie={item} i={i} />
            )})}
        </div>
      </div>
      :
      <div className="flex relative flex-col w-full pt-4">
        <p className="text-center text-2xl p-4 py-0">Part of crew for</p>
        <div className="flex w-full flex-wrap gap-6 justify-center items-center mt-4">
            {known?.crew?.map((item,i) => {return (
                <MovieCard key={i} data={known} movie={item} i={i} />
            )})}
        </div>
      </div>
    }
    </>
  )
}

export default ActorDetails